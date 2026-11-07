#!/usr/bin/env node
/* Checks every written unit against the authoring rules in content/README.md.
   Usage: node tools/validate.js [unit-id ...]      (no arguments: all written units)
   Exit code 1 if any unit has errors. */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const ctx = { window: {}, console };
ctx.registerUnit = (u) => { (ctx.window.__units = ctx.window.__units || []).push(u); };
vm.createContext(ctx);
const load = (rel) => vm.runInContext(fs.readFileSync(path.join(ROOT, rel), "utf8"), ctx, { filename: rel });

load("content/manifest.js");
load("content/lexique.js");
const M = ctx.window.MANIFEST;
const only = process.argv.slice(2);

/* same tokeniser as assets/app.js */
const LET = "A-Za-zÀ-ÖØ-öø-ÿŒœ";
const WORD = new RegExp("(?:[cdjlmnstCDJLMNST]|[Qq]u|[Jj]usqu|[Ll]orsqu|[Pp]uisqu)['’](?=[" + LET + "])|[" + LET + "]+(?:['’-][" + LET + "]+)*", "g");
const keyOf = (w) => w.toLowerCase().replace(/’/g, "'");
const TAGS = new Set(["e", "s", "m", "f", "pc", "imp", "fr", "ipa", "b"]);
const TYPES = new Set(["form", "cloze", "choose", "ecoute", "transform", "translate", "dictee", "spot", "sort"]);

let failed = false;
const lex = new Map();
for (const r of ctx.window.LEXIQUE) {
  lex.set(r[0], "shared");
  if (r.length !== 8 || !/^\/[^/\s][^/]*\/$/.test(r[7])) { console.log(`content/lexique.js: "${r[0]}" needs its IPA as the 8th field`); failed = true; }
}

function parseMarkup(s, where, errs) {
  // returns { plain, fr: [strings inside {fr:}] }
  let depth = [], plain = "", fr = [], cur = null;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "{") {
      const m = /^\{([a-z]+):/.exec(s.slice(i));
      if (!m) { errs.push(`${where}: "{" without tag`); continue; }
      if (!TAGS.has(m[1])) errs.push(`${where}: unknown tag {${m[1]}:`);
      depth.push(m[1]);
      if (m[1] === "fr") cur = "";
      i += m[0].length - 1;
    } else if (c === "}") {
      const t = depth.pop();
      if (t === undefined) errs.push(`${where}: unbalanced "}"`);
      if (t === "fr") { fr.push(cur); cur = null; }
    } else {
      plain += c;
      if (cur !== null) cur += c;
    }
  }
  if (depth.length) errs.push(`${where}: unclosed {${depth.join(", ")}`);
  const html = plain.match(/<[^>]+>/g) || [];
  for (const h of html) if (!/^<\/?em>$|^<br>$/.test(h)) errs.push(`${where}: HTML not allowed: ${h}`);
  return { plain: plain.replace(/<br>/g, " ").replace(/<\/?em>/g, ""), fr };
}

function needWords(text, where, missing) {
  const re = new RegExp(WORD.source, "g");
  let m;
  while ((m = re.exec(text))) {
    const k = keyOf(m[0]);
    if (!lex.has(k) && k.length > 1) missing.add(k);   // single letters (the e in «le e garde») need no fiche
  }
}

