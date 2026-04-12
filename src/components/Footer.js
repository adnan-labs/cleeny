import React from 'react';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Top Bar - Call Us + Subscribe */}
        <div className="top-bar">
          <div className="call-us">
            <div className="call-icon">
              <span>📞</span>
            </div>
            <div>
              <p className="call-label">Call Us Now</p>
              <p className="phone-number">+980 765 (546) 900</p>
            </div>
          </div>

          <div className="subscribe-section">
            <h3 className="subscribe-title">Subscribe Now</h3>
            <div className="subscribe-form">
              <input 
                type="email" 
                placeholder="Enter E-Mail*" 
                className="email-input"
              />
              <button className="subscribe-btn">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="main-footer">
          {/* Logo & Description */}
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">
                <img 
                  src="https://www.cleeny.online/images/footer-logo.png" 
                  alt="Cleeny Logo" 
                  className="logo-image"
                />
              </div>
              
            </div>
            <p className="brand-description">
              Competently repurpose forward conveniently target e-business multipurpose clean
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon">f</a>
              <a href="#" className="social-icon">𝕏</a>
              <a href="#" className="social-icon">in</a>
              <a href="#" className="social-icon">p</a>
            </div>
          </div>

          {/* Company Links */}
          <div className="footer-column">
            <h4 className="column-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Meet Our Team</a></li>
              <li><a href="#">Latest Blog</a></li>
            </ul>
          </div>

          {/* Latest Blog */}
          <div className="footer-column">
            <h4 className="column-title">Latest Blog</h4>
            <div className="blog-list">
              <div className="blog-item">
                <img 
                  src="https://www.cleeny.online/images/blog-thumb2.png" 
                  alt="Blog" 
                  className="blog-thumb"
                />
                <div>
                  <p className="blog-title-small">10 Most Popular Clean Tips for Housey</p>
                  <p className="blog-date">Nov 16, 2024</p>
                </div>
              </div>

              <div className="blog-item">
                <img 
                  src="https://www.cleeny.online/images/blog-thumb3.png" 
                  alt="Blog" 
                  className="blog-thumb"
                />
                <div>
                  <p className="blog-title-small">Floor cleeny and Washing New...</p>
                  <p className="blog-date">Nov 16, 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-column contact-column">
            <h4 className="column-title">Latest Blog</h4> {/* Note: This seems to be a typo in design, should be "Contact" */}
            
            <div className="contact-info">
              <div className="contact-row">
                <span className="contact-icon">📍</span>
                <div>
                  <p className="contact-label">Address</p>
                  <p className="contact-text">102/B Philosophy Market Road<br />California, USA</p>
                </div>
              </div>

              <div className="contact-row">
                <span className="contact-icon">📞</span>
                <div>
                  <p className="contact-label">Call Us</p>
                  <p className="contact-text">+880 123 (4567) 890</p>
                </div>
              </div>

              <div className="contact-row">
                <span className="contact-icon">✉️</span>
                <div>
                  <p className="contact-label">Email</p>
                  <p className="contact-text">example@yahoo.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="copyright-bar">
          <p className="copyright-text">
            © Copyrights 2024 Cleeny All rights reserved by <span className="highlight">Dream IT</span>
          </p>
          
          <button className="scroll-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}