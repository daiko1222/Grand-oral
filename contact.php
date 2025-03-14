<?php
session_start();

// Banque de quiz - Contact : NOM DE L'APPLI : MDP "vemqxvtrebpilzwq"

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

// Installation et inclusion de PHPMailer
require 'D:/laragon/GrandOral_Projet_2/PHPMailer-master/PHPMailer-master/src/PHPMailer.php';
require 'D:/laragon/GrandOral_Projet_2/PHPMailer-master/PHPMailer-master/src/Exception.php';
require 'D:/laragon/GrandOral_Projet_2/PHPMailer-master/PHPMailer-master/src/SMTP.php';

$feedback = "";

// Vérification de la méthode de la requête
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validation et nettoyage des données
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $telephone = htmlspecialchars(trim($_POST["telephone"]), ENT_QUOTES, 'UTF-8');
    $sujet = htmlspecialchars(trim($_POST["sujet"]), ENT_QUOTES, 'UTF-8');
    $message = nl2br(htmlspecialchars(trim($_POST["message"]), ENT_QUOTES, 'UTF-8'));

    // Vérification que tous les champs sont remplis
    if (empty($email) || empty($telephone) || empty($sujet) || empty($message)) {
        $feedback = "<p style='color: red;'>Tous les champs sont obligatoires.</p>";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $feedback = "<p style='color: red;'>L'adresse e-mail est invalide.</p>";
    } else {
        // Conversion de l'adresse e-mail en Punycode si nécessaire
        if (strpos($email, '@') !== false) {
            list($user, $domain) = explode('@', $email, 2);
            $domain = idn_to_ascii($domain, IDNA_DEFAULT, INTL_IDNA_VARIANT_UTS46); // Conversion en Punycode
            $emailPunycode = $user . '@' . $domain;
        } else {
            $emailPunycode = $email;
        }

        // Configuration de PHPMailer
        $mail = new PHPMailer(true);

        try {
            // Serveur SMTP
            $mail->isSMTP();
            $mail->Host       = 'smtp.gmail.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'douceanais7794@gmail.com';
            $mail->Password   = 'vemqxvtrebpilzwq'; // Recommandé : charger depuis une variable d'environnement
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port       = 465;

            // Encodage
            $mail->CharSet = 'UTF-8';
            $mail->Encoding = 'base64';

            // Destinataires
            $mail->setFrom($emailPunycode, 'Banque de quiz - Contact');
            $mail->addAddress('douceanais7794@gmail.com'); // Remplacez par l'email de réception

            // Contenu du mail
            $mail->isHTML(true);
            $mail->Subject = 'Message de contact : ' . htmlspecialchars_decode($sujet);
            $mail->Body    = "<html><body>
                              <p><strong>Email :</strong> {$email}</p>
                              <p><strong>Téléphone :</strong> {$telephone}</p>
                              <p><strong>Message :</strong><br>{$message}</p>
                              </body></html>";
            $mail->AltBody = "Email : {$email}\nTéléphone : {$telephone}\nMessage :\n" . htmlspecialchars_decode($message);

            // Envoi du mail
            $mail->send();
            $feedback = "<p style='color: green;'>Votre message a bien été envoyé !</p>";
        } catch (Exception $e) {
            $feedback = "<p style='color: red;'>Erreur lors de l'envoi : " . htmlspecialchars($mail->ErrorInfo, ENT_QUOTES, 'UTF-8') . "</p>";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Contact</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <header>
        <div class="logo">LOGO</div>
        <nav>
            <ul>
                <li><a href="index.php">Accueil</a></li>
                <li><a href="banque_de_quiz.php">Quiz</a></li>
                <li><a href="contact.php" class="en-cours">Contact</a></li>
            </ul>
        </nav>
        <a href="connexion.php" class="connexion">Connexion</a>
    </header>

    <main>
        <section class="contact">
            <h1>Contactez-nous</h1>
            <?= $feedback ?>
            <div class="contact-form">
                <form action="contact.php" method="post">
                    <div>
                        <label for="email">Email :</label>
                        <input type="email" id="email" name="email" required>
                    </div>

                    <div>
                        <label for="telephone">Téléphone :</label>
                        <input type="tel" id="telephone" name="telephone" required>
                    </div>

                    <div>
                        <label for="sujet">Sujet :</label>
                        <input type="text" id="sujet" name="sujet" required>
                    </div>

                    <div>
                        <label for="message">Message :</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>

                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </section>
    </main>

    <footer>
        <a href="contact.php">Contact</a>
        <a href="#">Mentions Légales</a>
    </footer>

</body>

</html>