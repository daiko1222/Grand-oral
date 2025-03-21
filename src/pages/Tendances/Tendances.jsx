import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import hero_banner from '../../assets/hero_banner.webp';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Player from '../Player/Player';

const Tendances = () => {
    const [selectedMovieId, setSelectedMovieId] = useState(null); // Déclaration de l'état de l'ID du film sélectionné

  return (
    <div className="tvshows">
      <Navbar />

      {/* Hero Section */}
      <div className="hero">
        <img src={hero_banner} alt="Bannière" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="Titre" className="caption-img" />
          <p>
            Après avoir découvert ce qui le lie à un ancien ordre secret, un jeune homme de l'Istanbul moderne
            entreprend de sauver la ville des griffes d'un ennemi immortel.
          </p>

          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="Regarder" /> Regarder
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="Info" /> Plus d'informations
            </button>
          </div>

          <TitleCards title="Nos suggestions" category="top_rated" setSelectedMovieId={setSelectedMovieId} />
        </div>
      </div>

      {/* Sections de séries */}
      <div className="more-cards">
        <TitleCards title="Nos classiques" category="top_rated" setSelectedMovieId={setSelectedMovieId} />
        <TitleCards title="Nos nouveautés" category="top_rated" setSelectedMovieId={setSelectedMovieId} />
        <TitleCards title="Nos spéciaux" category="top_rated" setSelectedMovieId={setSelectedMovieId} />
      </div>

      <Footer />

      {/* Affichage du Player en superposition */}
      {selectedMovieId && (
        <div className="modal-overlay" onClick={() => setSelectedMovieId(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Player movieId={selectedMovieId} closeModal={() => setSelectedMovieId(null)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Tendances;