import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from  '../../assets/instagram_icon.png'
import facebook_icon from  '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={facebook_icon} alt="" />

      </div>

        <ul>
          <li>Audio description</li>
          <li>Centre d'aide</li>
          <li>Cartes cadeaux</li>
          <li>Presse</li>
          <li>Relations investisseurs</li>
          <li>Recrutement</li>
          <li>Boutique Netflix</li>
          <li>Conditions d'utilisation</li>
          <li>Confidentialité</li>
          <li>Informations légales</li>
          <li>Préférances de cookies</li>
          <li>Mentions légales</li>
          <li>Nous contacter</li>
          <li>Choix liés à la pub</li>
          
        </ul>
        <p className='copyright-text'>© 1997-2025 Netflix, Inc.</p>

    </div>
  )
}

export default Footer
