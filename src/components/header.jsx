import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/header.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleImageClick = () => {
    setIsVisible(!isVisible);
  };
  const handleLinkClick = () => {
    setIsVisible(false); // Hide links when a link is clicked
  };



  return (
    <nav className="navbar navbar-expand-lg transparent-navbar">
      <Link className="nav-link" to="/"  >      <img

        className="logo"
        src='./img/logo-colors.png'
        alt='logo'
        onClick={handleImageClick}
      /></Link>



      <div className="container-fluid">


        <div className={`nav-links ${isVisible ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleLinkClick} >About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio" onClick={handleLinkClick} >Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleLinkClick} >Contact</Link>
            </li>

          </ul>
        </div>
      </div>

    </nav>
  );
}

export default Header;
