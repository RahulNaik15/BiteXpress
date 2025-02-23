import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState("");
    

  return (
      <>
      <div className='navbar'>
              <img src={logo} alt="logo" style={{ width: "18vw", height: "9vh" }} ></img>
              <ul className='my-ul'>
                  <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
                  <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
                  <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-App</a>
                  <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</a>
              </ul>  
              
              <div className='nav-right'>
                  <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: "25px", color: "#49557e" }} /> 
                  <div className='navbar-basket'>
                      <FontAwesomeIcon icon={faBasketShopping} style={{ fontSize: "25px", color: "#49557e" }} />
                      <div className='dot'></div>
                  </div>
                  <button>Sign In</button>
              </div>
              

      </div>
      </>
  )
}

export default Navbar