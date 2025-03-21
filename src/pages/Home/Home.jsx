import React, { useState } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import hero_banner from '../../assets/hero_banner.webp';
import hero_title from  '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Player from '../../pages/Player/Player'; // Importation du composant Player

const Home = ({ setSelectedMovieId }) => {
  const [showModal, setShowModal] = useState(false); // Contrôle l'affichage du modal
  const [movieId, setMovieId] = useState(null); // L'ID du film sélectionné pour le modal

  // Ouvrir le modal avec un film spécifique
  const openModal = (id) => {
    setMovieId(id);
    setShowModal(true);
  };

  return (
    <div className='home'>
      <Navbar />

      <div className="hero">
        <img src={hero_banner} alt="Bannière" className='banner-img'/>

        <div className="hero-caption">
          <img src={hero_title} alt="Titre" className='caption-img'/>
          <p>
            Après avoir découvert ce qui le lie à un ancien ordre secret, un jeune homme de l'Istanbul moderne
            entreprend de sauver la ville des griffes d'un ennemi immortel.
          </p>

          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt=""/> Regarder </button>
            <button className='btn dark-btn' onClick={() => openModal(123)}> {/* ID d'exemple */}
              <img src={info_icon} alt=""/> Plus d'informations
            </button>
          </div>
          <TitleCards title="Nos suggestions" category="now_playing" setSelectedMovieId={setSelectedMovieId} />
        </div>
      </div>

      <div className="more-cards">
        <TitleCards title="Blockbuster Films" category="top_rated" setSelectedMovieId={setSelectedMovieId} />
        <TitleCards title="Exclusivité Netflix" category="popular" setSelectedMovieId={setSelectedMovieId} />
        <TitleCards title="À venir" category="upcoming" setSelectedMovieId={setSelectedMovieId} />
        <TitleCards title="On pense que vous allez adorer ..." category="now_playing" setSelectedMovieId={setSelectedMovieId} />
      </div>

      {/* Affichage conditionnel du modal si showModal est vrai */}
      {showModal && <Player movieId={movieId} setShowModal={setShowModal} />}

      <Footer />
    </div>
  );
};

export default Home;
