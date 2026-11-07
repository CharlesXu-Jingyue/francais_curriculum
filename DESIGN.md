# Design: le Cahier

The visual system for the study page. The page looks like a French school notebook, and its colours carry grammar: every colour means the same thing in every unit.

Reference mockup: [`design/mockup.html`](design/mockup.html) (unit 3, *le présent des verbes en -er*). Open it directly in a browser.

---

## 1. Direction

| Decision | Choice | Why |
|---|---|---|
| Visual world | **Cahier**: a French school notebook (Seyès ruling, red margin, fountain-pen ink, red and green corrections) | Grounded in how French is actually learned in France; the notebook's conventions double as information design |
| Colour role | **Systematic grammar encoding**, in two layers: inks for morphology, highlighters for categories | Matches the system-first curriculum: the structure is visible on the page |
| Ruling | Between suggested and faithful; quieter behind exercises | Atmosphere without interfering with reading or drilling |
| Handwriting | Cursive for the dated heading, unit titles, margin notes and corrections; print for everything else | Cursive marks the "teacher" and notebook layer; print keeps the content legible |
| Dark mode | **Ardoise**: a school slate with chalk | The second French classroom surface; same colour grammar translated into chalk |
| Layout | One column, read top to bottom like a notebook page | Fits both desk and phone, which you use about equally |
| Devices | Mixed evenly: designed to work equally on phone, tablet and desktop | |
| Translation | **Tap a word for its fiche**: meaning plus grammatical analysis, with the whole sentence one step further (§7) | Works the same on phone and desk; graded help keeps your own attempt first; shows grammar, which a translator cannot |

---

## 2. Colour grammar

### 2.1 Morphology layer: inks (colour of the letters)

| Token | Meaning | Cahier | Ardoise | Example |
|---|---|---|---|---|
| `--ink` | Explanations and metalanguage (English, later French) | blue-black `#1C244E` | chalk white `#E6E9E1` | *A regular -er verb is built from...* |
| `--fr` | French text; stems | fountain-pen blue `#2141AC` | chalk blue `#B9D2FF` | **parl**ons |
| `--end` | Endings and sounds you **hear**; liaison links | violet `#7A2B9E` | chalk lilac `#D6B2FF` | parl**ons**, nous‿aimons |
| `--mute` | Letters you **do not hear** | graphite `#9A9CA5` | dim chalk `#7E8A84` | parl**ent** |

The rule behind the inks: violet versus graphite is the spoken/written distinction made visible. Any ending, agreement mark or letter is violet if pronounced and graphite if silent. This holds for verb endings, plural *-s*, past participle agreement (*elle est allé**e***, graphite), and so on.

### 2.2 Category layer: highlighters (colour behind the words)

| Token | Category | Colour |
|---|---|---|
| `--hl-m` | Masculine noun phrase | blue highlighter |
| `--hl-f` | Feminine noun phrase | pink highlighter |
| `--hl-pc` | *Passé composé* | orange highlighter |
| `--hl-imp` | *Imparfait* | green highlighter |
| (later) | *Futur*, conditional, subjunctive | lilac, yellow and a third to be assigned when Phase 2 starts |

Rules that keep the highlighters from becoming noise:

1. A unit switches on **at most two highlighter categories**: gender, plus the unit's key contrast (for example *passé composé* vs *imparfait* in unit 25).
2. The **Lecture** passage starts with colour coding off, with a toggle; reading practice should eventually happen without crutches.
3. The **Code couleur** legend lists only the categories active in that unit.

### 2.3 Corrections and notebook furniture

| Token | Use | Cahier | Ardoise |
|---|---|---|---|
| `--green` | Correct answer feedback (*Très bien !*) | `#1B7A44` | `#9FE3A0` |
| `--red` | Wrong answer: the attempt struck through, the correct form written beside it | `#C42F2B` | `#FF8C84` |
| `--end` (violet) | *Presque*: right except for accents | as above | as above |
| `--margin-line` | The notebook's margin line and the ruled underline of the unit title (decorative, never used for text) | `#E2606A` | faded red chalk |
| `--paper` | Page background | near-white `#FBFBF9` | deep slate `#1C2220` |
| `--card` | Fiche background | white `#FFFFFF` | lighter slate `#262D2A` |
| `--rule-*` | Seyès ruling | violet at 22% (heavy), 8% (thin), 6% (vertical) | chalk at 15%, 5%, 4% |
| `--ctl` | Outlines of buttons and switches, kept stronger than the ruling | violet at 34% | chalk at 24% |