for (const ph of M.phases) {
  for (const mu of ph.units) {
    if (!mu.file) continue;
    if (!fs.existsSync(path.join(ROOT, mu.file))) { console.log(`\n${mu.id}: ${mu.file} not written yet`); if (!only.length || only.includes(mu.id)) failed = true; continue; }
    const errs = [], warns = [], missing = new Set();
    const before = (ctx.window.__units || []).length;
    try { load(mu.file); } catch (e) { console.log(`\n${mu.id}: cannot load ${mu.file}: ${e.message}`); failed = true; continue; }
    const u = ctx.window.__units[before];
    if (!u) { console.log(`\n${mu.id}: file did not call registerUnit`); failed = true; continue; }
    // lexicon first, so the unit's own words count
    for (const [i, r] of (u.lexique || []).entries()) {
      if (!Array.isArray(r) || r.length !== 8) { errs.push(`lexique[${i}] "${r && r[0]}": needs 8 fields (the last is the IPA)`); continue; }
      if (!/^\/[^/\s][^/]*\/$/.test(r[7])) errs.push(`lexique "${r[0]}": IPA must look like /paʁle/`);
      if (r[0] !== r[0].toLowerCase() || /’/.test(r[0])) errs.push(`lexique key "${r[0]}": lower case, straight apostrophe`);
      if (!["", "m", "f"].includes(r[3])) errs.push(`lexique "${r[0]}": gender must be "", "m" or "f"`);
      if (lex.has(r[0])) warns.push(`lexique "${r[0]}" already defined in ${lex.get(r[0])}`);
      lex.set(r[0], u.id);
    }
    if (only.length && !only.includes(mu.id)) continue;

    if (u.id !== mu.id) errs.push(`id "${u.id}" does not match manifest "${mu.id}"`);
    for (const f of ["title", "objectif", "systeme", "oral", "exemples", "pieges", "exercices", "lecture", "vocabulaire", "lexique"])
      if (u[f] === undefined) errs.push(`missing field ${f}`);
    const raw = fs.readFileSync(path.join(ROOT, mu.file), "utf8");
    if (raw.includes("—")) errs.push("contains an em dash");

    const fr = (s, where) => { const r = parseMarkup(s, where, errs); needWords(r.plain, where, missing); return r; };
    const en = (s, where) => { const r = parseMarkup(s, where, errs); r.fr.forEach((x) => needWords(x, where, missing)); return r; };

    (u.systeme || []).forEach((b, i) => {
      const w = `systeme[${i}]`;
      if (b.p) en(b.p, w);
      if (b.list) b.list.forEach((x, j) => en(x, `${w}.list[${j}]`));
      if (b.table) {
        const k = b.table.kinds || [];
        b.table.rows.forEach((row, r) => row.forEach((cell, c) => {
          if (k[c] === "fr") fr(cell, `${w}.row${r}`); else parseMarkup(cell, `${w}.row${r}`, errs);
        }));
        if (b.table.head.length !== k.length) errs.push(`${w}: head and kinds differ in length`);
      }
      if (b.marge) fr(b.marge, `${w}.marge`);
    });
    ["oral", "pieges"].forEach((sec) => (u[sec] || []).forEach((r, i) => {
      if (!r.label || !r.html) errs.push(`${sec}[${i}]: needs label and html`);
      fr(r.label || "", `${sec}[${i}].label`); en(r.html || "", `${sec}[${i}]`);
    }));
    if ((u.exemples || []).length < 5) warns.push(`only ${(u.exemples || []).length} examples`);
    (u.exemples || []).forEach((x, i) => {
      if (!x.fr || !x.en) errs.push(`exemples[${i}]: needs fr and en`);
      fr(x.fr || "", `exemples[${i}]`);
      if (x.note) fr(x.note, `exemples[${i}].note`);
    });
    const ids = new Set();
    (u.exercices || []).forEach((g, gi) => {
      if (!g.titre || !g.items) errs.push(`exercices[${gi}]: needs titre and items`);
      (g.items || []).forEach((it, ii) => {
        const w = `exercices[${gi}].items[${ii}]`;
        if (!TYPES.has(it.t)) { errs.push(`${w}: unknown type "${it.t}"`); return; }
        const A = Array.isArray(it.a) ? it.a : [it.a];
        if (it.t !== "sort" && (!A.length || !A[0])) errs.push(`${w}: missing answer`);
        for (const f of ["q", "a", "say", "consigne", "hint", "sujet", "verbe"]) {
          const v = it[f]; const vs = Array.isArray(v) ? v : [v];
          vs.forEach((s) => { if (typeof s === "string" && /[{}<>]/.test(s)) errs.push(`${w}: no markup in ${f}`); });
        }
        if (it.why) parseMarkup(it.why, `${w}.why`, errs);
        if (it.t === "form" && (!it.sujet || !it.verbe)) errs.push(`${w}: form needs sujet and verbe`);
        if (it.t === "cloze" && (!it.q || it.q.split("___").length !== 2)) errs.push(`${w}: cloze needs exactly one ___`);
        if ((it.t === "choose" || it.t === "ecoute")) {
          if (!Array.isArray(it.options) || it.options.length < 2) errs.push(`${w}: needs 2+ options`);
          else if (!it.options.includes(A[0])) errs.push(`${w}: answer "${A[0]}" not in options`);
        }
        if (it.t === "ecoute" && !it.say) errs.push(`${w}: ecoute needs say`);
        if (["transform", "translate", "spot"].includes(it.t) && !it.q) errs.push(`${w}: needs q`);
        if (it.t === "transform" && !it.consigne) errs.push(`${w}: transform needs consigne`);
        if (it.t === "spot" && A.some((a) => a === it.q)) errs.push(`${w}: spot answer equals the prompt`);
        if (it.t === "sort") {
          if (!Array.isArray(it.bins) || !Array.isArray(it.items)) errs.push(`${w}: sort needs bins and items`);
          else it.items.forEach((p) => { if (!(p[1] >= 0 && p[1] < it.bins.length)) errs.push(`${w}: bad bin for "${p[0]}"`); });
        }
        const sig = it.t + "|" + (it.q || it.say || it.sujet + it.verbe || "") + "|" + A[0];
        if (ids.has(sig)) errs.push(`${w}: duplicate item`);
        ids.add(sig);
      });
    });
    const L = u.lecture || {};
    (L.phrases || []).forEach((p, i) => { if (!p.fr || !p.en) errs.push(`lecture.phrases[${i}]: needs fr and en`); fr(p.fr || "", `lecture[${i}]`); });
    (L.notes || []).forEach((n, i) => { fr(n.label || "", `lecture.notes[${i}].label`); en(n.html || "", `lecture.notes[${i}]`); });
    (u.vocabulaire || []).forEach((v, i) => { if (!v.fr || !v.en) errs.push(`vocabulaire[${i}]: needs fr and en`); fr(v.fr || "", `vocabulaire[${i}]`); });

    const nItems = (u.exercices || []).reduce((n, g) => n + (g.items || []).length, 0);
    const words = (L.phrases || []).map((p) => parseMarkup(p.fr, "", []).plain).join(" ").split(/\s+/).filter(Boolean).length;
    console.log(`\n${u.id}  ${u.title}`);
    console.log(`  ${(u.exemples || []).length} examples, ${nItems} exercise items, reading ${words} words, ${(u.vocabulaire || []).length} vocabulary, ${(u.lexique || []).length} lexicon entries`);
    if (missing.size) errs.push(`no lexicon entry for: ${[...missing].sort().join(", ")}`);
    errs.forEach((e) => console.log("  ERROR " + e));
    warns.forEach((e) => console.log("  warn  " + e));
    if (errs.length) failed = true; else console.log("  ok");
  }
}
process.exit(failed ? 1 : 0);
