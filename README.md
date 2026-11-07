# Cahier de français

A personal, system-first French grammar study page, built to accompany conversation practice.

## Using it

Open `index.html` in a browser. There is no build step and nothing to install; it works straight from the folder.

- **Aperçu**: the course map and where you are.
- **Sommaire**: every unit; the written ones open, the rest show as *à venir*.
- **Révision**: the spaced-repetition queue (exercises you have answered, words you have added).
- **Réglages**: reading speed, voice, theme, ruling, and progress export and import.

Progress is saved in the browser. To keep it in the repo or move it to another machine, use *Réglages → Télécharger* and commit the file under `progress/`; *Importer* loads it back.

Audio uses the browser's built-in French voice. On macOS, the enhanced French voices (downloadable in System Settings under Accessibility → Spoken Content) sound much better than the defaults.

## Files

| Path | What it is |
|---|---|
| `CURRICULUM.md` | The course plan: phases, units, page specification |
| `DESIGN.md` | The visual system: notebook, ink colour grammar, fiches, slate dark mode |
| `index.html`, `assets/` | The study page |
| `content/manifest.js` | The course map: phases and units in order |
| `content/lexique.js` | Shared glossary behind the fiches |
| `content/units/*.js` | One file per unit |
| `content/README.md` | How to write a unit |
| `tools/validate.js` | Checks units against the authoring rules: `node tools/validate.js` |
| `design/mockup.html` | The original design mockup |

## Adding a unit

Write `content/units/<id>.js` following `content/README.md`, add `file` to its entry in `content/manifest.js`, and run `node tools/validate.js` until it reports ok.
