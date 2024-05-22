import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/header.css';

const handleImageClick = () => {
  console.log('Image clicked');
  window.location.href = "/";
};

const Header = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <nav className="navbar navbar-expand-lg transparent-navbar">
      <img
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="logo"
        src='./img/logo-colors.png'
        alt='logo'
        onClick={handleImageClick} />


      <div className="container-fluid">
        <Link to="/" aria-current="page" className="navbar-brand"></Link>



        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className={`nav-links ${isHovering ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

          </ul>
        </div>
      </div>

    </nav>
  );
}

export default Header;
