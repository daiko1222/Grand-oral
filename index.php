<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
    <title>Banque de quiz</title>
</head>
<body>
    <header>
        <nav>
            <a href="banque_de_quiz.php">Banque de quiz</a><br>
            <a href="inscription.php">Inscription</a>
        </nav>
    </header>
    <h1>Accueil</h1>
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
} else {
    echo "Connexion réussie à la base de données 'banque_de_quiz'";
    }




?>
</body>
</html>

