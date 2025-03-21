import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const navRef = useRef();


  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark')
      }
      else {
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])

    return (

    <div ref={navRef} className='navbar'>


<div  className="navbar-left"><img src={logo} alt="Logo Netflix" />
      <ul>
      <li><Link to="/" className='header-a'>Accueil</Link></li>
      <li><Link to="/serietv" className='header-a'>Séries TV</Link></li>
      <li><Link to="/films" className='header-a'>Films</Link></li>
      <li><Link to="/tendances" className='header-a'>Nouveautés et tendances</Link></li>
      <li><Link to="/langues" className='header-a'>Explorer par langue</Link></li>
        
      </ul>
      </div>


      <div className="navbar-right">
        <img src={search_icon} alt="Icone de recherche" />
        <p>Utilisateur</p>
        <img src={bell_icon} alt=" Icone de notification" />

        <div className="navbar-profile">
        <img src={profile_img} alt=" Icone de profile" className='profile'/>
        <img src={caret_icon} alt=" Icone de menu déroulant" />

        <div className="dropdown">
            <Link to="/Login" className='header-a'><p>Se déconnecter </p></Link>


        </div>


        </div>
        </div>
      


    </div >
  )
}

export default Navbar
