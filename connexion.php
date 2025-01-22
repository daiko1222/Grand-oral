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
        <a href="index.php">Accueil</a><br>
            <a href="banque_de_quiz.php">Banque de quiz</a><br><br>
            <a href="inscription.php">Inscription</a>
        </nav>
    </header><br>
    <h1>Connexion</h1><br>


    <?php
    $connected=false;
    session_start();

    // Connexion à la base de données
    $host = "127.0.0.1";
    $port = 3306;
    $user = "root";
    $password = "";
    $dbname = "banque_de_quiz";

    try {
        $pdo = new PDO("mysql:host=$host;port=$port;dbname=$dbname;charset=utf8", $user, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        die("<p style='color: red;'>Erreur de connexion : " . $e->getMessage() . "</p>");
    }

    // Traitement du formulaire de connexion
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        // Récupérer les valeurs du formulaire
        $pseudo = htmlspecialchars(trim($_POST['pseudo']));
        $password = trim($_POST['password']);

        if (empty($pseudo) || empty($password)) {
            echo "<p style='color: red;'>Tous les champs sont obligatoires.</p>";
        } else {
            // Requête pour chercher l'utilisateur correspondant
            $sql = "SELECT * FROM users WHERE username = :pseudo";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':pseudo', $pseudo);
            $stmt->execute();
            $user = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($user) {
                // Vérification du mot de passe
                if (password_verify($password, $user['password'])) {
                    // Connexion réussie : enregistrement dans la session
                    $_SESSION['user_id'] = $user['id'];
                    $_SESSION['username'] = $user['username'];
                    $_SESSION['role'] = $user['role'];
                    $connected=true;

                    sleep(2);// Délais de 1s avant d'être redirigé
                    // Redirection vers la page d'accueil (index.php)
                    header("Location: index.php");
                    exit();
                } else {
                    echo "<p style='color: red;'>Mot de passe incorrect.</p>";
                }
            } else {
                echo "<p style='color: red;'>Utilisateur introuvable.</p>";
            }
        }
        echo $connected;
    }
    ?>
<div class="center">
<div class="space">
    <form method="POST" action="">
        <label for="pseudo">Pseudo :</label><br>
        <input type="text" id="pseudo" name="pseudo" required><br><br>

        <label for="password">Mot de passe :</label><br>
        <input type="password" id="password" name="password" required><br><br>

        <button type="submit">Se connecter</button>
    </form>
<br>
    <a href="inscription.php"> Inscrivez vous</a>

</div></div>

</body>
</html>

