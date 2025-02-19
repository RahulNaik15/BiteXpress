import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
      <>
      <div className='navbar'>
              <img src={logo} alt="logo" style={{ width: "18vw", height: "9vh" }} ></img>
              <ul className='my-ul'>
                  <li>Home</li>
                  <li>Menu</li>
                  <li>Mobile-App</li>
                  <li>Contact Us</li>
              </ul>  
              
              <div className='nav-right'>
                  <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: "25px", color:"#49557e" }} /> 
                  <FontAwesomeIcon icon={faBasketShopping} style={{ fontSize: "25px", color:"#49557e" }} />
                  <button>Sign In</button>
              </div>
              

      </div>
      </>
  )
}

export default Navbar