import React from 'react';
import './Header.css'; // Assuming you'll create a Header.css for specific styles

function Header() {
  return (
    <div id="header">
      <div className="container">
        <nav>
          <h1 className="logo">Portfolio</h1>
          <ul id="sidemenu">
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <i className="fas fa-times" onClick={() => {}}></i> {/* Add actual click handler */}
          </ul>
          <i className="fas fa-bars" onClick={() => {}}></i> {/* Add actual click handler */}
        </nav>
        <div className="header-text">
          <p></p> {/* This will be handled with state/animation */}
          <h1>Hi, I'm <span>Anshul Rana</span> <br />From India</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;