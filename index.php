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
        <nav>
            <a href="banque_de_quiz.php">Banque de quiz</a><br><br>
            <a href="inscription.php">Inscription</a><br>
            <a href=Quiz/quiz.php>Quiz</a>
        </nav>
    </header><br>

    <div class="center">
    <div class="space">
    <h1>Accueil</h1>

    <br><br>

    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste labore, obcaecati incidunt recusandae eius quam minima, nemo sunt ducimus eaque magni sint, ullam et corrupti earum assumenda illum vero! Quisquam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste labore, obcaecati incidunt recusandae eius quam minima, nemo sunt ducimus eaque magni sint, ullam et corrupti earum assumenda illum vero! Quisquam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste labore, obcaecati incidunt recusandae eius quam minima, nemo sunt ducimus eaque magni sint, ullam et corrupti earum assumenda illum vero! Quisquam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste labore, obcaecati incidunt recusandae eius quam minima, nemo sunt ducimus eaque magni sint, ullam et corrupti earum assumenda illum vero! Quisquam!</p>
    





</div></div>
    
    
    
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
    die("Connexion échouée : " . $con->connect_error);
} 




?>
</body>
</html>

