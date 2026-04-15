import React from 'react';
import {  FaArrowRight, FaHome, FaTools, FaCheckCircle, FaPlay, FaTrophy } from 'react-icons/fa';
import { MdWindow } from 'react-icons/md';
import '../styles/hero.css';

function Hero() {
  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div>
      <section className="hero" id="home">
        <div className="hero-inner">
          <div className="hero-content">
            <span className="hero-tag">Best Cleeny Agency</span>
            <h1 className="hero-title">
              Need Cleeny?<br />
              Call <span className="hero-accent">US TODAY</span>
            </h1>
            <p className="hero-desc">
              Need Clean of your home or office? Just Feel Free to Contact us. 
              We try to Help you as soon as possible.
            </p>
            
            {/* Fixed: Changed <a href="/"> to button with proper action */}
            <button 
              onClick={() => scrollToSection('contact')} 
              className="btn-hero"
            >
              Get Started Now <FaArrowRight />
            </button>
            
          </div>

          <div className="hero-visual">
            
            <div className="hero-circle">
              <img 
                src="https://www.cleeny.online/images/hero-thumb.png" 
                alt="Professional Cleaner" 
              />
            </div>
            <span className="star s1">✦</span>
            <span className="star s2">✦</span>
          </div>
        </div>

        {/* Features Section */}
        <div className="hero-features">
          <div className="feature-card">
            <div className="feature-icon"><FaHome /></div>
            <div>
              <h4>House Cleeny</h4>
              <p>Competently repurpose clean conveniently target</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><MdWindow /></div>
            <div>
              <h4>Window Cleeny</h4>
              <p>Competently repurpose clean conveniently target</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><FaTools /></div>
            <div>
              <h4>Instrument</h4>
              <p>Competently repurpose clean conveniently target</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-inner">
          <div className="about-images">
            <div className="about-img-main">
              <img 
                src="https://www.cleeny.online/images/about-thumb.png" 
                alt="Cleaning Service" 
              />
              <button className="about-play">
                <FaPlay />
              </button>
            </div>
           
            <div className="about-badge">
              <FaTrophy className="trophy-icon" />
              <div>
                <strong>12+</strong>
                <span>Years Experience</span>
              </div>
            </div>
          </div>

          <div className="about-content">
            <span className="section-tag">About Us</span>
            <h2 className="section-title">
              Making Your House Clean<br />
              For Looks As a New
            </h2>
            <p className="about-desc">
              Competently repurpose go forward benefits without goal-oriented ROI 
              conveniently target e-business opportunities whereas parallel task 
              multimedia based web services.
            </p>
            <ul className="about-list">
              <li>
                <FaCheckCircle className="check-icon" /> 
                Cleeny Your Home or Office
              </li>
              <li>
                <FaCheckCircle className="check-icon" /> 
                24/7 Emergency Quality Services
              </li>
              <li>
                <FaCheckCircle className="check-icon" /> 
                Online Booking System available
              </li>
            </ul>
            
            {/* Fixed: Changed <a href="/"> to button */}
            <button 
              onClick={() => scrollToSection('about')} 
              className="btn-primary"
            >
              More About Us <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;