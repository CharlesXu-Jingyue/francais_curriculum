registerUnit({
  id: "f2",
  title: "Le genre et le nombre",
  objectif: "Name everyday things with the right article, and hear singular from plural.",
  legend: ["end", "mute", "m", "f"],

  systeme: [
    { p: "Every French noun carries two features: a gender (masculine or feminine) and a number (singular or plural). Gender belongs to the word, not to the thing: {fr:la table} is feminine and {fr:le bureau} is masculine, and nothing about tables or desks tells you so. A noun is therefore always learned together with its article." },
    { table: {
        head: ["genre", "singulier", "à l’oral", "pluriel", "à l’oral"],
        kinds: ["fr", "fr", "ipa", "fr", "ipa"],
        rows: [
          ["masculin", "{m:le livre}", "/lə livʁ/", "{m:les livre{s:s}}", "/le livʁ/"],
          ["féminin", "{f:la table}", "/la tabl/", "{f:les table{s:s}}", "/le tabl/"],
          ["devant voyelle", "{m:l’ami}", "/lami/", "{m:les‿ami{s:s}}", "/le{e:z}ami/"]
        ] },
      marge: "le ≠ les :<br>/lə/ ≠ /le/" },
    { table: {
        head: ["genre", "singulier", "à l’oral", "pluriel", "à l’oral"],
        kinds: ["fr", "fr", "ipa", "fr", "ipa"],
        rows: [
          ["masculin", "{m:un livre}", "/œ̃ livʁ/", "{m:des livre{s:s}}", "/de livʁ/"],
          ["féminin", "{f:une table}", "/yn tabl/", "{f:des table{s:s}}", "/de tabl/"]
        ] },
      marge: "un, une → des" },
    { p: "In the plural, gender disappears from the article ({fr:les} and {fr:des} serve both) and the noun’s <em>-s</em> is silent. In speech the article is usually the only thing that tells you how many: {fr:le livre} {ipa:/lə livʁ/} against {fr:les livres} {ipa:/le livʁ/}. Listen to the vowel of the article." },
    { p: "Gender can often be guessed from the ending of the noun. These are strong tendencies, not rules:" },
    { list: [
        "Mostly feminine: <em>-tion</em> ({fr:la nation}), <em>-té</em> ({fr:la liberté}), <em>-ure</em> ({fr:la voiture}), <em>-ette</em> ({fr:la baguette}).",
        "Mostly masculine: <em>-ment</em> ({fr:le moment}), <em>-age</em> ({fr:le fromage}), <em>-eau</em> ({fr:le bureau}), <em>-isme</em> ({fr:le tourisme}).",
        "Every group has exceptions: {fr:la plage}, {fr:la page} and {fr:l’image} are feminine despite <em>-age</em>; {fr:l’eau} and {fr:la peau} are feminine despite <em>-eau</em>."
      ] },
    { p: "Plural spelling is mostly silent. Add <em>-s</em> ({fr:un chat}, {fr:des chats}). Nouns in <em>-eau</em> and <em>-au</em> take <em>-x</em> ({fr:un bateau}, {fr:des bateaux}). Nouns in <em>-al</em> change to <em>-aux</em> ({fr:un journal}, {fr:des journaux}), and that change you can hear: {ipa:/ʒuʁnal/} against {ipa:/ʒuʁno/}. Nouns already ending in <em>-s</em>, <em>-x</em> or <em>-z</em> do not change ({fr:un bus}, {fr:des bus}).",
      marge: "-s, -x :<br>muets" }
  ],

  oral: [
    { label: "élision", html: "{fr:le} and {fr:la} become {fr:l’} before a vowel or a silent <em>h</em>: {fr:l’ami}, {fr:l’école}, {fr:l’hôtel}. Elision hides the gender, so learn these nouns with {fr:un} or {fr:une}: {fr:un ami}, {fr:une école}." },
    { label: "liaison", html: "Before a vowel, the silent <em>s</em> of {fr:les} and {fr:des} is pronounced /z/: {fr:les‿amis} {ipa:/le{e:z}ami/}, {fr:des‿enfants} {ipa:/de{e:z}ɑ̃fɑ̃/}. The <em>n</em> of {fr:un} is pronounced too: {fr:un‿ami} {ipa:/œ̃{e:n}ami/}." },
    { label: "ancrage", html: "German also has gender, but the assignments do not transfer: <em>der Mond</em> is {fr:la lune}, <em>die Sonne</em> is {fr:le soleil}, <em>das Mädchen</em> is {fr:la fille}. Each French noun’s gender has to be learned on its own." },
    { label: "ancrage", html: "Mandarin has no grammatical gender, so this is a feature to track from scratch. The closest habit is the measure word: 一本书 and 一张桌子 require knowing which small word each noun takes, and French requires knowing which article. The difference is that French has only two classes, assigned with little regard to meaning, and the article also marks number. And where a measure word appears only with a number or a demonstrative (这本书), a French noun almost always needs an article." }
  ],

  exemples: [
    { fr: "C’est {m:un livre}.", en: "It’s a book." },
    { fr: "C’est {f:une table}.", en: "It’s a table." },
    { fr: "Voici {m:le bureau} et voilà {f:la porte}.", en: "Here is the desk, and there is the door." },
    { fr: "Voici {m:les livre{s:s}}.", en: "Here are the books.", note: "les : /le/" },
    { fr: "C’est {f:l’école}.", en: "It’s the school.", note: "l’école (f)" },
    { fr: "Voici {m:un‿ami} et {f:une amie}.", en: "Here is a friend (male) and a friend (female)." },
    { fr: "Voici {m:un bateau} et voilà {m:des bateau{s:x}}.", en: "Here is a boat, and there are some boats." },
    { fr: "Voici {m:le journal} et voilà {m:les journ{e:aux}}.", en: "Here is the newspaper, and there are the newspapers." },
    { fr: "C’est {f:une photo} de {f:la ville}.", en: "It’s a photo of the town." }
  ],

  pieges: [
    { label: "piège", html: "A final <em>-o</em> or <em>-e</em> does not tell you the gender: {fr:la photo} but {fr:le piano}; {fr:la table} but {fr:le problème}." },
    { label: "piège", html: "{fr:une personne} is feminine even when the person is a man, and {fr:un bébé} is masculine even for a girl. Grammatical gender belongs to the word." },
    { label: "piège", html: "{fr:l’eau} is feminine ({fr:une eau minérale}), despite its masculine-looking <em>-eau</em>." },
    { label: "piège", html: "{fr:un ami} {ipa:/œ̃nami/} and {fr:une amie} {ipa:/ynami/} differ only in the vowel of the article. In writing, the feminine adds an <em>-e</em> you cannot hear." }
  ],

  exercices: [
    { titre: "Articles", seance: 2, items: [
      { t: "sort", q: "Masculin ou féminin ?", bins: ["masculin", "féminin"], items: [["livre", 0], ["table", 1], ["bureau", 0], ["voiture", 1], ["moment", 0], ["liberté", 1], ["fromage", 0], ["maison", 1]] },
      { t: "choose", q: "___ livre", options: ["le", "la", "l’"], a: "le" },
      { t: "choose", q: "___ école", options: ["le", "la", "l’"], a: "l’", why: "Before a vowel, {fr:le} and {fr:la} both become {fr:l’}." },
      { t: "choose", q: "___ amis", options: ["un", "une", "des"], a: "des", why: "One plural article for both genders, with a liaison: /dez‿ami/." },
      { t: "choose", q: "___ photo", options: ["le", "la"], a: "la", why: "A final -o says nothing about gender: {fr:la photo}, {fr:le piano}." },
      { t: "cloze", q: "Voici ___ maison.", hint: "un / une", a: "une" },
      { t: "cloze", q: "Voilà ___ hôtel.", hint: "le / la / l’", a: "l’", why: "The h of {fr:hôtel} is silent, so {fr:le} becomes {fr:l’}." },
      { t: "transform", q: "le livre", consigne: "Au pluriel", a: ["les livres"] },
      { t: "transform", q: "un bateau", consigne: "Au pluriel", a: ["des bateaux"], note: "-eau → -eaux" },
      { t: "transform", q: "le journal", consigne: "Au pluriel", a: ["les journaux"], note: "-al → -aux" }
    ] },
    { titre: "Écoute et production", seance: 3, items: [
      { t: "ecoute", say: "le livre", options: ["le livre", "les livres"], a: "le livre", why: "Listen to the article: /lə/ is singular, /le/ is plural." },
      { t: "ecoute", say: "les livres", options: ["le livre", "les livres"], a: "les livres", why: "The noun sounds the same; the article /le/ carries the plural." },
      { t: "ecoute", say: "des amis", options: ["un ami", "des amis"], a: "des amis", why: "The liaison /z/ marks the plural: /dez‿ami/." },
      { t: "ecoute", say: "une amie", options: ["un ami", "une amie"], a: "une amie", why: "Only the vowel of the article differs: /œ̃nami/ against /ynami/." },
      { t: "dictee", a: "C’est une table." },
      { t: "dictee", a: "Voici les livres." },
      { t: "translate", q: "the house", a: ["la maison"] },
      { t: "translate", q: "some cats", a: ["des chats"] },
      { t: "translate", q: "a friend (female)", a: ["une amie"] },
      { t: "spot", q: "C’est une livre.", a: ["C’est un livre."], note: "livre (m)", why: "{fr:une livre} exists, but it means a pound. A book is {fr:un livre}." }
    ] }
  ],

  lecture: {
    phrases: [
      { fr: "Voici {f:la chambre} de Paul.", en: "Here is Paul’s bedroom." },
      { fr: "Voici {m:le lit}, {f:la table} et {f:une chaise}.", en: "Here are the bed, the table and a chair." },
      { fr: "Sur {f:la table}, voilà {m:un téléphone}, {m:des livre{s:s}} et {f:une photo}.", en: "On the table, there is a phone, some books and a photo." },
      { fr: "C’est {f:une photo} de {f:la ville}.", en: "It’s a photo of the town." },
      { fr: "Et voici {f:la fenêtre}, avec {f:la rue}, {f:les voiture{s:s}} et {m:les bus}.", en: "And here is the window, with the street, the cars and the buses." },
      { fr: "Et voici {m:le chat} !", en: "And here is the cat!" }
    ],
    notes: [
      { label: "voici, voilà", html: "{fr:voici} points to something near, {fr:voilà} to something a little further. In speech {fr:voilà} is used for both." }
    ]
  },

  vocabulaire: [
    { fr: "{m:le livre}", en: "book" },
    { fr: "{f:la table}", en: "table" },
    { fr: "{f:la maison}", en: "house" },
    { fr: "{f:la ville}", en: "town, city" },
    { fr: "{f:l’école}", en: "school (feminine)" },
    { fr: "{m:le téléphone}", en: "phone" },
    { fr: "{f:la voiture}", en: "car" },
    { fr: "{m:l’ami}, {f:l’amie}", en: "friend (male, female)" },
    { fr: "{m:le chat}", en: "cat" },
    { fr: "{f:la porte}", en: "door" },
    { fr: "{f:la fenêtre}", en: "window" },
    { fr: "{m:le bureau}", en: "desk; office" },
    { fr: "{f:la rue}", en: "street" },
    { fr: "{f:l’eau}", en: "water (feminine)" },
    { fr: "{f:la photo}", en: "photo" },
    { fr: "{f:la chambre}", en: "bedroom" },
    { fr: "{m:le lit}", en: "bed" },
    { fr: "{f:la chaise}", en: "chair" },
    { fr: "{m:le journal}", en: "newspaper" }
  ],

  lexique: [
    ["livre", "un livre", "nom", "m", "", "book", "une livre (feminine) is a pound, in weight or money."],
    ["livres", "un livre", "nom", "m", "pluriel", "books", "The -s is silent: les livres /le livʁ/."],
    ["table", "une table", "nom", "f", "", "table", ""],
    ["tables", "une table", "nom", "f", "pluriel", "tables", ""],
    ["bureau", "un bureau", "nom", "m", "", "desk; office", "Plural: des bureaux."],
    ["masculin", "masculin", "adjectif", "m", "masculin singulier", "masculine", ""],
    ["féminin", "féminin", "adjectif", "m", "masculin singulier", "feminine", ""],
    ["devant", "devant", "préposition", "", "", "in front of, before", "devant une voyelle: before a vowel."],
    ["voyelle", "une voyelle", "nom", "f", "", "vowel", ""],
    ["amis", "un ami", "nom", "m", "pluriel", "friends", "The -s is silent, but les amis and des amis have a liaison: /lez‿ami/."],
    ["amie", "une amie", "nom", "f", "", "friend (female)", "Sounds exactly like ami. Only the article tells them apart: un ami /œ̃nami/, une amie /ynami/."],
    ["nation", "une nation", "nom", "f", "", "nation", "Nouns in -tion are feminine."],
    ["liberté", "la liberté", "nom", "f", "", "freedom, liberty", "Nouns in -té are almost all feminine."],
    ["voiture", "une voiture", "nom", "f", "", "car", "Nouns in -ure are mostly feminine."],
    ["voitures", "une voiture", "nom", "f", "pluriel", "cars", ""],
    ["baguette", "une baguette", "nom", "f", "", "baguette; stick", "des baguettes can also mean chopsticks."],
    ["moment", "un moment", "nom", "m", "", "moment", "Nouns in -ment are masculine."],
    ["fromage", "le fromage", "nom", "m", "", "cheese", "Most nouns in -age are masculine."],
    ["tourisme", "le tourisme", "nom", "m", "", "tourism", "Nouns in -isme are masculine."],
    ["plage", "une plage", "nom", "f", "", "beach", "Feminine despite -age."],
    ["page", "une page", "nom", "f", "", "page", "Feminine despite -age."],
    ["image", "une image", "nom", "f", "", "picture, image", "Feminine despite -age: l’image, une image."],
    ["eau", "l’eau (f)", "nom", "f", "", "water", "Feminine despite -eau: une eau minérale. Plural: les eaux."],
    ["peau", "la peau", "nom", "f", "", "skin", "Feminine despite -eau."],
    ["chat", "un chat", "nom", "m", "", "cat", "The t is silent: /ʃa/. A female cat is une chatte."],
    ["chats", "un chat", "nom", "m", "pluriel", "cats", ""],
    ["bateau", "un bateau", "nom", "m", "", "boat", ""],
    ["bateaux", "un bateau", "nom", "m", "pluriel", "boats", "-eau takes -x in the plural, silent: /bato/."],
    ["journal", "un journal", "nom", "m", "", "newspaper; diary", ""],
    ["journaux", "un journal", "nom", "m", "pluriel", "newspapers", "-al becomes -aux, and this one you can hear: /ʒuʁno/."],
    ["bus", "un bus", "nom", "m", "", "bus", "The s is pronounced: /bys/. The plural is unchanged: des bus."],
    ["muets", "muet", "adjectif", "m", "masculin pluriel", "silent, mute", "une lettre muette: a silent letter."],
    ["école", "une école", "nom", "f", "", "school", "l’école hides the gender: une école."],
    ["hôtel", "un hôtel", "nom", "m", "", "hotel", "The h is silent, so le becomes l’: l’hôtel."],
    ["enfants", "un enfant", "nom", "m", "pluriel", "children", "des‿enfants /dez‿ɑ̃fɑ̃/. A girl is une enfant."],
    ["lune", "la lune", "nom", "f", "", "moon", "German der Mond is masculine."],
    ["soleil", "le soleil", "nom", "m", "", "sun", "German die Sonne is feminine."],
    ["voici", "voici", "présentatif", "", "", "here is, here are", "voici points to something near; in speech voilà is used for both."],
    ["porte", "une porte", "nom", "f", "", "door", ""],
    ["photo", "une photo", "nom", "f", "", "photo", "Feminine: short for la photographie."],
    ["piano", "un piano", "nom", "m", "", "piano", ""],
    ["problème", "un problème", "nom", "m", "", "problem", "Masculine despite the -e: nouns in -ème from Greek are masculine."],
    ["personne", "une personne", "nom", "f", "", "person", "Always feminine, even for a man."],
    ["bébé", "un bébé", "nom", "m", "", "baby", "Always masculine, even for a girl."],
    ["minérale", "minéral", "adjectif", "f", "féminin singulier", "mineral", "une eau minérale: mineral water."],
    ["chambre", "une chambre", "nom", "f", "", "bedroom; hotel room", ""],
    ["lit", "un lit", "nom", "m", "", "bed", "The t is silent: /li/."],
    ["chaise", "une chaise", "nom", "f", "", "chair", ""],
    ["téléphone", "un téléphone", "nom", "m", "", "telephone, phone", ""],
    ["fenêtre", "une fenêtre", "nom", "f", "", "window", ""],
    ["rue", "une rue", "nom", "f", "", "street", ""],
    ["maison", "une maison", "nom", "f", "", "house", "à la maison: at home."]
  ]
});
