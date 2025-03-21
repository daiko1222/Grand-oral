<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Burger Quizz</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel="shortcut icon" type="image/png" href="Burger_Quiz logo.png" />
    <link rel='stylesheet' href='../css/style.css'>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Mogra&display=swap" rel="stylesheet">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
</head>

<body>
<header>
    <div class="logo">LOGO</div>
    <nav>
        <ul>
            <li><a href="/GrandOral_Projet_2/">Accueil</a></li>
            <li><a href="banque_de_quiz.php" class="en-cours">Quiz</a></li>
            <li><a href="contact.php" class="contact">Contact</a></li>
            <li><a href="compte.php" class="compte">Compte</a></li>
        </ul>
    </nav>
    <a href="connexion.php" class="connexion">Connexion</a>
    <div class="burger-menu">
        <div></div>
        <div></div>
        <div></div>
    </div>
</header><br>
    <main>
        <div class="linear-simple">
            <section id="start">
                <div id="bloc">
                    <h1>Quiz de culture générale</h1><br>
                    
                    <ul id="liste">
                        <li>
                            <strong>20 questions avec 4 propositions</strong><br>
                            
							Règles du jeu : <br><br>
                        </li>

						<li>
						Une seule réponse : Une fois votre réponse sélectionnée, elle est définitive ! Impossible de changer. <br>
						Objectif : Accumulez un maximum de bonnes réponses pour obtenir le meilleur score. <br>
						Score final : Découvrez votre résultat à la fin du quiz.

						</li>
						</ul><br><br>
                        
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
    <footer>
    <a href="contact.php">Contact</a>
    <a href="#">Mentions Légales</a>
</footer>
</body>

</html>
