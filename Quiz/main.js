let miam_nuggets = 0;
let nuggets_posees = [];
let timeout_ID = null;
const text_theme = document.getElementById("theme");
const button_next = document.getElementById("nextbutton");
const text_question = document.getElementById("question");

const text_reponses = {
    "a": document.getElementById("a"),
    "b": document.getElementById("b"),
    "c": document.getElementById("c"),
    "d": document.getElementById("d")
};

text_reponses["a"].addEventListener("click", function() { test_reponse("a"); });
text_reponses["b"].addEventListener("click", function() { test_reponse("b"); });
text_reponses["c"].addEventListener("click", function() { test_reponse("c"); });
text_reponses["d"].addEventListener("click", function() { test_reponse("d"); });

let currentQuestion = 1;
const totalQuestions = 20;

function init() {
    miam_nuggets = 0;
    nuggets_posees = [];
    currentQuestion = 1; // Reset du numéro de question au démarrage
    document.getElementById("start").style.display = "block";
    document.getElementById("quiz").style.display = "none";
    updateQuestionNumber();
}

function startQuiz() {
    document.getElementById("start").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    button_next.style.display = "none";
    showNuggets(randomNuggets());
    updateQuestionNumber();
}

function randomNuggets() {
    const MAX = questions["nuggets"].length;
    let rng = Math.floor(Math.random() * MAX);
    while (nuggets_posees.includes(rng)) {
        rng = Math.floor(Math.random() * MAX);
        if (nuggets_posees.length >= MAX) {
            console.error("can't choose another unasked nugget");
            return false;
        }
    }
    nuggets_posees.push(rng);
    return questions["nuggets"][rng];
}

function showNuggets(question) {
    text_question.innerHTML = question["question"];
    text_reponses["a"].innerHTML = question["propositions"]["a"];
    text_reponses["b"].innerHTML = question["propositions"]["b"];
    text_reponses["c"].innerHTML = question["propositions"]["c"];
    text_reponses["d"].innerHTML = question["propositions"]["d"];

    const imageElement = document.getElementById("question-image");
    imageElement.src = question["image"];

    for (const button_text in text_reponses) {
        text_reponses[button_text].style.display = "block";
        text_reponses[button_text].disabled = false;
    }
}

function test_reponse(user_reponse) {
    let question = questions.nuggets[nuggets_posees[nuggets_posees.length - 1]];

    for (let i in text_reponses) {
        if (text_reponses[i].style.borderColor != "") { return false; }
    }

    for (let i in text_reponses) {
        text_reponses[i].disabled = true;
    }

    if (user_reponse == question["reponse"]) {
        bonneReponse(user_reponse);
    } else {
        mauvaiseReponse(user_reponse);
    }
    button_next.style.display = "block";
    for (let i in text_reponses) {
        if (i == question["reponse"]) {
            text_reponses[i].style.backgroundColor = "#4e0058";
            text_reponses[i].style.color = "white";
        } else if (i == user_reponse) {
            text_reponses[i].style.backgroundColor = "#4e0058";
        }
    }
}

function bonneReponse(user_reponse) {
    miam_nuggets++;
    text_reponses[user_reponse].style.border = "green 5px solid";
}

function mauvaiseReponse(user_reponse) {
    text_reponses[user_reponse].style.border = "red 2px solid";
}

function next() {
    if (timeout_ID != null) { clearTimeout(timeout_ID); }

    button_next.style.display = "none";
    for (let i in text_reponses) {
        text_reponses[i].style.backgroundColor = "#6364a0";
        text_reponses[i].style.border = "";
        text_reponses[i].style.display = "none";
    }

    if (currentQuestion < totalQuestions) {
        currentQuestion++; // Incrémentation correcte du numéro de question
        updateQuestionNumber(); // Mise à jour de l'affichage du numéro de question

        if (nuggets_posees.length < questions["nuggets"].length) {
            showNuggets(randomNuggets());
        } else {
            document.getElementById("quiz").style.display = "none";
            endgame();
        }
    } else {
        endgame();
    }
}

function updateQuestionNumber() {
    document.getElementById('current-question').innerHTML = currentQuestion;
    document.getElementById('total-questions').innerHTML = totalQuestions;
}

function endgame() {
    let text_victoire;
    if (miam_nuggets >= 10) {
        text_victoire = "Bravo vous avez gagné !";
    } else {
        text_victoire = "Vous pouvez mieux faire... !";
    }
    document.getElementById("text_resultat").innerHTML = text_victoire;
    document.getElementById("score_total").innerHTML = miam_nuggets;
    document.getElementById("resultat").style.display = "block";
    document.getElementById("resultat_nuggets").innerHTML = miam_nuggets;
}

init();
