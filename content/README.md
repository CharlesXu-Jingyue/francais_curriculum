# Writing a unit

Each unit is one JavaScript file in `content/units/` that calls `registerUnit({...})`. The page loads the files listed in `manifest.js`, so a new unit needs two steps: write the file, then set `file` on its entry in the manifest.

Check every unit with the validator before committing:

```
node tools/validate.js
```

---

## 1. The ink mini-markup

French strings are written with a small markup that the page turns into inks and highlighters (see `DESIGN.md` §2). Braces nest.

| Markup | Renders as | Use for |
|---|---|---|
| `{e:ons}` | violet ink | endings and sounds you **hear** (also a liaison consonant inside IPA) |
| `{s:ent}` | graphite | letters you **do not hear** |
| `{m:le soir}` | blue highlighter | masculine noun phrase (determiner + noun, plus adjective if any) |
| `{f:la gare}` | pink highlighter | feminine noun phrase |
| `{pc:...}`, `{imp:...}` | orange, green highlighter | *passé composé*, *imparfait* (from unit 14 on) |
| `{fr:...}` | French in fountain-pen blue | French words inside an English explanation |
| `{ipa:...}` | IPA font | phonetic transcription inside running text |
| `{b:...}` | semibold | rare emphasis |
| `‿` | violet link | liaison, written directly between words: `nous‿avons` |

Plain text inside a French string is already fountain-pen blue; stems need no markup.

Rules that keep the colour meaningful:

- Mark only the morphology **the unit is about**. In unit 3 that is verb endings; in F2 it is articles and plural *-s*. Do not ink every silent letter on the page.
- Highlight noun phrases for gender in examples and the reading, from F2 on. Never in exercise prompts.
- Exercise prompts, answers, `why` and `note` use **no markup** except `{fr:}` in `why`.
- English text may use `<em>` for italics. No other HTML.
- No em dashes anywhere. Use colons, commas or parentheses.

---

## 2. Unit fields

```js
registerUnit({
  id: "u03",                       // f1, f2, u01 ... must match manifest
  title: "Le présent des verbes en -er",
  objectif: "Say what you do regularly: where you live, work, what you speak and eat.",
  legend: ["end", "mute", "m", "f"],   // legend items to show: end, mute, m, f, pc, imp

  systeme: [ /* section I: blocks */ ],
  oral:    [ /* section II: rows */ ],
  exemples: [ /* section III */ ],
  pieges:  [ /* section IV: rows */ ],
  exercices: [ /* section V: groups */ ],
  lecture: { phrases: [ /* section VI */ ], notes: [ /* margin notes */ ] },
  vocabulaire: [ /* section VII */ ],
  lexique: [ /* fiche entries for words new in this unit */ ]
});
```

### Blocks (`systeme`)

```js
{ p: "English paragraph with {fr:French} bits and <em>italics</em>.", marge: "optional margin note" }
{ table: { head: ["sujet", "à l’écrit", "à l’oral"],
           kinds: ["fr", "fr", "ipa"],          // per column: fr, ipa, en
           rows: [["je", "parl{s:e}", "/paʁl/"], ...] },
  marge: "4 personnes,<br>1 seul son" }
{ list: ["item with {fr:French}", "..."] }
```

`marge` is a short note in cursive in the margin (French or a formula; under 30 characters per line, `<br>` to break).

### Rows (`oral`, `pieges`)

```js
{ label: "liaison", html: "{fr:nous‿aimons} {ipa:/nu{e:z}ɛmɔ̃/}: the silent <em>s</em> is pronounced as <em>z</em> before a vowel." }
```

`label` goes in the margin (one or two French words: *élision*, *liaison*, *ancrage*, *piège*, *faux ami*).

### Examples (`exemples`)

```js
{ fr: "Nous mange{e:ons} à midi.", en: "We eat at noon.", note: "le e garde<br>le g doux" }
```

Six to ten per unit. Short, natural, high-frequency, each one using the unit's structure. `note` is optional.

### Exercise groups (`exercices`)

```js
{ titre: "Formes", seance: 2, items: [ /* items */ ] },
{ titre: "Écoute et production", seance: 3, items: [ /* items */ ] }
```

Two groups per unit (séance 2 and séance 3), 7 to 10 items each.

### Item types

Every item may carry `why` (one English sentence shown after answering) and `note` (a short French correction formula for the margin, shown when the answer is wrong, e.g. `"ils → -ent, muet"`). `a` is a string or an array of accepted answers; the first is the one displayed.

| Type | Fields | Shows |
|---|---|---|
| `form` | `sujet`, `verbe`, `a` | `nous ____ (parler)` |
| `cloze` | `q` with `___`, `hint`?, `a` | sentence with one blank |
| `choose` | `q` (may contain `___`), `options`, `a` | buttons; `a` must be one of `options` |
| `ecoute` | `say`, `options`, `a` | hear, then pick what was said |
| `transform` | `q`, `consigne`, `a` | rewrite a sentence; `consigne` in French, short |
| `translate` | `q` (English), `a` | English to French |
| `dictee` | `a` (spoken and expected) | hear, then type |
| `spot` | `q` (sentence with one error), `a` | edit the sentence to fix it |
| `sort` | `q`, `bins`, `items: [["mot", binIndex], ...]` | assign each item to a bin |

Answers are compared after lowering case, normalising apostrophes and spaces, and ignoring final punctuation. Accent-only differences count as *presque*. List every natural alternative in `a` (for example both `nous` and `on` forms in a translation).

### Reading (`lecture`)

```js
lecture: {
  phrases: [ { fr: "Léa habit{s:e} à Lyon.", en: "Léa lives in Lyon." }, ... ],
  notes: [ { label: "faux ami", html: "{fr:librairie}: bookshop, not library" } ]
}
```

40 to 80 words in Phase 0 and 1, only structures already taught (or glossed in the lexicon).

### Vocabulary (`vocabulaire`)

```js
{ fr: "{f:la gare}", en: "(train) station" }
{ fr: "travailler", en: "to work" }
```

12 to 20 items. Nouns with their article and gender highlighter.

### Lexicon (`lexique`)

One entry per **surface form** that appears in the unit's French text and is not already in `content/lexique.js` or an earlier unit:

```js
// key,        dictionary form,  category,       gender, analysis,                    English,         note
["mangeons",   "manger",         "verbe en -er", "",     "présent : nous",            "eat",           "The e keeps the g soft /ʒ/ before o."],
["gare",       "une gare",       "nom",          "f",    "",                          "(train) station", ""],
```

- `key`: lower case, straight apostrophe for elided forms (`"l'"`, `"c'"`).
- Dictionary form of a noun includes its article (`une gare`, `l’ami (m)` when elided).
- Category and analysis in French; English meaning and note in English.
- Every word in examples, reading, vocabulary, tables and `{fr:}` spans must resolve to an entry. The validator lists the missing ones.
