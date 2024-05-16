import React from 'react';
import { Link } from "react-router-dom";
import '../styles/header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg transparent-navbar">
      <img className="logo" src='./img/logo-gimp.png' alt='logo'  />
      <div className="container-fluid">

        <Link to="/" className="navbar-brand"></Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
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