Red and green are reserved for feedback. Nothing else on the page uses them as text colours.

---

## 3. Typography

| Role | Typeface | Notes |
|---|---|---|
| Notebook hand (date, unit title, margin notes, corrections) | **Playwrite FR Moderne** | Modelled on the cursive taught in French schools. 300 weight for margin notes, 400 for headings |
| Text (explanations, French examples, exercises, interface) | **Spectral** | Serif from Production Type, a Paris foundry. Regular, italic, semibold |
| Phonetic transcription (IPA, International Phonetic Alphabet) | **Gentium Book Plus** | Built for linguistics; full IPA coverage including nasal vowels (ɔ̃, ɑ̃, ɛ̃) |

All three load from Google Fonts with system fallbacks.

| Element | Size / line | Notes |
|---|---|---|
| Body | 18px / 32px (17px on phones) | One line of text per ruled interval |
| Unit title (`h1`) | 26px cursive / 64px | Underlined with a ruler line in margin red |
| Date | 16px cursive / 32px | Written in French, as French pupils date each lesson: *Vendredi 6 novembre 2026* |
| Section heading (`h2`) | 19px semibold / 32px | Roman numerals (I. to V.), the French notebook convention, because the sections are a real sequence |
| Glosses, hints, legend | 15px italic | `--soft` |
| Margin notes | 12.5px cursive light | Right-aligned against the margin line |

---

## 4. Grid and rhythm

- **Seyès interval**: 32px between heavy lines, with thin lines every 8px and faint verticals every 32px.
- **Every vertical measure is a multiple of 32px** (line heights, gaps, button and input heights), so text sits on the ruled lines.
- **Ruling density** has three settings: *Discret* (heavy lines only), *Moyen* (default), *Complet* (faithful Seyès). It becomes a user setting on the real page.
- **Exercises sit on a veil** (`--veil`): translucent paper that dims the ruling behind tasks, so drill items stand out.

---

## 5. Layout

```
┌─ bar ───────────────────────────────────────────────────┐
│ Sommaire   Phase 1, unité 3 sur 45   Lente|Moyenne|Normale  Ardoise │
└─────────────────────────────────────────────────────────┘
          │
  marge   │  text column (max 64 characters)
  (128px) │
  Unité 3 │  Vendredi 6 novembre 2026
          │  Le présent des verbes en -er
 Objectif │  Say what you do regularly...
          │
          │  I. Le système
4 personnes│  je   parl·e    /paʁl/
1 seul son │  ...
          │
    [▶]   │  Je travaille dans un laboratoire.
          │  I work in a laboratory.
          │
Exercice 1│  Vous cherchez la clé ?  Très bien !
```

- **The margin carries meta-information**: unit number, section labels (*Objectif*, *élision*, *ancrage*), teacher's notes, audio buttons beside examples, exercise numbers, and correction explanations.
- **Phones**: the margin column collapses. The red line stays at the left edge, and margin notes move above the content they label.
- **Unit sections** follow the curriculum's unit anatomy: I. Le système, II. À l'oral, à l'écrit, III. Exemples, IV. Exercices, V. Lecture, then Vocabulaire.

---

## 6. Components

