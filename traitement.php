<?php
session_start();
if (!isset($_SESSION['user_id']) || !isset($_SESSION['quiz_questions'])) {
    header("Location: connexion.php");
    exit();
}

// Récupérer les questions
$questions = $_SESSION['quiz_questions'];
unset($_SESSION['quiz_questions']); // Supprimer les questions après soumission

$score = 0;
foreach ($questions as $index => $q) {
    if (isset($_POST["q$index"]) && $_POST["q$index"] === $q['correct']) {
        $score++;
    }
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

    // Enregistrer le score
    $sql = "INSERT INTO scores (user_id, quiz_name, score) VALUES (:user_id, :quiz_name, :score)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':user_id' => $_SESSION['user_id'],
        ':quiz_name' => 'Quiz général',
        ':score' => $score
    ]);

    header("Location: compte.php?success=1");
    exit();
} catch (PDOException $e) {
    die("<p style='color: red;'>Erreur : " . $e->getMessage() . "</p>");
}
