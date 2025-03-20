<?php
session_start();

// Vérifier si l'utilisateur est connecté
if (!isset($_SESSION['user_id'])) {
    header("Location: connexion.php");
    exit();
}

// Connexion à la base de données
$host = "127.0.0.1";
$port = 3306;
$user = "root";
$password = "";
$dbname = "banque_de_quiz";

try {
    $pdo = new PDO("mysql:host=$host;port=$port;dbname=$dbname;charset=utf8", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Récupérer les infos de l'utilisateur
    $sqlUser = "SELECT username, email FROM users WHERE id = :id";
    $stmtUser = $pdo->prepare($sqlUser);
    $stmtUser->bindParam(':id', $_SESSION['user_id']);
    $stmtUser->execute();
    $userInfo = $stmtUser->fetch(PDO::FETCH_ASSOC);

    // Récupérer les scores de l'utilisateur
    $sqlScores = "SELECT quiz_name, score, date_played FROM scores WHERE user_id = :id ORDER BY date_played DESC";
    $stmtScores = $pdo->prepare($sqlScores);
    $stmtScores->bindParam(':id', $_SESSION['user_id']);
    $stmtScores->execute();
    $scores = $stmtScores->fetchAll(PDO::FETCH_ASSOC);

} catch (PDOException $e) {
    die("<p style='color: red;'>Erreur de connexion : " . $e->getMessage() . "</p>");
}

// Réinitialiser les scores si demandé
if (isset($_POST['reset_scores'])) {
    try {
        $sqlReset = "DELETE FROM scores WHERE user_id = :id";
        $stmtReset = $pdo->prepare($sqlReset);
        $stmtReset->execute([':id' => $_SESSION['user_id']]);
        header("Location: compte.php?reset_success=1");
        exit();
    } catch (PDOException $e) {
        die("<p style='color: red;'>Erreur lors de la suppression des scores : " . $e->getMessage() . "</p>");
    }
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Compte</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<header>
        <div class="logo">LOGO</div>
        <nav>
            <ul>
                <li><a href="/GrandOral_Projet_2/" >Accueil</a></li>
                <li><a href="banque_de_quiz.php">Quiz</a></li>
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

<div class="container">
    <h1>Mon Compte</h1><br>

    <div class="user-info">
        <h2>Mes informations personnelles</h2><br>
        <p><strong>Pseudo :</strong> <?= htmlspecialchars($userInfo['username']) ?></p>
        <p><strong>Email :</strong> <?= htmlspecialchars($userInfo['email']) ?></p>
    </div><br>

    <div class="user-scores">
        <h2>Mes Scores</h2>
        <?php if (isset($_GET['reset_success'])): ?>
            <p style="color: green;">✅ Scores réinitialisés avec succès !</p>
        <?php endif; ?>

        <?php if (count($scores) > 0): ?>
            <table border="1">
                <tr>
                    <th>Quiz</th>
                    <th>Score</th>
                    <th>Date</th>
                </tr>
                
                <?php foreach ($scores as $score): ?>
                    <tr>
                        <td><?= htmlspecialchars($score['quiz_name']) ?></td>
                        <td><?= htmlspecialchars($score['score']) ?></td>
                        <td><?= htmlspecialchars($score['date_played']) ?></td>
                    </tr>
                <?php endforeach; ?>
            </table>
        <?php else: ?>
            <p>Aucun score enregistré.</p><br>
        <?php endif; ?>
        
        <form method="post" onsubmit="return confirm('Êtes-vous sûr de vouloir réinitialiser vos scores ?');">
            <button type="submit" name="reset_scores" class="btn-danger">Réinitialiser mes scores</button>
        </form>
    </div><br><br>

    <a href="logout.php" class="btn">Se déconnecter</a>
</div>

<footer>
    <a href="contact.php">Contact</a>
    <a href="#">Mentions Légales</a>
</footer>

</body>
</html>
