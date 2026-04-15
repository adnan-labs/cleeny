import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import '../styles/navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false); // close mobile menu after click
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="topbar">
        <div className="topbar-left">
          <span><FaMapMarkerAlt /> 102/B New Market, Sandigo-USA</span>
          <span><FaEnvelope /> example@gmail.com</span>
        </div>
        <div className="topbar-right">
          <div className="topbar-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com"  target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><FaPinterestP /></a>
          </div>
          <a href="tel:+9802344567" className="topbar-call"><FaPhone /> +980 234 4567</a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar-inner">
          <a href="/" className="navbar-logo">🧹 Cleeny</a>

          <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
            <li><button onClick={() => scrollToSection('home')}>Home</button></li>
            <li><button onClick={() => scrollToSection('about')}>About</button></li>
            <li><button onClick={() => scrollToSection('services')}>Service</button></li>
            <li><button onClick={() => scrollToSection('portfolio')}>Pages</button></li>
            <li><button onClick={() => scrollToSection('blog')}>Blog</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>

          <div className="navbar-actions">
            <button onClick={() => scrollToSection('contact')} className="btn-quote">Get Free Quote</button>
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