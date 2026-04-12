import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import '../styles/navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <div className="topbar">
        <div className="topbar-left">
          <span><FaMapMarkerAlt /> 102/B New Market, Sandigo-USA</span>
          <span><FaEnvelope /> example@gmail.com</span>
        </div>
        <div className="topbar-right">
          <div className="topbar-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaPinterestP /></a>
          </div>
          <a href="tel:+9802344567" className="topbar-call"><FaPhone /> +980 234 4567</a>
        </div>
      </div>
      <nav className="navbar">
        <div className="navbar-inner">
          <a href="#" className="navbar-logo">🧹 Cleeny</a>
          <ul className={'navbar-links' + (menuOpen ? ' open' : '')}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div className="navbar-actions">
            <a href="#" className="btn-quote">Get Free Quote</a>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;