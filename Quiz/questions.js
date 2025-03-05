const questions = {
	"nuggets": [
	  {//Question 1
		"question": "Quel pays est associé à ce drapeau ?",
		"image": "./img/Q1_Venezuela.webp",
		"propositions": {
		  "a": "Pays 1",
		  "b": "Pays 2",
		  "c": "Pays 3",
		  "d": "Pays 4"
		},
		"reponse": "d"
	  },
	  {//Question 2
		"question": "Complétez l'expression : 'Mettre du beurre dans les...':",
		"image": "./img/Q2_Beurre.webp",
		"propositions": {
		  "a": "Nouilles",
		  "b": "Patates",
		  "c": "Épinard",
		  "d": "Poêle"
		},
		"reponse": "c"
	  },
	  {//Question 3
		"question": "Comment s'appelle le frère de Mario, le héros de jeux vidéo ?",
		"image": "./img/Q3_Luigi.webp",
		"propositions": {
		  "a": "Yoshi",
		  "b": "Luigi",
		  "c": "Wario",
		  "d": "Donkey kong"
		},
		"reponse": "b"
	  },
	  {//Question 4
		"question": "Quel océan borde la Chine ?",
		"image": "./img/Q4_10_Pacifique.webp",
		"propositions": {
		  "a": "Océan Indien",
		  "b": "Océan Pacifique",
		  "c": "Océan Atlantique",
		  "d": "Océan Antarctique"
		},
		"reponse": "b"
	  },
	  {//Question 5
		"question": "Lequel de ces mots se termine par un X quand il est au pluriel ?",
		"image": "./img/Q5_X.webp",
		"propositions": {
		  "a": "Clou",
		  "b": "Tabou",
		  "c": "Caillou",
		  "d": "Kangourou"
		},
		"reponse": "c"
	  },
	  {//Question 6
		"question": "De quel pays était originaire le pape Jean-Paul II ?",
		"image": "./img/Q6_Jean_Paul.webp",
		"propositions": {
		  "a": "Pologne",
		  "b": "Italie",
		  "c": "Grèce",
		  "d": "Portugal"
		},
		"reponse": "a"
	  },
	  {//Question 7
		"question": "Qui a peint la célèbre œuvre 'La Joconde' ?",
		"image": "./img/Q7_Joconde.webp",
		"propositions": {
		  "a": "Pablo Picasso",
		  "b": "Vincent van Gogh",
		  "c": "Claude Monet",
		  "d": "Léonard de Vinci"
		},
		"reponse": "d"
	  },
	  {//Question 8
		"question": "Quelle est la capitale de l'Italie ?",
		"image": "./img/Q8_Italie.webp",
		"propositions": {
		  "a": "Florence",
		  "b": "Rome",
		  "c": "Milan",
		  "d": "Venise"
		},
		"reponse": "b"
	  },
	  {//Question 9
		"question": "En quelle année l'Homme a-t-il marché sur la Lune pour la première fois ?",
		"image": "./img/Q9_HommeLune.webp",
		"propositions": {
		  "a": "1965",
		  "b": "1969",
		  "c": "1972",
		  "d": "1981"
		},
		"reponse": "b"
	  },
	  {//Question 10
		"question": "Quel est le plus grand océan du monde ?",
		"image": "./img/Q4_10_Pacifique.webp",
		"propositions": {
		  "a": "Océan Atlantique",
		  "b": "Océan Indien",
		  "c": "Océan Arctique",
		  "d": "Océan Pacifique"
		},
		"reponse": "d"
	  },
	  {//Question 11
		"question": "Quel est le plus long fleuve du monde ?",
		"image": "./img/Q11_Fleuve.webp",
		"propositions": {
		  "a": "Le Nil",
		  "b": "L'Amazone",
		  "c": "Le Mississippi",
		  "d": "Le Yangtsé"
		},
		"reponse": "a"
	  },
	  {//Question 12
		"question": "Qui a écrit 'Les Misérables' ?",
		"image": "./img/Q12_Miserables.webp",
		"propositions": {
		  "a": "Honoré de Balzac",
		  "b": "Émile Zola",
		  "c": "Victor Hugo",
		  "d": "Gustave Flaubert"
		},
		"reponse": "c"
	  },
	  {//Question 13
		"question": "Quel est le symbole chimique de l'oxygène ?",
		"image": "./img/Q13_Oxygene.webp",
		"propositions": {
		  "a": "O",
		  "b": "O2",
		  "c": "O²",
		  "d": "Ox"
		},
		"reponse": "a"
	  },
	  {//Question 14
		"question": "Qui a découvert la théorie de la relativité ?",
		"image": "./img/Q14_Relativite.webp",
		"propositions": {
		  "a": "Isaac Newton",
		  "b": "Albert Einstein",
		  "c": "Niels Bohr",
		  "d": "Nikola Tesla"
		},
		"reponse": "b"
	  },
	  {//Question 15
		"question": "Quel est le plus grand pays du monde par superficie ?",
		"image": "./img/Q15_Superficie.webp",
		"propositions": {
		  "a": "Canada",
		  "b": "Chine",
		  "c": "Russie",
		  "d": "États-Unis"
		},
		"reponse": "c"
	  },
	  {//Question 16
		"question": "Quel est le premier livre de la Bible ?",
		"image": "./img/Q16_Bible.webp",
		"propositions": {
		  "a": "Genèse",
		  "b": "Exode",
		  "c": "Lévitique",
		  "d": "Psaumes"
		},
		"reponse": "a"
	  },
	  {//Question 17
		"question": "Qui a inventé le téléphone ?",
		"image": "./img/Q17_Telephone.webp",
		"propositions": {
		  "a": "Thomas Edison",
		  "b": "Albert Einstein",
		  "c": "Nikola Tesla",
		  "d": "Alexander Graham Bell"
		},
		"reponse": "d"
	  },
	  {//Question 18
		"question": "Quel est le premier président des États-Unis ?",
		"image": "./img/Q18_President_USA.webp",
		"propositions": {
		  "a": "Abraham Lincoln",
		  "b": "Thomas Jefferson",
		  "c": "George Washington",
		  "d": "John F. Kennedy"
		},
		"reponse": "c"
	  },
	  {//Question 19
		"question": "Qui a écrit '1984' ?",
		"image": "./img/Q19_1984.webp",
		"propositions": {
		  "a": "Aldous Huxley",
		  "b": "George Orwell",
		  "c": "Franz Kafka",
		  "d": "Ray Bradbury"
		},
		"reponse": "b"
	  },
	  {//Question 20
		"question": "Dans quelle ville a eu lieu le premier vol humain dans l'espace ?",
		"image": "./img/Q20_Vol.webp",
		"propositions": {
		  "a": "Moscou",
		  "b": "New York",
		  "c": "Baïkonour",
		  "d": "Paris"
		},
		"reponse": "c"
	  }
	]
  };