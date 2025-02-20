import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";
import { useState } from 'react';

const Navbar = () => {

    const [menu, setMenu] = useState("");
    

  return (
      <>
      <div className='navbar'>
              <img src={logo} alt="logo" style={{ width: "18vw", height: "9vh" }} ></img>
              <ul className='my-ul'>
                  <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
                  <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
                  <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-App</li>
                  <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</li>
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