import React, { useEffect, useRef, useState } from 'react'; 
import './TitleCards.css';
import { Link } from 'react-router-dom';

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDQzOWUwZWM5ZjY2OTAwNWY1Yzg1MmUwYjVjMDZlYiIsIm5iZiI6MTc0MjM0MTY4OC45NTYsInN1YiI6IjY3ZGEwNjM4NmI0OTAyNWViOGExZGMyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6mp39VvrH4PMNiK4tXIpsK7F1I78BX63lKYX3uF0xBo',
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${category || "now_playing"}?language=fr-FR&page=1`,
          options
        );
        const data = await response.json();

        console.log("Données reçues :", data); // Vérifier la réponse de l'API

        if (data.results) {
          // Filtrer les films qui ont un `backdrop_path` valide
          const validMovies = data.results.filter(
            (movie) => movie.backdrop_path // S'assurer que `backdrop_path` existe
          );
          setApiData(validMovies);
        } else {
          console.error("Aucun résultat trouvé");
        }
      } catch (err) {
        console.error("Erreur API :", err);
      }
    };

    fetchData();

    if (cardsRef.current) {
      cardsRef.current.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (cardsRef.current) {
        cardsRef.current.removeEventListener('wheel', handleWheel);
      }
    };
  }, [category]);

  return (
    <div className="title-cards">
      <h2>{title || 'Les plus populaires'}</h2>

      <div className="card-list" ref={cardsRef}>
        {apiData.length > 0 ? (
          apiData.map((card) => (
            // Vérifier si le film a une image de fond (backdrop_path) avant d'afficher
            <Link to={`/player/${card.id}`} className="card" key={card.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                alt={card.original_title}
              />
              <p>{card.original_title}</p>
            </Link>
          ))
        ) : (
          <p>Aucun film disponible avec une image de fond.</p>
        )}
      </div>
    </div>
  );
};

export default TitleCards;
