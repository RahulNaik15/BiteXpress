import React from 'react'
import './footer.css'
import logo2 from "../../assets/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faXTwitter, faLinkedinIn,faInstagram} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
      <div className='footer' id='footer'>
          <div className='footer-content'>
              <div className='footer-content-left'>
                  <img src={logo2} alt="logo" style={{ width: "18vw", height: "9vh" }} ></img>
                  <p>Simplify your life with our app! Stay updated with the latest features and enjoy effortless services at your fingertips. Download now for exclusive benefits and hassle-free access!</p>
                  <div className='footer-social-icons'>
                      <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "28px" }}/>
                      <FontAwesomeIcon icon={faXTwitter} style={{ fontSize: "28px" }}/>
                      <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: "28px" }}/>
                      <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "28px" }}/>
                  </div>
              </div>
              <div className='footer-content-center'>
                  <h2>Company</h2>
                  <ul>
                      <li>Home</li>
                      <li>About Us</li>
                      <li>Delivery</li>
                      <li>Privacy Policy</li>
                  </ul>
              </div>
              <div className='footer-content-right'>
                  <h2>Contact Us</h2>
                  <ul>
                      <li>+91-212-404-7821</li>
                      <li>contact@bitexpress.com</li>
                  </ul>
              </div>
              
          </div>
              <hr></hr>
              <p className='footer-copyright'>Copyright 2025 @ BiteXpress.com - All Right Reserved.</p>       
          </div>
  )
}

export default Footer