import React, { useState } from 'react'
import './loginpopup.css'
import { cross } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {

    const[currState,setCurrState]=useState("Login")

  return (
    <div className='login-popup'>
          <form className='login-popup-container'>
              <div className='login-popup-title'>
                  <h2>{currState}</h2>
                  <img onClick={()=>setShowLogin(false)} src={cross} alt=""></img>
              </div>
              <div className='login-popup-input'>
                  {currState==="Login"?<></>:<input type="text" placeholder='Full Name' required></input>}
                  <input type="email" placeholder='Email' required></input>
                  <input type="password" placeholder='Password' required></input>
              </div>
              <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
              <div className='login-popup-condition'>
                  <input type='checkbox' required></input>
                  <p>By continuing, I agree to the terms of use and privacy policy</p>
              </div>
              {currState === "Login" ? <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p> :
              <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>}
              
              
          </form>   
    </div>
  )
}

export default LoginPopup