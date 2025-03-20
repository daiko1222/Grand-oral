<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="css/style.css" />

    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Mogra&display=swap" rel="stylesheet">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">

    <title>Banque de quiz</title>
</head>
<body>
<header>
        <div class="logo">LOGO</div>
        <nav>
            <ul>
                <li><a href="/GrandOral_Projet_2/" >Accueil</a></li>
                <li><a href="banque_de_quiz.php" class="en-cours">Quiz</a></li>
                <li><a href="contact.php" class="contact">Contact</a></li>
                <li><a href="compte.php" class="compte" >Compte</a></li>
            </ul>
        </nav>
        <a href="connexion.php" class="connexion">Connexion</a>
        <div class="burger-menu">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </header>
<br>
    <div class="center">
    <div class="space">
    <h1>Banque de quiz</h1>
    </div></div>
    <div class="quiz_choice">
        <div class="quiz_choice1">
<a href="Quiz/quiz.php"><img class="icon_quiz" src="/Quiz/Burger_Quiz_logo.jpg" alt="Culture G" srcset=""></a>
</div>

<div class="quiz_choice2">
<a href="Quiz/quiz.php"><img class="icon_quiz" src="/Quiz/Burger_Quiz_logo.jpg" alt="Burger" srcset=""></a>
</div>


<div class="quiz_choice3">
<a href="Quiz/quiz.php"><img class="icon_quiz" src="/Quiz/Burger_Quiz_logo.jpg" alt="Burger" srcset=""></a>
</div>

<div class="quiz_choice4">
<a href="Quiz/quiz.php"><img class="icon_quiz" src="/Quiz/Burger_Quiz_logo.jpg" alt="Burger" srcset=""></a>
</div>





</div>
    <?php

$host = "127.0.0.1"; // Adresse du serveur MySQL (localhost)
$port = 3306; // Port MySQL par défaut
$user = "root"; // Nom d'utilisateur (par défaut pour Laragon)
$password = ""; // Mot de passe (vide par défaut pour Laragon)
$dbname = "banque_de_quiz"; // Nom de votre base de données

// Créer une connexion MySQL
$con = new mysqli($host, $user, $password, $dbname, $port);

// Vérifier si la connexion est réussie
if ($con->connect_error) {
    die("<p>Connexion échouée : " . $con->connect_error)."</p>";
} else {
    echo "<p>Connexion réussie à la base de données 'banque_de_quiz'</p>";
    }



    
?>
<footer>
        <a href="contact.php">Contact</a>
        <a href="#">Mentions Légales</a>
    </footer>
</body>
</html>

