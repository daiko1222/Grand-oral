import React, { useState } from 'react';
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {

  const [signState, setSignState] = useState('Se connecter');


  return (
    <div className='login'>

      <img src={logo} alt="logo" className='login-logo' />

      <div className="login-form">

        <h1> {signState} </h1>

        <form >

        {signState==="S'inscrire"?<input type="text" placeholder='Nom' />:<></>} 

          
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Mot de passe' />
          <button>{signState}</button>

          <div className="form-help">

            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Se souvenir de moi</label>
            </div>

            <p>Besoin d'aide ?</p>

          </div>

        </form>

        <div className="form-switch">

        {signState==="Se connecter"?<div className="inline1">
            <p>Nouveau sur Netflix ?</p> <span onClick={()=>{setSignState("S'inscrire")}}>S'inscrire</span>
          </div>:<div className="inline2">
            <p>Déjà un compte Netflix ?</p> <span onClick={()=>{setSignState("Se connecter")}}>Se connecter</span>
          </div>}


        </div>

      </div>

    </div>
  )
}

export default Login
