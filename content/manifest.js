/* The course map: phases and units, in order. A unit with `file` is written and loads on the page;
   the others show in the Sommaire as "à venir". Titles follow CURRICULUM.md §6. */
window.MANIFEST = {
  phases: [
    {
      n: 0, nom: "Fondations", niveau: "pré-A1", semaines: 2,
      peut: "Read French aloud with confidence: how spelling maps to sound, and how gender and number work.",
      cles: ["sons et lettres", "liaison et élision", "le, la, les"],
      units: [
        { id: "f1", label: "Fondations 1", title: "Les sons et l’orthographe", file: "content/units/f1.js" },
        { id: "f2", label: "Fondations 2", title: "Le genre et le nombre", file: "content/units/f2.js" }
      ]
    },
    {
      n: 1, nom: "Survie", niveau: "A1", semaines: 18, point: "A1",
      peut: "Introduce yourself, ask and answer everyday questions, say what you do and what you did.",
      cles: ["le présent", "les questions", "les articles", "le futur proche", "le passé composé"],
      units: [
        { id: "u01", label: "Unité 1", title: "Les pronoms sujets et être", file: "content/units/u01.js" },
        { id: "u02", label: "Unité 2", title: "Avoir, il y a et la négation", file: "content/units/u02.js" },
        { id: "u03", label: "Unité 3", title: "Le présent des verbes en -er", file: "content/units/u03.js" },
        { id: "u04", label: "Unité 4", title: "Poser des questions" },
        { id: "u05", label: "Unité 5", title: "Les adjectifs" },
        { id: "u06", label: "Unité 6", title: "Bilan 1", bilan: true },
        { id: "u07", label: "Unité 7", title: "Les possessifs et les démonstratifs" },
        { id: "u08", label: "Unité 8", title: "Aller, faire, venir et le futur proche" },
        { id: "u09", label: "Unité 9", title: "Les prépositions et les contractions" },
        { id: "u10", label: "Unité 10", title: "Les articles partitifs" },
        { id: "u11", label: "Unité 11", title: "Pouvoir, vouloir, devoir" },
        { id: "u12", label: "Unité 12", title: "Bilan 2", bilan: true },
        { id: "u13", label: "Unité 13", title: "Les verbes pronominaux" },
        { id: "u14", label: "Unité 14", title: "Le passé composé avec avoir" },
        { id: "u15", label: "Unité 15", title: "Le passé composé avec être" },
        { id: "u16", label: "Unité 16", title: "Venir de, il y a, depuis" },
        { id: "u17", label: "Unité 17", title: "L’impératif" },
        { id: "u18", label: "Unité 18", title: "Bilan 3 et point A1", bilan: true }
      ]
    },
    {
      n: 2, nom: "Raconter", niveau: "A2", semaines: 16, point: "A2",
      peut: "Tell a story in the past, replace nouns with pronouns, talk about plans and make comparisons.",
      cles: ["le, lui, y, en", "l’imparfait", "le futur", "qui, que, où", "le conditionnel"],
      units: [
        { id: "u19", label: "Unité 19", title: "Les pronoms compléments directs" },
        { id: "u20", label: "Unité 20", title: "Les pronoms compléments indirects" },
        { id: "u21", label: "Unité 21", title: "Les pronoms y et en" },
        { id: "u22", label: "Unité 22", title: "L’ordre des pronoms" },
        { id: "u23", label: "Unité 23", title: "Bilan 4", bilan: true },
        { id: "u24", label: "Unité 24", title: "L’imparfait" },
        { id: "u25", label: "Unité 25", title: "Passé composé ou imparfait" },
        { id: "u26", label: "Unité 26", title: "Le futur simple" },
        { id: "u27", label: "Unité 27", title: "Comparer" },
        { id: "u28", label: "Unité 28", title: "Bilan 5", bilan: true },
        { id: "u29", label: "Unité 29", title: "Les relatifs qui, que, où" },
        { id: "u30", label: "Unité 30", title: "Dont, ce qui, ce que" },
        { id: "u31", label: "Unité 31", title: "La négation, suite" },
        { id: "u32", label: "Unité 32", title: "Le conditionnel présent" },
        { id: "u33", label: "Unité 33", title: "Les pronoms toniques et l’oral" },
        { id: "u34", label: "Unité 34", title: "Bilan 6 et point A2", bilan: true }
      ]
    },
    {
      n: 3, nom: "Nuancer", niveau: "B1", semaines: 11, point: "B1",
      peut: "Give and defend an opinion, report what others said, reason about what would or could have been.",
      cles: ["le subjonctif", "le discours indirect", "si + conditionnel", "les connecteurs"],
      units: [
        { id: "u35", label: "Unité 35", title: "Le subjonctif : les formes" },
        { id: "u36", label: "Unité 36", title: "Le subjonctif : les emplois" },
        { id: "u37", label: "Unité 37", title: "Le plus-que-parfait" },
        { id: "u38", label: "Unité 38", title: "Le discours indirect" },
        { id: "u39", label: "Unité 39", title: "Bilan 7", bilan: true },
        { id: "u40", label: "Unité 40", title: "Le gérondif" },
        { id: "u41", label: "Unité 41", title: "Le passif" },
        { id: "u42", label: "Unité 42", title: "Les hypothèses avec si" },
        { id: "u43", label: "Unité 43", title: "Les connecteurs" },
        { id: "u44", label: "Unité 44", title: "Lequel, auquel, duquel" },
        { id: "u45", label: "Unité 45", title: "Bilan 8 et point B1", bilan: true }
      ]
    },
    {
      n: 4, nom: "Lire", niveau: "vers B2", semaines: null,
      peut: "Read essays, popular science and philosophy in the original.",
      cles: ["le passé simple", "la langue écrite", "les textes authentiques"],
      units: []
    }
  ],
  semaine: [
    { nom: "Le système", minutes: 15, quoi: "Read the explanation, listen to the examples" },
    { nom: "Exercices", minutes: 10, quoi: "Forms and gaps" },
    { nom: "Écoute et production", minutes: 10, quoi: "Dictation, rewriting, translation" },
    { nom: "Révision", minutes: 10, quoi: "Review queue, then the reading" }
  ]
};
