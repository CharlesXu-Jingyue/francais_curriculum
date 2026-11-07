/* Cahier de français: the study page.
   Content comes from content/manifest.js, content/lexique.js and content/units/*.js (see content/README.md).
   Plain JavaScript, no build step, works from file:// and from any static host. */
(function () {
  "use strict";

  /* ================= registry ================= */
  var UNITS = {};
  window.registerUnit = function (u) { UNITS[u.id] = u; };
  var M = window.MANIFEST;
  var ORDER = [];                       // manifest units in course order, with phase
  M.phases.forEach(function (ph) { ph.units.forEach(function (mu) { ORDER.push({ mu: mu, ph: ph }); }); });
  function metaOf(id) { for (var i = 0; i < ORDER.length; i++) if (ORDER[i].mu.id === id) return ORDER[i]; return null; }

  /* ================= small helpers ================= */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function h(tag, attrs, html) {
    var e = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "class") e.className = attrs[k];
      else if (k === "text") e.textContent = attrs[k];
      else if (k.slice(0, 2) === "on") e.addEventListener(k.slice(2), attrs[k]);
      else if (attrs[k] !== null && attrs[k] !== undefined && attrs[k] !== false) e.setAttribute(k, attrs[k] === true ? "" : attrs[k]);
    });
    if (html !== undefined) e.innerHTML = html;
    return e;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function pad(n) { return n < 10 ? "0" + n : "" + n; }
  function iso(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
  function today() { return iso(new Date()); }
  function addDays(isoDay, n) { var p = isoDay.split("-"); var d = new Date(+p[0], +p[1] - 1, +p[2] + n); return iso(d); }
  var JOURS = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
  var MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
  function frDate(d, withYear) {
    var j = JOURS[d.getDay()];
    return j.charAt(0).toUpperCase() + j.slice(1) + " " + (d.getDate() === 1 ? "1er" : d.getDate()) + " " + MOIS[d.getMonth()] + (withYear === false ? "" : " " + d.getFullYear());
  }
  function frIso(isoDay) { var p = isoDay.split("-"); return frDate(new Date(+p[0], +p[1] - 1, +p[2]), false).toLowerCase(); }
  function hash(s) { var x = 5381; for (var i = 0; i < s.length; i++) x = ((x << 5) + x + s.charCodeAt(i)) | 0; return (x >>> 0).toString(36); }
  function first(a) { return Array.isArray(a) ? a[0] : a; }
  function answers(it) { return Array.isArray(it.a) ? it.a : [it.a]; }
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ================= saved state ================= */
  var KEY = "francais-cahier-v1";
  function blank() { return { v: 1, settings: { rate: 0.85, grid: "moyen", theme: "auto", voice: "" }, units: {}, srs: {}, mots: {}, last: null }; }
  var S = blank();
  try {
    var raw = localStorage.getItem(KEY);
    if (raw) { var got = JSON.parse(raw); if (got && got.v === 1) { S = blank(); Object.keys(got).forEach(function (k) { S[k] = got[k]; }); S.settings = Object.assign(blank().settings, got.settings || {}); } }
  } catch (e) { /* storage unavailable: the page still works, progress is not kept */ }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ } }
  function unitState(id) { return S.units[id] || (S.units[id] = { started: today(), done: null, answers: {} }); }

  /* ================= ink mini-markup ================= */
  var TAGCLASS = { e: "end", s: "mute", m: "hm", f: "hf", pc: "hpc", imp: "himp", fr: "f", ipa: "ipa" };
  function ink(s) {
    s = String(s || "");
    var out = "", stack = [], i = 0;
    while (i < s.length) {
      var c = s.charAt(i);
      if (c === "{") {
        var m = /^\{([a-z]+):/.exec(s.slice(i, i + 8));
        if (m) { stack.push(m[1]); out += m[1] === "b" ? "<b>" : '<span class="' + (TAGCLASS[m[1]] || "") + '">'; i += m[0].length; continue; }
      }
      if (c === "}" && stack.length) { out += stack.pop() === "b" ? "</b>" : "</span>"; i++; continue; }
      if (c === "‿") { out += '<span class="li">‿</span>'; i++; continue; }
      out += c; i++;
    }
    while (stack.length) out += stack.pop() === "b" ? "</b>" : "</span>";
    return out;
  }
  function plain(s) { return String(s || "").replace(/\{[a-z]+:/g, "").replace(/\}/g, "").replace(/<br>/g, " ").replace(/<\/?em>/g, ""); }
  function speakable(s) { return plain(s).replace(/‿/g, " "); }

  /* ================= audio ================= */
  var hasTTS = "speechSynthesis" in window;
  var voices = [], voice = null, keepAlive = [];
  var A = { run: 0, ctl: null };
  function pickVoice() {
    if (!hasTTS) return;
    voices = speechSynthesis.getVoices().filter(function (v) { return /^fr/i.test(v.lang); });
    voice = null;
    if (S.settings.voice) voice = voices.find(function (v) { return v.name === S.settings.voice; }) || null;
    if (!voice) voice = voices.find(function (v) { return v.lang === "fr-FR" && /premium|enhanced|amélie|thomas|audrey|google/i.test(v.name); })
      || voices.find(function (v) { return v.lang === "fr-FR"; }) || voices[0] || null;
    fillVoiceSelect();
  }
  if (hasTTS) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  var SPEAKER = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor" fill-opacity=".12"/><path d="M15.5 9a4 4 0 0 1 0 6"/><path d="M18 6.5a7.5 7.5 0 0 1 0 11"/></svg>';
  function sayBtn(label, text, extra) {
    var b = h("button", { type: "button", class: "say" + (extra ? " " + extra : ""), "aria-label": label, title: "Listen" }, SPEAKER);
    if (text !== undefined) b.addEventListener("click", function () { stopAudio(); say(text, b); });
    return b;
  }
  function say(text, btn, opts) {
    opts = opts || {};
    if (!hasTTS) { if (opts.onend) setTimeout(function () { opts.onend(0); }, 0); return; }
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = "fr-FR"; u.rate = opts.rate || S.settings.rate; if (voice) u.voice = voice;
    keepAlive.push(u); if (keepAlive.length > 20) keepAlive.shift();
    if (btn) btn.classList.add("playing");
    var t0 = Date.now(), done = false;
    u.onend = u.onerror = function () { if (done) return; done = true; if (btn) btn.classList.remove("playing"); if (opts.onend) opts.onend(Date.now() - t0); };
    speechSynthesis.speak(u);
  }
  function stopAudio() {
    A.run++;
    if (A.ctl) { A.ctl.reset(); A.ctl = null; }
    if (hasTTS) speechSynthesis.cancel();
    $$(".say.playing").forEach(function (b) { b.classList.remove("playing"); });
    $$(".avous").forEach(function (x) { x.remove(); });
    $$(".s.speaking").forEach(function (x) { x.classList.remove("speaking"); });
  }
  /* play a list of {text, btn, row, el}; the control button toggles to «Arrêter» and stops it */
  function playSeq(list, ctlBtn, mode) {
    if (A.ctl && A.ctl.btn === ctlBtn) { stopAudio(); return; }
    stopAudio();
    var run = A.run, i = 0, label = ctlBtn.textContent;
    ctlBtn.textContent = "Arrêter"; ctlBtn.setAttribute("aria-pressed", "true"); ctlBtn.title = "Stop";
    A.ctl = { btn: ctlBtn, reset: function () { ctlBtn.textContent = label; ctlBtn.setAttribute("aria-pressed", "false"); ctlBtn.title = ctlBtn.dataset.title || ""; } };
    (function next() {
      if (run !== A.run) return;
      if (i >= list.length) { stopAudio(); return; }
      var x = list[i++];
      if (x.el) x.el.classList.add("speaking");
      say(x.text, x.btn, { onend: function (dur) {
        if (x.el) x.el.classList.remove("speaking");
        if (run !== A.run) return;
        if (mode === "repeat") {
          var tag = h("span", { class: "avous", text: "à vous" });
          var spot = x.row && $(".fr-line", x.row);
          if (spot) spot.after(tag);
          setTimeout(function () { tag.remove(); next(); }, Math.max(1600, dur * 1.3 + 700));
        } else setTimeout(next, 650);
      } });
    })();
  }

  /* ================= lexicon and fiches ================= */
  var LEX = {};
  function addLex(r) { if (!LEX[r[0]]) LEX[r[0]] = { l: r[1], c: r[2], g: r[3], a: r[4], en: r[5], n: r[6] }; }
  var LET = "A-Za-zÀ-ÖØ-öø-ÿŒœ";
  var WORD = new RegExp("(?:[cdjlmnstCDJLMNST]|[Qq]u|[Jj]usqu|[Ll]orsqu|[Pp]uisqu)['’](?=[" + LET + "])|[" + LET + "]+(?:['’-][" + LET + "]+)*", "g");
  var GLOSS_SEL = ".date, h1, h2, .note, .f, .fr-line, .reading, td.fr, .vf, .where, .glossable";
  function glossify(root) {
    $$(GLOSS_SEL, root).filter(function (b) {
      return !b.closest(".item, button, .legend, .drawer, .panel") && !(b.parentElement && b.parentElement.closest(GLOSS_SEL)) && !b.querySelector(".w");
    }).forEach(glossBox);
  }
  function glossBox(box) {
    var walker = document.createTreeWalker(box, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null);
    var map = [], text = "", n;
    while ((n = walker.nextNode())) {
      if (n.nodeType === 1) { if (n.tagName === "BR") text += "\n"; else if (n.tagName === "BUTTON" || n.tagName === "INPUT") text += " "; continue; }
      if (n.parentElement && n.parentElement.closest("button")) { text += " ".repeat(n.data.length); continue; }
      map.push({ node: n, start: text.length, len: n.data.length });
      text += n.data;
    }
    function locate(pos, isEnd) {
      for (var i = 0; i < map.length; i++) {
        var m = map[i];
        if (isEnd ? (pos > m.start && pos <= m.start + m.len) : (pos >= m.start && pos < m.start + m.len)) return { node: m.node, off: pos - m.start };
      }
      return null;
    }
    var toks = [], m, re = new RegExp(WORD.source, "g");
    while ((m = re.exec(text))) {
      var k = m[0].toLowerCase().replace(/’/g, "'");
      if (LEX[k]) toks.push({ s: m.index, e: m.index + m[0].length, k: k });
    }
    for (var i = toks.length - 1; i >= 0; i--) {
      var t = toks[i], a = locate(t.s, false), b = locate(t.e, true);
      if (!a || !b) continue;
      var r = document.createRange();
      r.setStart(a.node, a.off); r.setEnd(b.node, b.off);
      var w = h("span", { class: "w", "data-k": t.k, tabindex: "0", role: "button", "aria-haspopup": "dialog" });
      w.appendChild(r.extractContents());
      r.insertNode(w);
    }
  }

  var fiche, fx = {}, ficheWord = null;
  function buildFiche() {
    fiche = h("div", { class: "fiche", id: "fiche", role: "dialog", "aria-labelledby": "fiche-mot", tabindex: "-1", hidden: true });
    fiche.innerHTML =
      '<div class="fiche-head"><span class="fiche-mot" id="fiche-mot"></span></div>' +
      '<p class="fiche-l"></p><p class="fiche-a"></p><p class="fiche-en"></p><p class="fiche-n"></p><p class="fiche-ph" hidden></p>' +
      '<div class="fiche-actions"><button type="button" class="b-ph" title="Translate the whole sentence">Traduire la phrase</button>' +
      '<button type="button" class="b-rev" aria-pressed="false" title="Add this word to your review queue">Ajouter à la révision</button></div>';
    var head = $(".fiche-head", fiche);
    fx.say = sayBtn("Écouter le mot");
    fx.say.addEventListener("click", function () {
      if (!ficheWord) return;
      var t = ficheWord.textContent, e = LEX[ficheWord.dataset.k];
      if (/['’]$/.test(t)) t = e.l.split(",")[0];
      stopAudio(); say(t, fx.say);
    });
    head.appendChild(fx.say);
    head.appendChild(h("button", { type: "button", class: "fiche-x", "aria-label": "Fermer", title: "Close", onclick: function () { closeFiche(true); } }, "×"));
    fx.mot = $(".fiche-mot", fiche); fx.l = $(".fiche-l", fiche); fx.a = $(".fiche-a", fiche); fx.en = $(".fiche-en", fiche);
    fx.n = $(".fiche-n", fiche); fx.ph = $(".fiche-ph", fiche); fx.bph = $(".b-ph", fiche); fx.rev = $(".b-rev", fiche);
    fx.bph.addEventListener("click", function () {
      fx.ph.hidden = !fx.ph.hidden;
      fx.bph.textContent = fx.ph.hidden ? "Traduire la phrase" : "Masquer la phrase";
      if (ficheWord) placeFiche(ficheWord);
    });
    fx.rev.addEventListener("click", function () {
      if (!ficheWord) return;
      var k = ficheWord.dataset.k, e = LEX[k], on = !S.mots[k];
      if (on) S.mots[k] = { fr: e.l, en: e.en, box: 1, due: today(), added: today() }; else delete S.mots[k];
      save(); syncRevBtn(k); updateDue();
    });
    document.body.appendChild(fiche);
    document.addEventListener("click", function (ev) {
      var w = ev.target.closest(".w");
      if (w) { openFiche(w, false); return; }
      if (ficheWord && !ev.target.closest("#fiche")) closeFiche(false);
    });
    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape") { if (ficheWord) { closeFiche(true); return; } closeDrawer(); closePanel(); return; }
      var w = ev.target.closest && ev.target.closest(".w");
      if (w && (ev.key === "Enter" || ev.key === " ")) { ev.preventDefault(); openFiche(w, true); }
    });
    window.addEventListener("resize", function () { closeFiche(false); });
  }
  function syncRevBtn(k) {
    var on = !!S.mots[k];
    fx.rev.setAttribute("aria-pressed", String(on));
    fx.rev.textContent = on ? "Retirer de la révision" : "Ajouter à la révision";
  }
  var phoneMQ = window.matchMedia("(max-width: 640px)");
  function placeFiche(w) {
    var r = w.getBoundingClientRect();
    if (phoneMQ.matches) {
      var room = window.innerHeight - fiche.offsetHeight - 16;
      if (r.bottom > room) window.scrollBy({ top: r.bottom - room, behavior: reduceMotion ? "auto" : "smooth" });
      return;
    }
    var fw = fiche.offsetWidth, fh = fiche.offsetHeight, vw = document.documentElement.clientWidth;
    var left = Math.min(Math.max(16, r.left - 12), vw - fw - 16);
    var top = r.bottom + 6;
    if (top + fh > window.innerHeight - 8 && r.top - fh - 6 > 72) top = r.top - fh - 6;
    fiche.style.left = (left + window.scrollX) + "px";
    fiche.style.top = (top + window.scrollY) + "px";
  }
  function openFiche(w, byKey) {
    if (ficheWord === w) { closeFiche(byKey); return; }
    var e = LEX[w.dataset.k]; if (!e) return;
    if (ficheWord) ficheWord.classList.remove("on");
    ficheWord = w; w.classList.add("on");
    fx.mot.innerHTML = w.innerHTML;
    var g = /^(nom|adjectif)/.test(e.c) && e.g ? (e.g === "m" ? " masculin" : " féminin") : "";
    fx.l.innerHTML = '<span class="f">' + esc(e.l) + "</span>, " + esc(e.c) + g;
    fx.a.textContent = e.a; fx.a.hidden = !e.a;
    fx.en.textContent = e.en;
    fx.n.textContent = e.n; fx.n.hidden = !e.n;
    fiche.style.setProperty("--band", e.g === "m" ? "var(--hl-m)" : e.g === "f" ? "var(--hl-f)" : "var(--ctl)");
    var sent = w.closest("[data-en]");
    fx.bph.hidden = !sent; fx.ph.hidden = true; fx.bph.textContent = "Traduire la phrase";
    fx.ph.textContent = sent ? sent.getAttribute("data-en") : "";
    syncRevBtn(w.dataset.k);
    fiche.hidden = false;
    placeFiche(w);
    if (byKey) fiche.focus();
  }
  function closeFiche(returnFocus) {
    if (!ficheWord) return;
    var w = ficheWord; ficheWord = null;
    w.classList.remove("on"); fiche.hidden = true;
    if (returnFocus && document.body.contains(w)) w.focus();
  }

  /* ================= page scaffolding ================= */
  var sheet, whereEl;
  function row(margeHTML, txtHTML, opts) {
    opts = opts || {};
    var r = h("div", { class: "row" + (opts.cls ? " " + opts.cls : "") });
    var mg = h("div", { class: "marge" }), tx = h("div", { class: "txt" + (opts.wide ? " wide" : "") });
    if (typeof margeHTML === "string") mg.innerHTML = margeHTML; else if (margeHTML) mg.appendChild(margeHTML);
    if (typeof txtHTML === "string") tx.innerHTML = txtHTML; else if (txtHTML) tx.appendChild(txtHTML);
    r.appendChild(mg); r.appendChild(tx);
    return r;
  }
  function note(html, cls) { return '<span class="note' + (cls ? " " + cls : "") + '">' + html + "</span>"; }
  function gap(n) { return h("div", { class: n === 2 ? "gap2" : "gap" }); }
  var ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  function heading(num, title, tools, margeHTML) {
    var t = h("div", { class: "headrow" });
    t.appendChild(h("h2", null, (num ? '<span class="num">' + num + ".</span>" : "") + title));
    if (tools) { var tw = h("div", { class: "tools" }); tools.forEach(function (b) { tw.appendChild(b); }); t.appendChild(tw); }
    return row(margeHTML || "", t);
  }
  function setWhere(text) { whereEl.textContent = text; whereEl.querySelectorAll && glossBox(whereEl); }

  /* ================= drills ================= */
  var accentBar = null, accentTarget = null;
  function getAccentBar() {
    if (accentBar) return accentBar;
    accentBar = h("div", { class: "accents", role: "group", "aria-label": "Accents" });
    ["é", "è", "ê", "à", "ç", "ô", "î", "û", "œ"].forEach(function (c) {
      var b = h("button", { type: "button", text: c, title: "Insert " + c });
      b.addEventListener("mousedown", function (e) { e.preventDefault(); });
      b.addEventListener("click", function () {
        var i = accentTarget; if (!i) return;
        var s = i.selectionStart == null ? i.value.length : i.selectionStart, e2 = i.selectionEnd == null ? s : i.selectionEnd;
        i.value = i.value.slice(0, s) + c + i.value.slice(e2);
        i.focus(); i.setSelectionRange(s + 1, s + 1);
      });
      accentBar.appendChild(b);
    });
    return accentBar;
  }
  function norm(s) {
    return String(s).normalize("NFC").toLowerCase()
      .replace(/[’`´ʼ]/g, "'").replace(/œ/g, "oe").replace(/æ/g, "ae")
      .replace(/[«»"“”]/g, " ")
      .replace(/\s+/g, " ")
      .replace(/\s*([?!:;,.])/g, "$1")
      .replace(/'\s+/g, "'")
      .replace(/[.!?…\s]+$/g, "").trim();
  }
  function bare(s) { return s.normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  function verdict(val, it) {
    var v = norm(val), as = answers(it);
    for (var i = 0; i < as.length; i++) if (norm(as[i]) === v) return { v: "ok", a: as[i] };
    for (var j = 0; j < as.length; j++) if (bare(norm(as[j])) === bare(v)) return { v: "near", a: as[j] };
    return { v: "ko", a: as[0] };
  }
  function diffMark(answer, user) {
    var A2 = norm(answer), U = norm(user);
    var lowered = answer.toLowerCase().replace(/[’`´ʼ]/g, "'");
    if (A2.length !== U.length || lowered.indexOf(A2) !== 0) return esc(answer);
    var out = "";
    for (var i = 0; i < answer.length; i++) {
      var c = esc(answer.charAt(i));
      out += (i < A2.length && A2.charAt(i) !== U.charAt(i)) ? '<span class="diff">' + c + "</span>" : c;
    }
    return out;
  }
  var GOOD = ["Très bien !", "Exact !", "Parfait !", "Bravo !", "C’est ça !"];
  function itemId(uid, it) {
    var sig = it.t + "|" + (it.q || it.say || (it.sujet || "") + "/" + (it.verbe || "")) + "|" + (it.t === "sort" ? JSON.stringify(it.items) : first(it.a));
    return uid + ":" + hash(sig);
  }
  var INT = [0, 1, 3, 7, 16, 35];
  function record(id, uid, v, mode) {
    var t = today(), r = S.srs[id];
    if (mode === "review" && r) {
      if (v === "ok") { r.box = Math.min(5, r.box + 1); r.due = addDays(t, INT[r.box]); }
      else if (v === "near") r.due = addDays(t, 1);
      else { r.box = 1; r.due = t; }
    } else {
      if (!r) S.srs[id] = { u: uid, box: 1, due: v === "ok" ? addDays(t, 1) : t };
      else if (v === "ko") { r.box = 1; r.due = t; }
      unitState(uid).answers[id] = v;
    }
    save(); updateDue();
  }

  /* one exercise item; ctx: { uid, label, mode, onDone(v) } */
  function renderItem(it, ctx) {
    var wrap = h("div", { class: "item", "data-t": it.t });
    var id = itemId(ctx.uid, it), recorded = false;
    var prompt = h("div"), actions = h("div", { class: "actions" }), res = h("span", { class: "res" });
    var why = h("p", { class: "why", hidden: true });
    var top = row(note(ctx.label), prompt), bottom = row("", null);
    var bottomTxt = $(".txt", bottom), noteSlot = $(".marge", bottom);
    bottomTxt.appendChild(actions); bottomTxt.appendChild(why);
    wrap.appendChild(top); wrap.appendChild(bottom);
    var input = null, check = null;

    function finish(v, shownHTML, correctHTML) {
      var cls = "mark " + v.v + (reduceMotion ? "" : " writing");
      if (v.v === "ok") res.innerHTML = '<span class="' + cls + '">' + GOOD[Math.floor(Math.random() * GOOD.length)] + "</span>";
      else if (v.v === "near") res.innerHTML = '<span class="' + cls + '">Presque : ' + (shownHTML || esc(v.a)) + "</span>";
      else res.innerHTML = '<span class="' + cls + '">' + (correctHTML || esc(v.a)) + "</span>";
      noteSlot.innerHTML = v.v === "ko" && it.note ? note(esc(it.note), "red") : v.v === "near" ? note("attention aux accents", "fr") : "";
      if (it.why) { why.innerHTML = ink(it.why); why.hidden = false; }
      bottom.hidden = false;
      if (!recorded) { recorded = true; record(id, ctx.uid, v.v, ctx.mode); if (ctx.onDone) ctx.onDone(v.v); }
    }
    function textInput(wide, value, placeholder) {
      input = h("input", { class: "blank" + (wide ? " wide" : ""), type: "text", autocomplete: "off", autocapitalize: "off", spellcheck: "false", "aria-label": "Votre réponse", value: value || null, placeholder: placeholder || null });
      input.addEventListener("focus", function () { accentTarget = input; actions.insertBefore(getAccentBar(), actions.firstChild); });
      input.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); check.click(); } });
      return input;
    }
    function checkButton(primary) {
      check = h("button", { type: "button", class: primary ? "primary" : "", title: "Check", text: "Vérifier" });
      check.addEventListener("click", function () {
        if (!input.value.trim()) { res.innerHTML = '<span class="mark near">Écrivez une réponse d’abord.</span>'; input.focus(); return; }
        var v = verdict(input.value, it);
        input.classList.toggle("wrong", v.v === "ko");
        finish(v, v.v === "near" ? diffMark(v.a, input.value) : null);
      });
      actions.appendChild(check); actions.appendChild(res);
    }
    function optionButtons(opts, onPick) {
      var box = h("div", { class: "options" });
      opts.forEach(function (o) {
        var b = h("button", { type: "button", text: o });
        b.addEventListener("click", function () {
          var v = norm(o) === norm(first(it.a)) ? { v: "ok", a: first(it.a) } : { v: "ko", a: first(it.a) };
          $$("button", box).forEach(function (x) {
            x.disabled = true;
            if (x === b) x.classList.add(v.v === "ok" ? "ok" : "ko");
            else if (norm(x.textContent) === norm(first(it.a))) x.classList.add("was");
          });
          if (onPick) onPick(v);
          finish(v);
        });
        box.appendChild(b);
      });
      return box;
    }

    switch (it.t) {
      case "form":
        prompt.innerHTML = '<span class="q-fr">' + esc(it.sujet) + "</span> ";
        prompt.appendChild(textInput(false));
        prompt.appendChild(h("span", { class: "hint" }, " (" + esc(it.verbe) + ")"));
        checkButton(); break;
      case "cloze":
        var parts = it.q.split("___");
        prompt.appendChild(h("span", { class: "q-fr", text: parts[0] }));
        prompt.appendChild(textInput(false));
        prompt.appendChild(h("span", { class: "q-fr", text: parts[1] }));
        if (it.hint) prompt.appendChild(h("span", { class: "hint" }, " (" + esc(it.hint) + ")"));
        checkButton(); break;
      case "choose":
        var cp = (it.q || "").split("___");
        var qline = h("div", { class: "q-fr" });
        qline.appendChild(document.createTextNode(cp[0]));
        var gapEl = null;
        if (cp.length > 1) { gapEl = h("span", { class: "gapline" }); qline.appendChild(gapEl); qline.appendChild(document.createTextNode(cp[1])); }
        prompt.appendChild(qline);
        prompt.appendChild(optionButtons(it.options, function (v) {
          if (gapEl) { gapEl.className = v.v === "ok" ? "filled-ok" : "filled-ok"; gapEl.textContent = first(it.a); }
        }));
        actions.appendChild(res); bottom.hidden = true; break;
      case "ecoute":
        var lb = h("div", { class: "actions" });
        var lsay = h("button", { type: "button", title: "Listen" }, SPEAKER.replace("<svg", '<svg width="18" height="18"') + " Écouter");
        lsay.addEventListener("click", function () { stopAudio(); say(it.say, lsay); });
        var slow = h("button", { type: "button", class: "quiet", title: "Listen slowly", text: "Plus lentement" });
        slow.addEventListener("click", function () { stopAudio(); say(it.say, slow, { rate: 0.65 }); });
        lb.appendChild(lsay); lb.appendChild(slow);
        prompt.appendChild(lb);
        prompt.appendChild(optionButtons(it.options));
        actions.appendChild(res); bottom.hidden = true; break;
      case "dictee":
        var db = h("div", { class: "actions" });
        var dsay = h("button", { type: "button", title: "Listen" }, SPEAKER.replace("<svg", '<svg width="18" height="18"') + " Écouter");
        dsay.addEventListener("click", function () { stopAudio(); say(first(it.a), dsay); });
        var dslow = h("button", { type: "button", class: "quiet", title: "Listen slowly", text: "Plus lentement" });
        dslow.addEventListener("click", function () { stopAudio(); say(first(it.a), dslow, { rate: 0.65 }); });
        db.appendChild(dsay); db.appendChild(dslow);
        prompt.appendChild(db);
        prompt.appendChild(textInput(true, null, "écrivez ce que vous entendez"));
        checkButton(true); break;
      case "transform":
        prompt.appendChild(h("div", { class: "q-fr", text: it.q }));
        prompt.appendChild(h("div", { class: "consigne", text: it.consigne }));
        prompt.appendChild(textInput(true));
        checkButton(true); break;
      case "translate":
        prompt.appendChild(h("div", { class: "q-en", text: it.q }));
        prompt.appendChild(textInput(true, null, "en français"));
        checkButton(true); break;
      case "spot":
        prompt.appendChild(h("div", { class: "consigne", text: "Corrigez l’erreur." }));
        prompt.appendChild(textInput(true, it.q));
        checkButton(true); break;
      case "sort":
        prompt.appendChild(h("div", { class: "consigne", text: it.q || "Classez." }));
        var picks = [], rows = [];
        it.items.forEach(function (p, j) {
          var r2 = h("div", { class: "sort-row" });
          r2.appendChild(h("span", { class: "w-item", text: p[0] }));
          var seg = h("span", { class: "seg", role: "group", "aria-label": p[0] });
          it.bins.forEach(function (bn, bi) {
            var b = h("button", { type: "button", text: bn, "aria-pressed": "false" });
            b.addEventListener("click", function () {
              picks[j] = bi;
              $$("button", seg).forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
            });
            seg.appendChild(b);
          });
          r2.appendChild(seg);
          var rr = h("span", { class: "res" }); r2.appendChild(rr);
          rows.push(rr); prompt.appendChild(r2);
        });
        check = h("button", { type: "button", class: "primary", title: "Check", text: "Vérifier" });
        check.addEventListener("click", function () {
          for (var j = 0; j < it.items.length; j++) if (picks[j] === undefined) { res.innerHTML = '<span class="mark near">Choisissez pour chaque mot.</span>'; return; }
          var allOk = true;
          it.items.forEach(function (p, j) {
            var ok = picks[j] === p[1]; if (!ok) allOk = false;
            rows[j].innerHTML = ok ? '<span class="mark ok">✓</span>' : '<span class="mark ko">' + esc(it.bins[p[1]]) + "</span>";
          });
          var v = { v: allOk ? "ok" : "ko", a: "" };
          finish(v, null, "Voir les corrections ci-dessus.");
        });
        actions.appendChild(check); actions.appendChild(res); break;
    }
    return wrap;
  }

  /* ================= unit view ================= */
  var LEGEND = {
    end: '<span><span class="end">ons</span> ending or sound you hear</span>',
    mute: '<span><span class="mute">ent</span> letters you do not hear</span>',
    m: '<span><span class="hm">le soir</span> masculine</span>',
    f: '<span><span class="hf">la gare</span> feminine</span>',
    pc: '<span><span class="hpc">j’ai parlé</span> passé composé</span>',
    imp: '<span><span class="himp">je parlais</span> imparfait</span>'
  };
  function renderUnit(u) {
    var meta = metaOf(u.id), st = unitState(u.id);
    S.last = u.id; save();
    setWhere(meta.mu.label.indexOf(meta.ph.nom) === 0 ? meta.mu.label : meta.ph.nom + ", " + meta.mu.label.toLowerCase());
    document.title = meta.mu.label + " : " + u.title;
    var out = document.createDocumentFragment(), sec = 0;
    var add = function (x) { out.appendChild(x); };

    add(row(note(esc(meta.mu.label)), '<p class="date">' + frDate(new Date()) + "</p>"));
    add(row("", '<h1><span class="ruled">' + esc(u.title) + "</span></h1>"));
    add(row(note("Objectif"), '<p class="lead">' + ink(u.objectif) + "</p>"));

    /* I. système */
    add(gap()); add(heading(ROMAN[sec++], "Le système", null, note("séance 1")));
    (u.systeme || []).forEach(function (b, bi) {
      var body;
      if (bi && !u.systeme[bi - 1].table) add(gap());
      if (b.p) body = "<p>" + ink(b.p) + "</p>";
      else if (b.list) body = '<ul class="list">' + b.list.map(function (x) { return "<li>" + ink(x) + "</li>"; }).join("") + "</ul>";
      else if (b.table) {
        var k = b.table.kinds || [];
        body = '<div class="tbl-wrap"><table><thead><tr>' + b.table.head.map(function (x) { return '<th scope="col">' + esc(x) + "</th>"; }).join("") + "</tr></thead><tbody>" +
          b.table.rows.map(function (r) { return "<tr>" + r.map(function (c, ci) { return '<td class="' + (k[ci] || "") + '">' + ink(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
      }
      add(row(b.marge ? note(ink(b.marge), "fr") : "", body || ""));
      if (b.table) add(gap());
    });
    if (u.legend && u.legend.length) {
      add(gap());
      add(row(note("Code couleur"), '<div class="legend">' + u.legend.map(function (k) { return LEGEND[k] || ""; }).join("") + "</div>"));
    }

    /* II. oral */
    if ((u.oral || []).length) {
      add(gap()); add(heading(ROMAN[sec++], "À l’oral, à l’écrit"));
      u.oral.forEach(function (r) { add(row(note(ink(r.label)), "<p>" + ink(r.html) + "</p>")); });
    }

    /* III. exemples */
    var exRows = [];
    var bAll = h("button", { type: "button", "aria-pressed": "false", text: "Tout écouter", title: "Play all examples", "data-title": "Play all examples" });
    var bRep = h("button", { type: "button", "aria-pressed": "false", text: "Écouter et répéter", title: "Play each example, then pause for you to repeat", "data-title": "Play each example, then pause for you to repeat" });
    var bGl = h("button", { type: "button", text: "Masquer la traduction", title: "Hide or show the English" });
    add(gap()); add(heading(ROMAN[sec++], "Exemples", [bAll, bRep, bGl], note("touchez un mot", "fr")));
    var exBox = h("div");
    (u.exemples || []).forEach(function (x) {
      var txt = speakable(x.fr);
      var b = sayBtn("Écouter", txt);
      var mg = h("div"); mg.appendChild(b); if (x.note) mg.insertAdjacentHTML("beforeend", note(ink(x.note), "fr"));
      var r = row(mg, '<span class="fr-line" data-en="' + esc(x.en) + '">' + ink(x.fr) + '</span><br><span class="gl">' + esc(x.en) + "</span>");
      r.classList.add("ex");
      // keep the button as a direct marge child for layout
      $(".marge", r).replaceWith((function () { var m2 = h("div", { class: "marge" }); m2.appendChild(b); if (x.note) m2.insertAdjacentHTML("beforeend", note(ink(x.note), "fr")); return m2; })());
      exRows.push({ text: txt, btn: b, row: r });
      exBox.appendChild(r);
    });
    add(exBox);
    bAll.addEventListener("click", function () { playSeq(exRows, bAll, "all"); });
    bRep.addEventListener("click", function () { playSeq(exRows, bRep, "repeat"); });
    bGl.addEventListener("click", function () {
      exBox.classList.toggle("hide-gloss");
      bGl.textContent = exBox.classList.contains("hide-gloss") ? "Afficher la traduction" : "Masquer la traduction";
    });

    /* IV. pièges */
    if ((u.pieges || []).length) {
      add(gap()); add(heading(ROMAN[sec++], "Pièges"));
      u.pieges.forEach(function (r) { add(row(note(ink(r.label), "red"), "<p>" + ink(r.html) + "</p>")); });
    }

    /* V. exercices */
    add(gap()); add(heading(ROMAN[sec++], "Exercices"));
    var n = 0;
    (u.exercices || []).forEach(function (g) {
      add(row(note("séance " + (g.seance || "")), "<h3>" + esc(g.titre) + "</h3>"));
      var box = h("div", { class: "calme" });
      g.items.forEach(function (it, i) {
        n++;
        if (i) box.appendChild(gap());
        box.appendChild(renderItem(it, { uid: u.id, label: "Exercice " + n, mode: "unit" }));
      });
      add(box); add(gap());
    });

    /* VI. lecture */
    var L = u.lecture || { phrases: [] };
    if (L.phrases.length) {
      var lAud = h("button", { type: "button", "aria-pressed": "false", text: "Écouter le texte", title: "Read the text aloud", "data-title": "Read the text aloud" });
      var lCode = h("label", { class: "toggle", title: "Colour code" }, '<input type="checkbox" id="code-lecture-' + u.id + '"> Code couleur');
      var lTr = h("button", { type: "button", text: "Afficher la traduction", title: "Show or hide the English" });
      add(heading(ROMAN[sec++], "Lecture", [lAud, lCode, lTr], note("séance 4")));
      var para = h("p", { class: "reading plain" });
      var seq = [];
      L.phrases.forEach(function (p, i) {
        var s = h("span", { class: "s", "data-en": p.en }, ink(p.fr));
        para.appendChild(s); if (i < L.phrases.length - 1) para.appendChild(document.createTextNode(" "));
        seq.push({ text: speakable(p.fr), el: s });
      });
      var trans = h("p", { class: "gl", hidden: true, text: L.phrases.map(function (p) { return p.en; }).join(" ") });
      var lbox = h("div"); lbox.appendChild(para); lbox.appendChild(trans);
      add(row("", lbox));
      (L.notes || []).forEach(function (x) { add(row(note(ink(x.label), "fr"), '<p class="small">' + ink(x.html) + "</p>")); });
      lAud.addEventListener("click", function () { playSeq(seq, lAud, "all"); });
      $("input", lCode).addEventListener("change", function (e) { para.classList.toggle("plain", !e.target.checked); });
      lTr.addEventListener("click", function () { trans.hidden = !trans.hidden; lTr.textContent = trans.hidden ? "Afficher la traduction" : "Masquer la traduction"; });
    }

    /* VII. vocabulaire */
    if ((u.vocabulaire || []).length) {
      var keys = u.vocabulaire.map(function (v) { return "v:" + plain(v.fr); });
      var bVoc = h("button", { type: "button", title: "Add all these words to your review queue" });
      var syncVoc = function () {
        var all = keys.every(function (k) { return S.mots[k]; });
        bVoc.textContent = all ? "Vocabulaire dans la révision" : "Ajouter à la révision";
        bVoc.disabled = all;
      };
      syncVoc();
      bVoc.addEventListener("click", function () {
        u.vocabulaire.forEach(function (v, i) { if (!S.mots[keys[i]]) S.mots[keys[i]] = { fr: plain(v.fr), en: v.en, box: 1, due: today(), added: today() }; });
        save(); syncVoc(); updateDue();
      });
      add(gap()); add(heading(ROMAN[sec++], "Vocabulaire", [bVoc]));
      var grid = h("div", { class: "vocab" });
      u.vocabulaire.forEach(function (v) {
        var d = h("div"); d.appendChild(sayBtn("Écouter", speakable(v.fr)));
        d.insertAdjacentHTML("beforeend", '<span class="vf">' + ink(v.fr) + '</span><span class="ve">' + esc(v.en) + "</span>");
        grid.appendChild(d);
      });
      add(row("", grid));
    }

    /* end of unit */
    add(gap(2));
    var endBox = h("div", { class: "actions" });
    var idx = ORDER.indexOf(meta), next = null;
    for (var i = idx + 1; i < ORDER.length; i++) { if (ORDER[i].mu.file) { next = ORDER[i]; break; } }
    var drawEnd = function () {
      endBox.innerHTML = "";
      if (st.done) {
        endBox.appendChild(h("span", { class: "mark ok", text: "Terminée le " + frIso(st.done) + "." }));
      } else {
        endBox.appendChild(h("button", { type: "button", class: "primary", text: "Marquer comme terminée", title: "Mark this unit as done", onclick: function () { st.done = today(); save(); drawEnd(); } }));
      }
      if (next) endBox.appendChild(h("a", { class: "btn", href: "#" + next.mu.id, text: "Suivante : " + next.mu.label, title: next.mu.title }));
      endBox.appendChild(h("a", { class: "btn", href: "#apercu", text: "Aperçu", title: "Course overview" }));
    };
    drawEnd();
    add(row(note("fin"), endBox));

    sheet.innerHTML = ""; sheet.appendChild(out);
    glossify(sheet);
  }

  /* ================= overview ================= */
  function currentUnit() {
    for (var i = 0; i < ORDER.length; i++) { var m = ORDER[i].mu; if (m.file && UNITS[m.id] && !(S.units[m.id] && S.units[m.id].done)) return ORDER[i]; }
    return null;
  }
  function renderOverview() {
    setWhere("Aperçu du cours");
    document.title = "Cahier de français";
    var out = document.createDocumentFragment(), add = function (x) { out.appendChild(x); };
    var cur = currentUnit();
    var started = Object.keys(S.units).length > 0;

    add(row(note("Aperçu"), '<p class="date">' + frDate(new Date()) + "</p>"));
    add(row("", '<h1><span class="ruled">Le parcours</span></h1>'));
    add(row("", '<p class="lead">From first sounds to reading French prose, in five stages and about a year, at under an hour a week. Stages 1 to 3 each end at a DELF level (Diplôme d’études en langue française).</p>'));
    add(gap());

    M.phases.forEach(function (ph) {
      var written = ph.units.filter(function (m) { return m.file && UNITS[m.id]; });
      var done = ph.units.filter(function (m) { return S.units[m.id] && S.units[m.id].done; }).length;
      var here = cur && cur.ph === ph;
      var mg = note(esc(ph.niveau)) + (here ? note("vous êtes ici", "now") : "");
      var t = h("div", { class: "phase" });
      t.innerHTML = "<h2>" + esc(ph.nom) + (ph.semaines ? '<span class="weeks">' + ph.semaines + " semaines</span>" : "") + "</h2>" +
        "<p>" + esc(ph.peut) + "</p>" +
        '<p class="keys">' + ph.cles.map(function (k) { return "<span>" + esc(k) + "</span>"; }).join("") + "</p>";
      var meta = ph.units.length
        ? (done + " sur " + ph.units.length + " unités faites" + (ph.point ? ", point " + ph.point + " à la fin" : ""))
        : "Planned once stage 3 is under way.";
      t.appendChild(h("p", { class: "soft small", text: meta }));
      if (ph.units.length) {
        var det = h("details", here ? { open: true } : null);
        det.appendChild(h("summary", { text: "Les " + ph.units.length + " unités" + (written.length ? ", dont " + written.length + " prêtes" : "") }));
        det.appendChild(unitList(ph.units));
        t.appendChild(det);
      }
      add(row(mg, t, { cls: "phase-row" }));
      add(gap());
    });

    var wk = h("div", { class: "week" });
    M.semaine.forEach(function (s) {
      wk.appendChild(h("div", null, '<div class="wn f">' + esc(s.nom) + '</div><div class="wm">' + s.minutes + ' min</div><div class="wq">' + esc(s.quoi) + "</div>"));
    });
    add(row(note("une semaine"), wk));
    add(gap());
    add(row(note("lire la page"),
      '<div class="legend"><span><span class="end">ons</span> heard</span><span><span class="mute">ent</span> silent</span>' +
      '<span><span class="hm">le soir</span> masculine</span><span><span class="hf">la gare</span> feminine</span>' +
      "<span>tap a French word for its fiche</span></div>"));
    add(gap());

    var cta = h("div", { class: "actions" });
    if (cur) cta.appendChild(h("a", { class: "btn primary", href: "#" + cur.mu.id, style: "background:var(--fr);color:var(--paper);box-shadow:none", text: (started ? "Reprendre : " : "Commencer : ") + cur.mu.label, title: cur.mu.title }));
    var due = dueCount();
    if (due) cta.appendChild(h("a", { class: "btn", href: "#revision", text: "Réviser (" + due + ")", title: "Review queue" }));
    add(row("", cta));

    sheet.innerHTML = ""; sheet.appendChild(out);
    glossify(sheet);
  }
  function unitList(units, currentId) {
    var ul = h("ul", { class: "unit-list" });
    units.forEach(function (m) {
      var li = h("li");
      li.appendChild(h("span", { class: "lab", text: m.label }));
      if (m.file && UNITS[m.id]) {
        var a = h("a", { href: "#" + m.id, text: m.title });
        if (m.id === currentId) a.style.fontWeight = "600";
        li.appendChild(a);
      } else li.appendChild(h("span", { class: "later", text: m.title }));
      if (S.units[m.id] && S.units[m.id].done) li.appendChild(h("span", { class: "st", text: "faite" }));
      else if (!(m.file && UNITS[m.id])) li.appendChild(h("span", { class: "st", style: "color:var(--mute)", text: "à venir" }));
      ul.appendChild(li);
    });
    return ul;
  }

  /* ================= review ================= */
  var ITEMS = {};          // id -> { u, it }
  function indexItems() {
    ITEMS = {};
    Object.keys(UNITS).forEach(function (uid) {
      (UNITS[uid].exercices || []).forEach(function (g) { g.items.forEach(function (it) { ITEMS[itemId(uid, it)] = { u: uid, it: it }; }); });
    });
  }
  function dueList() {
    var t = today(), list = [];
    Object.keys(S.srs).forEach(function (id) { if (S.srs[id].due <= t && ITEMS[id]) list.push({ kind: "item", id: id, due: S.srs[id].due }); });
    Object.keys(S.mots).forEach(function (k) { if (S.mots[k].due <= t) list.push({ kind: "mot", id: k, due: S.mots[k].due }); });
    list.sort(function (a, b) { return a.due < b.due ? -1 : a.due > b.due ? 1 : Math.random() - .5; });
    return list;
  }
  function dueCount() { return dueList().length; }
  function nextDue() {
    var all = Object.keys(S.srs).map(function (k) { return S.srs[k].due; }).concat(Object.keys(S.mots).map(function (k) { return S.mots[k].due; }));
    all.sort(); var t = today();
    for (var i = 0; i < all.length; i++) if (all[i] > t) return all[i];
    return null;
  }
  function updateDue() {
    var n = dueCount(), c = $("#due-count");
    c.hidden = !n; c.textContent = n;
  }
  function renderReview() {
    setWhere("Révision");
    document.title = "Révision";
    var queue = dueList().slice(0, 30), pos = 0, right = 0, requeued = {};
    var total = queue.length;
    var head = document.createDocumentFragment();
    head.appendChild(row(note("Révision"), '<p class="date">' + frDate(new Date()) + "</p>"));
    head.appendChild(row("", '<h1><span class="ruled">Révision</span></h1>'));
    var stage = h("div");
    sheet.innerHTML = ""; sheet.appendChild(head); sheet.appendChild(stage);

    if (!total) {
      var nd = nextDue();
      var empty = Object.keys(S.srs).length + Object.keys(S.mots).length === 0
        ? "<p>Rien à revoir pour l’instant.</p><p class=\"soft small\">The queue fills as you work: every exercise you answer joins it, and so do words you add from a fiche or a vocabulary list. Each comes back after 1, 3, 7, 16 and then 35 days while you keep getting it right.</p>"
        : "<p>Rien à revoir aujourd’hui.</p>" + (nd ? '<p class="soft small">Prochaine révision : ' + frIso(nd) + ".</p>" : "");
      stage.appendChild(row("", empty));
      stage.appendChild(gap());
      stage.appendChild(row("", '<div class="actions"><a class="btn" href="#apercu">Aperçu</a></div>'));
      glossify(sheet);
      return;
    }
    function step() {
      stopAudio(); closeFiche(false);
      stage.innerHTML = "";
      if (pos >= queue.length) {
        stage.appendChild(row("", "<p>Terminé : " + right + " sur " + total + " du premier coup.</p>"));
        stage.appendChild(gap());
        stage.appendChild(row("", '<div class="actions"><a class="btn" href="#apercu">Aperçu</a></div>'));
        updateDue(); glossify(stage);
        return;
      }
      var q = queue[pos];
      stage.appendChild(row("", '<p class="progress">' + (pos + 1) + " sur " + queue.length + "</p>"));
      var nextBtn = h("button", { type: "button", class: "primary", text: "Suivant", title: "Next" });
      nextBtn.addEventListener("click", function () { pos++; step(); });
      var after = row("", null); $(".txt", after).appendChild(h("div", { class: "actions" })); after.hidden = true;
      $(".actions", after).appendChild(nextBtn);
      var done = function (v) {
        if (!requeued[q.id] && v === "ok") right++;
        if (v === "ko" && !requeued[q.id]) { requeued[q.id] = true; queue.push(q); }
        after.hidden = false; nextBtn.focus();
      };
      if (q.kind === "item") {
        var x = ITEMS[q.id], meta = metaOf(x.u);
        stage.appendChild(renderItem(x.it, { uid: x.u, label: meta ? meta.mu.label : "", mode: "review", onDone: done }));
      } else {
        var m = S.mots[q.id];
        var line = h("div", { class: "actions" });
        line.appendChild(h("span", { class: "card-mot f", text: m.fr }));
        line.appendChild(sayBtn("Écouter", m.fr));
        stage.appendChild(row(note("mot"), line));
        var reveal = h("button", { type: "button", text: "Voir la réponse", title: "Show the meaning" });
        var ans = h("div", { hidden: true });
        ans.innerHTML = '<p class="fiche-en">' + esc(m.en) + "</p>";
        var know = h("button", { type: "button", class: "primary", text: "Je savais", title: "I knew it" });
        var again = h("button", { type: "button", text: "À revoir", title: "Show it again" });
        var grade = h("div", { class: "actions" }); grade.appendChild(know); grade.appendChild(again); ans.appendChild(grade);
        reveal.addEventListener("click", function () { reveal.hidden = true; ans.hidden = false; know.focus(); });
        var gradeMot = function (ok) {
          var t = today();
          if (ok) { m.box = Math.min(5, m.box + 1); m.due = addDays(t, INT[m.box]); } else { m.box = 1; m.due = t; }
          save(); grade.hidden = true; done(ok ? "ok" : "ko");
        };
        know.addEventListener("click", function () { gradeMot(true); });
        again.addEventListener("click", function () { gradeMot(false); });
        var box2 = h("div"); box2.appendChild(reveal); box2.appendChild(ans);
        stage.appendChild(row("", box2));
      }
      stage.appendChild(after);
    }
    step();
  }

  /* ================= sommaire (drawer) ================= */
  var drawer = null, scrim = null, lastFocus = null;
  function openDrawer() {
    closePanel();
    lastFocus = document.activeElement;
    scrim = h("div", { class: "scrim", onclick: closeDrawer });
    drawer = h("nav", { class: "drawer", "aria-label": "Sommaire" });
    var cid = location.hash.replace("#", "");
    drawer.appendChild(h("button", { type: "button", class: "close quiet", text: "Fermer", title: "Close", onclick: closeDrawer }));
    drawer.appendChild(h("h2", { text: "Sommaire" }));
    var top = h("ul", { class: "unit-list" });
    top.appendChild(h("li", null, '<a href="#apercu">Aperçu du cours</a>'));
    top.appendChild(h("li", null, '<a href="#revision">Révision</a>' + (dueCount() ? ' <span class="count">' + dueCount() + "</span>" : "")));
    drawer.appendChild(top);
    M.phases.forEach(function (ph) {
      if (!ph.units.length) return;
      drawer.appendChild(h("h3", { text: ph.nom + ", " + ph.niveau }));
      drawer.appendChild(unitList(ph.units, cid));
    });
    drawer.addEventListener("click", function (e) { if (e.target.closest("a")) closeDrawer(); });
    document.body.appendChild(scrim); document.body.appendChild(drawer);
    $("#btn-sommaire").setAttribute("aria-expanded", "true");
    var firstLink = $("a", drawer); if (firstLink) firstLink.focus();
  }
  function closeDrawer() {
    if (!drawer) return;
    drawer.remove(); scrim.remove(); drawer = scrim = null;
    $("#btn-sommaire").setAttribute("aria-expanded", "false");
    if (lastFocus && document.body.contains(lastFocus)) lastFocus.focus();
  }

  /* ================= réglages (settings panel) ================= */
  var panel = null, voiceSelect = null;
  function segControl(label, values, current, onPick) {
    var wrap = h("div");
    wrap.appendChild(h("span", { class: "lbl", text: label }));
    var seg = h("div", { class: "seg", role: "group", "aria-label": label });
    values.forEach(function (v) {
      var b = h("button", { type: "button", text: v[1], title: v[2] || "", "aria-pressed": String(v[0] === current) });
      b.addEventListener("click", function () { $$("button", seg).forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); }); onPick(v[0]); });
      seg.appendChild(b);
    });
    wrap.appendChild(seg);
    return wrap;
  }
  function applySettings() {
    var r = document.documentElement;
    if (S.settings.theme === "light" || S.settings.theme === "dark") r.setAttribute("data-theme", S.settings.theme); else r.removeAttribute("data-theme");
    r.setAttribute("data-grid", S.settings.grid || "moyen");
  }
  function fillVoiceSelect() {
    if (!voiceSelect) return;
    voiceSelect.innerHTML = "";
    voiceSelect.appendChild(h("option", { value: "", text: "Automatique" }));
    voices.forEach(function (v) { voiceSelect.appendChild(h("option", { value: v.name, text: v.name + " (" + v.lang + ")", selected: v.name === S.settings.voice ? true : null })); });
  }
  function buildPanel() {
    panel = h("div", { class: "panel", id: "panel", role: "dialog", "aria-label": "Réglages", hidden: true });
    panel.appendChild(segControl("Vitesse de lecture", [[0.7, "Lente", "Slow"], [0.85, "Moyenne", "Medium"], [1, "Normale", "Normal"]], S.settings.rate, function (v) { S.settings.rate = v; save(); }));
    var vw = h("div"); vw.appendChild(h("label", { class: "lbl", for: "voice-select", text: "Voix" }));
    voiceSelect = h("select", { id: "voice-select" });
    voiceSelect.addEventListener("change", function () { S.settings.voice = voiceSelect.value; save(); pickVoice(); say("Bonjour, je suis votre voix.", null); });
    vw.appendChild(voiceSelect);
    if (!hasTTS) vw.appendChild(h("p", { class: "soft small", text: "This browser has no speech synthesis, so audio is unavailable." }));
    panel.appendChild(vw); fillVoiceSelect();
    panel.appendChild(segControl("Thème", [["light", "Cahier", "Notebook (light)"], ["dark", "Ardoise", "Slate (dark)"], ["auto", "Système", "Follow the system"]], S.settings.theme, function (v) { S.settings.theme = v; save(); applySettings(); }));
    panel.appendChild(segControl("Quadrillage", [["discret", "Discret", "Faint"], ["moyen", "Moyen", "Medium"], ["complet", "Complet", "Full"]], S.settings.grid, function (v) { S.settings.grid = v; save(); applySettings(); }));
    var pw = h("div"); pw.appendChild(h("span", { class: "lbl", text: "Progression" }));
    var pa = h("div", { class: "actions" });
    var msg = h("p", { class: "msg", hidden: true });
    var say2 = function (t) { msg.textContent = t; msg.hidden = false; };
    pa.appendChild(h("button", { type: "button", text: "Télécharger", title: "Download your progress as a file", onclick: function () {
      try {
        var blob = new Blob([JSON.stringify(S, null, 1)], { type: "application/json" });
        var a = h("a", { href: URL.createObjectURL(blob), download: "progression-" + today() + ".json" });
        document.body.appendChild(a); a.click(); a.remove();
        say2("Fichier téléchargé.");
      } catch (e) { say2("Download unavailable here: use Copier."); }
    } }));
    pa.appendChild(h("button", { type: "button", text: "Copier", title: "Copy your progress to the clipboard", onclick: function () {
      var txt = JSON.stringify(S);
      var fallback = function () { var ta = h("textarea", { rows: "3", style: "width:100%" }); ta.value = txt; pw.appendChild(ta); ta.select(); say2("Select and copy the text above."); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(function () { say2("Progression copiée."); }, fallback); else fallback();
    } }));
    var file = h("input", { type: "file", accept: "application/json,.json", hidden: true, id: "import-file" });
    file.addEventListener("change", function () {
      var f = file.files && file.files[0]; if (!f) return;
      var rd = new FileReader();
      rd.onload = function () {
        try {
          var got = JSON.parse(rd.result);
          if (!got || got.v !== 1 || !got.srs) throw new Error("format");
          S = blank(); Object.keys(got).forEach(function (k) { S[k] = got[k]; }); S.settings = Object.assign(blank().settings, got.settings || {});
          save(); applySettings(); route(); say2("Progression importée.");
        } catch (e) { say2("This file is not a progress file from this page."); }
        file.value = "";
      };
      rd.readAsText(f);
    });
    pa.appendChild(h("button", { type: "button", text: "Importer", title: "Load progress from a file", onclick: function () { file.click(); } }));
    pw.appendChild(pa); pw.appendChild(file); pw.appendChild(msg);
    panel.appendChild(pw);
    panel.appendChild(h("p", { class: "soft small", text: "Progress is kept in this browser only. Download it to move it to another device or keep it in the repository." }));
    document.body.appendChild(panel);
    document.addEventListener("click", function (e) {
      if (!panel.hidden && !e.target.closest("#panel") && !e.target.closest("#btn-reglages")) closePanel();
    });
  }
  function togglePanel() { if (panel.hidden) { closeDrawer(); panel.hidden = false; $("#btn-reglages").setAttribute("aria-expanded", "true"); } else closePanel(); }
  function closePanel() { if (panel && !panel.hidden) { panel.hidden = true; $("#btn-reglages").setAttribute("aria-expanded", "false"); } }

  /* ================= router and start ================= */
  function route() {
    stopAudio(); if (fiche) closeFiche(false); closeDrawer(); closePanel();
    accentTarget = null; if (accentBar) accentBar.remove();
    var id = location.hash.replace("#", "");
    if (id === "revision") renderReview();
    else if (UNITS[id]) renderUnit(UNITS[id]);
    else renderOverview();
    window.scrollTo(0, 0);
    updateDue();
  }
  function loadScript(src) {
    return new Promise(function (res) {
      var s = document.createElement("script");
      s.src = src; s.onload = res; s.onerror = function () { console.warn("Could not load " + src); res(); };
      document.head.appendChild(s);
    });
  }
  function start() {
    sheet = $("#sheet"); whereEl = $("#where");
    applySettings();
    var files = ORDER.filter(function (o) { return o.mu.file && !UNITS[o.mu.id]; }).map(function (o) { return o.mu.file; });
    Promise.all(files.map(loadScript)).then(function () {
      (window.LEXIQUE || []).forEach(addLex);
      ORDER.forEach(function (o) { var u = UNITS[o.mu.id]; if (u) (u.lexique || []).forEach(addLex); });
      indexItems();
      buildFiche(); buildPanel();
      $("#btn-sommaire").addEventListener("click", function () { drawer ? closeDrawer() : openDrawer(); });
      $("#btn-reglages").addEventListener("click", togglePanel);
      $("#btn-revision").addEventListener("click", function () { if (location.hash === "#revision") route(); else location.hash = "revision"; });
      window.addEventListener("hashchange", route);
      route();
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();
