import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
    language: "" // Champ pour la langue
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDQzOWUwZWM5ZjY2OTAwNWY1Yzg1MmUwYjVjMDZlYiIsIm5iZiI6MTc0MjM0MTY4OC45NTYsInN1YiI6IjY3ZGEwNjM4NmI0OTAyNWViOGExZGMyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6mp39VvrH4PMNiK4tXIpsK7F1I78BX63lKYX3uF0xBo'
    }
  };

  useEffect(() => {
    // Fonction pour récupérer les vidéos
    const fetchVideos = async () => {
      try {
        // Tenter avec la langue par défaut 'fr-FR'
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=fr-FR`, options);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          setApiData({
            ...data.results[0], // Récupérer toutes les données du premier résultat
            language: "fr-FR" // Définir la langue comme français
          });
        } else {
          console.log('Aucun trailer trouvé en français, tentative avec la version anglaise');

          // Si aucune vidéo n'a été trouvée, essayer avec la version anglaise 'en-US'
          const fallbackResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);
          const fallbackData = await fallbackResponse.json();

          if (fallbackData.results && fallbackData.results.length > 0) {
            setApiData({
              ...fallbackData.results[0], // Récupérer toutes les données du premier résultat
              language: "en-US" // Définir la langue comme anglais
            });
          } else {
            console.error('Aucun trailer disponible, même en anglais');
            setApiData({
              key: "",
              name: "Nom inconnu",
              published_at: "Date inconnue",
              type: "Type inconnu",
              language: "Inconnu"
            });
          }
        }
      } catch (err) {
        console.error('Erreur lors de la récupération des vidéos:', err);
        setApiData({
          key: "",
          name: "Nom inconnu",
          published_at: "Date inconnue",
          type: "Type inconnu",
          language: "Inconnu"
        });
      }
    };

    fetchVideos();
  }, [id]);

  // Fonction pour afficher la langue
  const getLanguage = (langCode) => {
    // On vérifie la langue en fonction de l'URL de fetch
    if (langCode === "fr-FR") {
      return "Français";
    } else if (langCode === "en-US") {
      return "Anglais";
    }
    return "Langue inconnue";
  };

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="Back" onClick={() => navigate(-1)} />
      {apiData.key ? (
        <iframe
          width="90%"
          height="90%"
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title="Trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <h2>Aucun trailer disponible</h2>
      )}

      <div className="player-info">
        <p>{apiData.published_at ? apiData.published_at.slice(0, 10) : "Date inconnue"}</p>
        <p>{apiData.name || "Nom inconnu"}</p>
        <p>{apiData.type || "Type inconnu"}</p>
        <p>Langue: {getLanguage(apiData.language)}</p> {/* Affichage de la langue */}
      </div>
    </div>
  );
};

export default Player;
