import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'; 
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import Player from './pages/Player/Player.jsx';
import './App.css'; // Ajout du CSS pour la modal
import TVShows from './pages/SerieTV/SerieTV.jsx';
import Tendances from './pages/Tendances/Tendances.jsx';
import Films from './pages/Films/Films.jsx';
import Langues from './pages/Langues/Langues.jsx';


const App = () => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedMovieId, setSelectedMovieId] = useState(null); // Stocke l'ID du film sélectionné

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home setSelectedMovieId={setSelectedMovieId} />} />
        <Route path="/login" element={<Login />} />
        
        

        
        <Route path="/serietv" element={<TVShows/>} />
        <Route path="/films" element={<Films />} />
        <Route path="/tendances" element={<Tendances />} />
        <Route path="/langues" element={<Langues />} />


      </Routes>

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

export default App;
