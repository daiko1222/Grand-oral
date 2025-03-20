import React, { useEffect, useState } from 'react'; 
import './TitleCards.css';
import { useRef } from 'react';

const TitleCards = ({ title, category, setSelectedMovieId }) => {

  const cardsRef = useRef();
const handleWheel = (event) => {
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(() => {
  cardsRef.current.addEventListener('wheel',handleWheel);
}, []);

  const [apiData, setApiData] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDQzOWUwZWM5ZjY2OTAwNWY1Yzg1MmUwYjVjMDZlYiIsIm5iZiI6MTc0MjM0MTY4OC45NTYsInN1YiI6IjY3ZGEwNjM4NmI0OTAyNWViOGExZGMyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6mp39VvrH4PMNiK4tXIpsK7F1I78BX63lKYX3uF0xBo',
    },
  };

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${category || "now_playing"}?language=fr-FR&page=1`,
          options
        );
        const data = await response.json();

        if (data.results) {
          setApiData(data.results.filter((movie) => movie.backdrop_path));
        }
      } catch (err) {
        console.error("Erreur API :", err);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className="title-cards">
      <h2>{title}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card) => (
          <div key={card.id} className="card" onClick={() => setSelectedMovieId(card.id)}>
            <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.original_title} />
            <p>{card.original_title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
