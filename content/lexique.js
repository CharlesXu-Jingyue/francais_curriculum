/* Shared lexicon behind the fiches: grammar words used everywhere, être and avoir,
   and the French of the page itself (headings, margin labels).
   Format: [key, dictionary form, category, gender, analysis, English, note]
   Unit files add the words that are new in each unit. */
window.LEXIQUE = [
  /* articles and contractions */
  ["le", "le", "article défini", "m", "masculin singulier", "the", "Becomes l’ before a vowel or silent h. Also an object pronoun (him, it), unit 19."],
  ["la", "la", "article défini", "f", "féminin singulier", "the", "Becomes l’ before a vowel or silent h."],
  ["l'", "le, la", "article défini", "", "élidé devant une voyelle", "the", "Elision hides the gender: learn the noun with un or une."],
  ["les", "les", "article défini", "", "pluriel", "the", "One plural for both genders. Liaison before a vowel: les‿amis /lez‿ami/."],
  ["un", "un", "article indéfini", "m", "masculin singulier", "a, an; one", ""],
  ["une", "une", "article indéfini", "f", "féminin singulier", "a, an; one", ""],
  ["des", "des", "article indéfini", "", "pluriel", "some (often untranslated)", "Also de + les, «of the» (unit 9). Liaison before a vowel: des‿amis."],
  ["du", "du", "de + le", "m", "contraction", "of the; some", "de + le always contracts to du (unit 9)."],
  ["au", "au", "à + le", "m", "contraction", "to the, at the", "à + le always contracts to au (unit 9)."],
  ["aux", "aux", "à + les", "", "contraction", "to the, at the", ""],

  /* subject and stressed pronouns */
  ["je", "je", "pronom sujet", "", "1re personne du singulier", "I", "Becomes j’ before a vowel or silent h."],
  ["j'", "je", "pronom sujet", "", "élidé devant une voyelle", "I", ""],
  ["tu", "tu", "pronom sujet", "", "2e personne du singulier, familier", "you", "One person you know well. vous is formal or plural."],
  ["il", "il", "pronom sujet", "m", "3e personne du singulier", "he, it", "Also impersonal: il y a, il fait beau."],
  ["elle", "elle", "pronom sujet", "f", "3e personne du singulier", "she, it", "Also «it» for a feminine noun: la gare, elle est loin."],
  ["on", "on", "pronom sujet", "", "3e personne du singulier", "we (spoken); one, people", "In speech on usually replaces nous: on parle, we speak."],
  ["nous", "nous", "pronom sujet", "", "1re personne du pluriel", "we", ""],
  ["vous", "vous", "pronom sujet", "", "2e personne du pluriel, ou politesse", "you", "Formal to one person, or any group."],
  ["ils", "ils", "pronom sujet", "m", "3e personne du pluriel", "they", "A masculine or mixed group. Sounds like il unless a liaison follows: ils‿ont /ilz‿ɔ̃/."],
  ["elles", "elles", "pronom sujet", "f", "3e personne du pluriel", "they (all feminine)", ""],
  ["moi", "moi", "pronom tonique", "", "1re personne", "me, I", "Stressed form: Moi, je suis chercheur. Et moi ?"],
  ["toi", "toi", "pronom tonique", "", "2e personne", "you", "Et toi ? And you?"],

  /* être and avoir */
  ["être", "être", "verbe irrégulier", "", "infinitif", "to be", ""],
  ["suis", "être", "verbe irrégulier", "", "présent : je", "am", "Also «I follow» from suivre, rarely confusing in context."],
  ["es", "être", "verbe irrégulier", "", "présent : tu", "are", "Sounds exactly like est: /ɛ/."],
  ["est", "être", "verbe irrégulier", "", "présent : il, elle, on", "is", "The s and t are silent: /ɛ/. l’est (noun) is the east."],
  ["sommes", "être", "verbe irrégulier", "", "présent : nous", "are", ""],
  ["êtes", "être", "verbe irrégulier", "", "présent : vous", "are", "One of only three present-tense vous forms not ending in -ez: êtes, faites, dites."],
  ["sont", "être", "verbe irrégulier", "", "présent : ils, elles", "are", "Do not confuse with son /sɔ̃/ (sound; his) or ont /ɔ̃/ (have)."],
  ["avoir", "avoir", "verbe irrégulier", "", "infinitif", "to have", ""],
  ["ai", "avoir", "verbe irrégulier", "", "présent : je", "have", "j’ai /ʒe/."],
  ["as", "avoir", "verbe irrégulier", "", "présent : tu", "have", ""],
  ["a", "avoir", "verbe irrégulier", "", "présent : il, elle, on", "has", "Without accent: the verb. With accent, à is the preposition."],
  ["avons", "avoir", "verbe irrégulier", "", "présent : nous", "have", "Liaison: nous‿avons /nuz‿avɔ̃/."],
  ["avez", "avoir", "verbe irrégulier", "", "présent : vous", "have", ""],
  ["ont", "avoir", "verbe irrégulier", "", "présent : ils, elles", "have", "ils‿ont /ilzɔ̃/ (have) vs ils sont /ilsɔ̃/ (are): the z or s decides."],
  ["y", "y", "pronom", "", "", "there", "il y a: there is, there are. More in unit 21."],

  /* small grammar words */
  ["c'", "ce", "pronom démonstratif", "", "élidé devant une voyelle", "it, this, that", "c’est: it is, this is."],
  ["ce", "ce", "pronom ou déterminant", "", "", "it, this, that", ""],
  ["ça", "ça", "pronom démonstratif", "", "", "that, it", "Spoken form of cela. Ça va ? How are things?"],
  ["ne", "ne", "adverbe de négation", "", "", "not (first half)", "ne ... pas wraps the verb. Often dropped in speech."],
  ["n'", "ne", "adverbe de négation", "", "élidé devant une voyelle", "not (first half)", ""],
  ["pas", "pas", "adverbe de négation", "", "", "not", "ne ... pas wraps the conjugated verb (unit 2)."],
  ["oui", "oui", "adverbe", "", "", "yes", ""],
  ["non", "non", "adverbe", "", "", "no", ""],
  ["et", "et", "conjonction", "", "", "and", "The t is never pronounced, not even before a vowel."],
  ["ou", "ou", "conjonction", "", "", "or", "Without accent. With accent, où means where."],
  ["mais", "mais", "conjonction", "", "", "but", ""],
  ["aussi", "aussi", "adverbe", "", "", "also, too", ""],
  ["très", "très", "adverbe", "", "", "very", ""],
  ["bien", "bien", "adverbe", "", "", "well; really", "Très bien ! Very good."],
  ["ici", "ici", "adverbe", "", "", "here", ""],
  ["là", "là", "adverbe", "", "", "there; here", "With accent. la without accent is the article."],
  ["voilà", "voilà", "présentatif", "", "", "there is, here is; there you go", ""],
  ["qui", "qui", "pronom", "", "", "who", ""],
  ["que", "que", "conjonction ou pronom", "", "", "that; what", "Becomes qu’ before a vowel."],
  ["qu'", "que", "conjonction ou pronom", "", "élidé devant une voyelle", "that; what", ""],
  ["où", "où", "adverbe interrogatif", "", "", "where", "With accent. ou without accent means or."],
  ["comment", "comment", "adverbe interrogatif", "", "", "how", "Comment ça va ? How are you?"],

  /* prepositions */
  ["à", "à", "préposition", "", "", "at, to, in (a city)", "à midi: at noon. à Lyon: in Lyon."],
  ["de", "de", "préposition", "", "", "of, from", "Becomes d’ before a vowel."],
  ["d'", "de", "préposition", "", "élidé devant une voyelle", "of, from", ""],
  ["dans", "dans", "préposition", "", "", "in, inside", ""],
  ["en", "en", "préposition", "", "", "in", "en France, en français. Also a pronoun (unit 21)."],
  ["avec", "avec", "préposition", "", "", "with", ""],
  ["pour", "pour", "préposition", "", "", "for; in order to", ""],
  ["sur", "sur", "préposition", "", "", "on; out of", "3 sur 45: 3 out of 45."],
  ["sous", "sous", "préposition", "", "", "under", ""],
  ["chez", "chez", "préposition", "", "", "at the home of, at", "chez moi: at my place. chez le médecin: at the doctor’s."],
  ["près", "près", "adverbe", "", "", "near, close", "près de + noun: near (something)."],

  /* the page’s own French: headings, margin labels, overview */
  ["unité", "une unité", "nom", "f", "", "unit", ""],
  ["fondations", "une fondation", "nom", "f", "pluriel", "foundations", ""],
  ["objectif", "un objectif", "nom", "m", "", "objective, goal", ""],
  ["système", "le système", "nom", "m", "", "system", "Masculine despite the -e: nouns in -ème from Greek are masculine (le problème, le thème)."],
  ["oral", "l’oral", "nom", "m", "", "speech, the spoken language", "à l’oral: in speech."],
  ["écrit", "l’écrit", "nom", "m", "", "writing, the written language", "à l’écrit: in writing. Also the past participle of écrire."],
  ["exemples", "un exemple", "nom", "m", "pluriel", "examples", ""],
  ["pièges", "un piège", "nom", "m", "pluriel", "traps, pitfalls", ""],
  ["piège", "un piège", "nom", "m", "", "trap, pitfall", ""],
  ["exercices", "un exercice", "nom", "m", "pluriel", "exercises", ""],
  ["lecture", "la lecture", "nom", "f", "", "reading", "Faux ami: a lecture is un cours or une conférence."],
  ["vocabulaire", "le vocabulaire", "nom", "m", "", "vocabulary", ""],
  ["code", "le code", "nom", "m", "", "code", ""],
  ["couleur", "la couleur", "nom", "f", "", "colour", "code couleur: colour code."],
  ["élision", "l’élision", "nom", "f", "", "elision", "Dropping a vowel before another vowel: je + aime gives j’aime."],
  ["liaison", "la liaison", "nom", "f", "", "liaison, linking", "Sounding a normally silent final consonant before a vowel."],
  ["ancrage", "l’ancrage", "nom", "m", "", "anchoring", "From une ancre, an anchor. Here: a comparison with a language you know."],
  ["faux", "faux", "adjectif", "m", "masculin", "false, wrong", "un faux ami: a false friend, a misleading look-alike word."],
  ["ami", "un ami", "nom", "m", "", "friend", "Feminine: une amie, pronounced the same."],
  ["séance", "une séance", "nom", "f", "", "session", "séance 2: the second session of the week."],
  ["révision", "la révision", "nom", "f", "", "review", ""],
  ["sommaire", "le sommaire", "nom", "m", "", "table of contents", ""],
  ["parcours", "le parcours", "nom", "m", "", "route, course, path", ""],
  ["bilan", "le bilan", "nom", "m", "", "review, taking stock", "A consolidation week: no new grammar."],
  ["point", "le point", "nom", "m", "", "point; checkpoint", "le point A1: the A1 checkpoint."],
  ["survie", "la survie", "nom", "f", "", "survival", ""],
  ["raconter", "raconter", "verbe en -er", "", "infinitif", "to tell (a story)", ""],
  ["nuancer", "nuancer", "verbe en -er", "", "infinitif", "to add nuance", ""],
  ["lire", "lire", "verbe irrégulier", "", "infinitif", "to read", "je lis, nous lisons."],
  ["semaines", "une semaine", "nom", "f", "pluriel", "weeks", ""],
  ["semaine", "une semaine", "nom", "f", "", "week", ""],
  ["touchez", "toucher", "verbe en -er", "", "impératif : vous", "touch, tap", "An instruction: the imperative (unit 17)."],
  ["mot", "un mot", "nom", "m", "", "word", ""],
  ["mots", "un mot", "nom", "m", "pluriel", "words", "The final t and s are silent: /mo/."]
];

/* days and months, for the dated heading */
(function () {
  var days = [["lundi", "Monday"], ["mardi", "Tuesday"], ["mercredi", "Wednesday"], ["jeudi", "Thursday"], ["vendredi", "Friday"], ["samedi", "Saturday"], ["dimanche", "Sunday"]];
  var months = [["janvier", "January"], ["février", "February"], ["mars", "March"], ["avril", "April"], ["mai", "May"], ["juin", "June"], ["juillet", "July"], ["août", "August"], ["septembre", "September"], ["octobre", "October"], ["novembre", "November"], ["décembre", "December"]];
  days.concat(months).forEach(function (d) {
    window.LEXIQUE.push([d[0], d[0], "nom", "m", "", d[1], "Days and months take no capital letter in French."]);
  });
})();
