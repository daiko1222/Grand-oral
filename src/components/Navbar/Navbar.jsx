import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'

const Navbar = () => {
    return (
    <div className='navbar'>


      <div className="navbar-left"><img src={logo} alt="Logo Netflix" />
      <ul>
        <li>Home</li>
        <li>Séries TV</li>
        <li>Films</li>
        <li>Nouveautés et Tendances</li>
        <li>Explorer par langue</li>
      </ul>
      </div>


      <div className="navbar-right">
        <img src={search_icon} alt="Icone de recherche" />
        <p>Children</p>
        <img src={bell_icon} alt=" Icone de notification" />

        <div className="navbar-profile">
        <img src={profile_img} alt=" Icone de profile" className='profile'/>
        <img src={caret_icon} alt=" Icone de menu déroulant" />

        <div className="dropdown">
            <p>Se déconnecter </p>


        </div>


        </div>
        </div>
      


    </div >
  )
}

export default Navbar
