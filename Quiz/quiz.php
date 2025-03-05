<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Burger Quizz</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel="shortcut icon" type="image/png" href="Burger_Quiz logo.png" />
    <link rel='stylesheet' href='main.css'>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet">
</head>

<body>
    <header>
        <a href="../index.php">
            <img class="logo" src="Burger_Quiz_logo.jpg" alt="logo burger quizz" title="Burger_Quiz_logo png">
        </a>
    </header>
    <main>
        <div class="linear-simple">
            <section id="start">
                <div id="bloc">
                    <h1>BURGER QUIZZ !</h1><br>
                    Règles du jeu : <br>
                    2 manches
                    <ul id="liste">
                        <li>
                            <strong>Nuggets</strong><br>
                            3 questions avec 4 propositions<br>
                        </li>
                        <li>
                            <strong>Sel ou Poivre</strong><br>
                            7 questions avec 3 propositions (3sec / questions)<br><br>
                        </li>
                    </ul>
                    <p>
                        Vous gagnez 1 miam par bonne réponse. <br>
                        La manche est gagnée si vous avez plus de 5 miam ! <br>
                    </p>
                    <button id="button" onclick="startQuiz()">Démarrer le Quizz</button>
                </div>
            </section>

            <section id="quiz">
                <div id="timer-container">
                    <div id="progress"></div>
                </div>
                <div class="question-number">QUESTION NUGGETS <span id="current-question"></span>/<span id="total-questions"></span></div>
                <div id="theme"></div>
                <div id="question"></div>
                <div id="question-container">
                    
                        <img id="question-image" src="" alt="Image question">
                    
                    <div id="reponses">
                        <a class="reponses" id="a"></a>
                        <a class="reponses" id="b"></a>
                        <a class="reponses" id="c"></a>
                        <a class="reponses" id="d"></a>
                    </div>
                </div>
                <button id="nextbutton" onclick="next()">Question suivante</button>
            </section>

            <section id="resultat">
                <h1>TOTAL = <span id="score_total"></span>/20 </h1>
                <p id="text_resultat"></p>
                <div>Points : <span id="resultat_nuggets"></span></div>
            </section>
        </div>
    </main>
    <script src="questions.js"></script>
    <script src='main.js'></script>
</body>

</html>