| Component | Design |
|---|---|
| Top bar | Sticky, 64px. Sommaire (unit list), position in course, reading speed (three-way switch), theme switch |
| Paradigm table | No borders; rows sit on the ruling. Columns: subject, written form (inked), spoken form (IPA) |
| Example line | Speaker button in the margin; French in `--fr` with morphology inks and highlighters; English gloss below in small italic, hideable |
| Fill-in blank | No box: a dotted baseline, like French worksheets. Typed answer in fountain-pen blue |
| Feedback | Written in cursive beside the answer. Green *Très bien !*; red correction beside the struck-through attempt; a short red explanation in the margin |
| Accent bar | é è ê à ç ô î û as small square keys; inserts at the cursor of the last answer field |
| Buttons | Thin ruled outline, Spectral; the primary action (*Vérifier*) filled in fountain-pen blue |
| Legend | One line under *Le système* listing the inks and highlighters active in the unit |
| Fiche | Opens on any French word. A plain card with a coloured top band (the word's gender highlighter, or neutral), modelled on the *fiche bristol* French students revise with. Desktop: anchored under the word, or above it when there is no room. Phone: slides up as a bottom sheet. See §7 |
| Button tooltips | Every French button carries its English name as a tooltip on desktop |
| Aperçu (overview) | The start page. One row per stage: level in the margin (with *vous êtes ici* on the current stage), name and weeks, one English can-do sentence, the key grammar in French, progress, and a collapsible unit list. Then the weekly rhythm, a one-line key to the inks, and a single *Commencer* / *Reprendre* button |
| Sommaire | A drawer from the left listing every unit by stage; written units are links, the rest are marked *à venir*, finished ones *faite* |
| Réglages | A small panel: reading speed, voice, theme (Cahier, Ardoise, Système), ruling density, and progress (Télécharger, Copier, Importer) |
| Révision | One card at a time with a running count. Exercises reuse the unit's drill; words show the French with audio, then *Voir la réponse* and *Je savais* / *À revoir*. A missed card returns once at the end of the session |
| Séances | Margin notes *séance 1* to *séance 4* mark where each of the week's four sessions starts |

---

## 7. Translation on demand

Translation comes in three layers, each giving a little more help than the last. You tap; nothing appears on hover. Hover does not exist on phones, and a gloss that pops up whenever the pointer passes over a word gives the answer away before you have tried.

| Layer | What you do | What you get |
|---|---|---|
| Word | Tap any French word: examples, reading, tables, headings, margin notes, the date | Its fiche: the word with its inks, the dictionary form with its article (*une librairie, nom féminin*), the analysis of an inflected form (*présent : nous*), the English meaning, a usage note or *faux ami* warning, and a button to hear it |
| Sentence | *Traduire la phrase* inside the fiche | The English of the sentence the word sits in |
| Section | *Masquer / Afficher la traduction* beside a section heading | All translations in that section |

Defaults follow what each section is for:

- **Exemples** show their English by default. They illustrate the grammar, and seeing form and meaning together is the point.
- **Lecture** hides its English. It is comprehension practice, so the attempt comes first and the translation after.
- **Exercise prompts** are not glossed, so a fiche can never give away an answer.

Other rules:

- **Every gloss is written by hand** in the unit data (a lexicon per unit plus a shared one), never machine-translated. A gloss can be overridden for a single occurrence where context changes the meaning (*des* as an article vs *de + les*).
- **Fiches feed the review queue.** *Ajouter à la révision* puts the word into spaced repetition; the words you look up are the best signal of what you do not know yet.
- **Interface words** (*Vérifier*, *Sommaire* and the like) carry English tooltips on desktop. On phones they stay French: there are about fifteen of them and they recur every session.

---

## 8. Motion and sound

- **One motion moment**: corrections appear left to right, as if being written. Turned off when the system asks for reduced motion.
- **Audio controls**: every speaker button plays one line. *Tout écouter* plays all the examples and turns into *Arrêter* while playing; *Écouter et répéter* pauses after each example (about 1.3 times its length) and writes *à vous* in the margin; *Écouter le texte* reads the reading passage sentence by sentence. Any other audio, a page change, or *Arrêter* stops a sequence.
- **Audio** uses the browser's French voice. The page prefers an enhanced fr-FR voice when one is installed. Reading speed is 0.7, 0.85 (default) or 1.0. *Tout écouter* plays all the examples in turn with a pause between them.

---

## 9. Accessibility

- Colour is never the only carrier for corrections: wrong answers are also struck through, and every verdict is written out in words.
- The ink grammar relies on colour by design. Planned support for colour-blind readers: an optional secondary cue (dotted underline for silent letters, solid underline for audible endings).
- Visible keyboard focus everywhere; Enter submits an answer.
- Words open their fiche with Enter or Space; Escape closes it and returns focus to the word. The real page will give each sentence one tab stop, with arrow keys between its words, so tabbing to the exercises stays short.
- Contrast is checked in both themes; graphite is the lightest ink and is used only for letters that are deliberately de-emphasised.

---

## 10. Settled decisions

| Question | Decision |
|---|---|
| Ruling density default | *Moyen* |
| Gender highlighter colours | Blue / pink (the usual French classroom convention) |
| Language of the interface (buttons, labels) | French throughout, with English tooltips on buttons |
| Translation | Tap-a-word fiches with graded help (§7) |
| Progress display in the *Sommaire* | To be designed with v0.1 |

---

## Revision log

| Date | Change |
|---|---|
| 2026-11-06 | First version from the design interview; mockup of unit 3 |
| 2026-11-06 | Darker Ardoise slate; fainter Cahier ruling; tap-a-word fiches and translation layers (§7) |
| 2026-11-06 | v0.1 page: overview, Sommaire, Réglages, Révision, séance markers, stoppable audio sequences |
