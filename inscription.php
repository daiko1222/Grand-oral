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
            <a href="index.php">Accueil</a><br><br>
            <a href="banque_de_quiz.php">Banque de quiz</a>
        </nav>
    </header><br>



    <div class="center">
    <div class="space">
    <h1>Inscription</h1>




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
    echo "<p>Connexion réussie à la base de données 'banque_de_quiz'</p>";
    }




?><br><br>


<form method="POST" action="">
    <label for="pseudo">Pseudo :</label><br>
    <input type="text" id="pseudo" name="pseudo" required><br><br>

    <label for="email">Email :</label><br>
    <input type="email" id="email" name="email" required><br><br>

    <label for="password">Mot de passe :</label><br>
    <input type="password" id="password" name="password" required><br><br>

    <button type="submit">S'inscrire</button>
</form><br>

<?php
 $connected=false;
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Récupération des données du formulaire
    $pseudo = htmlspecialchars(trim($_POST['pseudo']));
    $email = htmlspecialchars(trim($_POST['email']));
    $password = htmlspecialchars(trim($_POST['password']));

    // Vérification des champs obligatoires
    if (empty($pseudo) || empty($email) || empty($password)) {
        echo "<p style='color: red;'>Tous les champs sont obligatoires.</p>";
    } else {
        // Connexion à la base de données
        $host = "localhost"; // Remplacez par l'hôte de votre base de données
        $dbname = "banque_de_quiz"; // Remplacez par le nom de votre base de données
        $username = "root"; // Remplacez par le nom d'utilisateur
        $dbpassword = ""; // Remplacez par le mot de passe

        try {
            $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $dbpassword);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            // Hachage du mot de passe
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

            // Insertion dans la table users
            $sql = "INSERT INTO users (username, email, password) VALUES (:pseudo, :email, :password)";
            $stmt = $pdo->prepare($sql);

            $stmt->bindParam(':pseudo', $pseudo);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':password', $hashedPassword);

            $stmt->execute();
            $connected=true;

            sleep(2);// Délais de 1s avant d'être redirigé
            // Redirection vers la page d'accueil après une inscription réussie
            header("Location: index.php");
            exit; // Assurez-vous de quitter le script après la redirection

        } catch (PDOException $e) {
            echo "<p style='color: red;'>Erreur : " . $e->getMessage() . "</p>";
        }
    }
}

?>
<a href="connexion.php"> Connectez vous</a>
    </div></div>








    <footer>
        <a href="contact.php">Contact</a>
        <a href="#">Mentions Légales</a>
    </footer>
</body>
</html>

