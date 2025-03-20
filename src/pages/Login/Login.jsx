import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import { login, signup } from '../../firebase';
import { useNavigate } from 'react-router-dom';  // Import de useNavigate

const Login = () => {
  const [signState, setSignState] = useState('Se connecter');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Déclaration de la fonction navigate

  // Fonction pour valider l'email et le mot de passe
  const validateInput = () => {
    if (!email || !password) {
      setErrorMessage("L'email et le mot de passe sont requis.");
      return false;
    }

    // Vérification de l'email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("L'adresse email est invalide.");
      return false;
    }

    // Vérification du mot de passe (au moins 6 caractères)
    if (password.length < 6) {
      setErrorMessage("Le mot de passe doit contenir au moins 6 caractères.");
      return false;
    }

    return true;
  };

  const userAuth = async (event) => {
    event.preventDefault();  // Empêcher la soumission par défaut du formulaire
    setErrorMessage(""); // Réinitialisation du message d'erreur

    if (!validateInput()) return; // Si la validation échoue, ne pas continuer

    try {
      if (signState === "Se connecter") {
        // Connexion de l'utilisateur
        await login(email, password);
      } else {
        // Inscription de l'utilisateur
        await signup(name, email, password);
        // Redirection vers la page d'accueil après inscription réussie
        navigate("/"); // Rediriger après une inscription réussie
      }

      // Si l'authentification est réussie (connexion ou inscription), rediriger l'utilisateur
      if (signState === "Se connecter") {
        navigate("/"); // Rediriger vers la page d'accueil après une connexion réussie
      }

    } catch (error) {
      console.error("Erreur capturée dans userAuth:", error.code);

      if (error.code) {
        switch (error.code) {
          case "auth/email-already-in-use":
            setErrorMessage("Cette adresse mail est déjà utilisée.");
            break;
          case "auth/invalid-email":
            setErrorMessage("L'adresse mail est invalide.");
            break;
          case "auth/weak-password":
            setErrorMessage("Le mot de passe est trop faible.");
            break;
          case "auth/wrong-password":
          case "auth/user-not-found":
            // Remplacement du texte d'erreur par défaut
            setErrorMessage("Votre email ou votre mot de passe est incorrect. Veuillez réessayer.");
            break;
          default:
            setErrorMessage("Votre email ou votre mot de passe est incorrect. Veuillez réessayer.");
        }
      } else {
        // Erreur générale
        setErrorMessage("Une erreur s'est produite. Veuillez réessayer.");
      }
    }
  };

  return (
    <div className='login'>
      <img src={logo} alt="logo" className='login-logo' />

      <div className="login-form">
        <h1>{signState}</h1>

        {/* Message d'erreur sous le h1 */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <form onSubmit={userAuth}> {/* Utilisation uniquement de onSubmit */}
          {signState === "S'inscrire" && (
            <input 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              type="text" 
              placeholder='Nom' 
              required 
            />
          )}

          <input 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            type="email" 
            placeholder='Email' 
            required 
          />

          <input 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            type="password" 
            placeholder='Mot de passe' 
            required 
          />

          <button type='submit'>{signState}</button> {/* On clique ici pour soumettre le formulaire */}

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Se souvenir de moi</label>
            </div>
            <p>Besoin d'aide ?</p>
          </div>
        </form>

        <div className="form-switch">
          {signState === "Se connecter" ? (
            <div className="inline1">
              <p>Nouveau sur Netflix ?</p> 
              <span onClick={() => setSignState("S'inscrire")}>S'inscrire</span>
            </div>
          ) : (
            <div className="inline2">
              <p>Déjà un compte Netflix ?</p> 
              <span onClick={() => setSignState("Se connecter")}>Se connecter</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
