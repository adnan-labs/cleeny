import React, { useState } from 'react';
import '../styles/portfolio.css';

const portfolioItems = [
  {
    id: 1,
    image: "https://www.cleeny.online/images/portfolio-img.png",
    title: "Office Cleaning",
    location: "Mumbai, India",
    category: "Commercial",
  },
  {
    id: 2,
    image: "https://www.cleeny.online/images/portfolio-img2.png",
    title: "House Floor Cleaning",
    location: "Sandigo, USA",
    category: "Cleaning",
    showOverlay: true,
  },
  {
    id: 3,
    image: "https://www.cleeny.online/images/portfolio-img3.png",
    title: "Deep Floor Cleaning",
    location: "Mumbai, India",
    category: "Residential",
  },
];

export default function Portfolio() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="portfolio-section">
      <div className="portfolio-container">
        {/* Header */}
        <div className="portfolio-header">
          <div>
            <p className="portfolio-subtitle">CLEENY PORTFOLIO</p>
            <h1 className="portfolio-title">
              Latest cleeny Portfolio<br />
              from Work Galary
            </h1>
          </div>

          <button className="view-all-btn">
            View All Work →
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid" id="portfolio">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`portfolio-card ${hovered === item.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="portfolio-image"
              />

              {/* Blue Overlay Card - only for middle item */}
              {item.showOverlay && (
                <div className="overlay-card">
                  <div className="overlay-location">
                    📍 {item.location}
                  </div>
                  <h3 className="overlay-title">{item.title}</h3>
                  <div className="overlay-arrow">↗</div>
                </div>
              )}

              {/* Category Badge */}
              {!item.showOverlay && (
                <div className="category-badge">{item.category}</div>
              )}

              {/* Bottom Info for normal cards */}
              {!item.showOverlay && (
                <div className="card-info">
                  <h3>{item.title}</h3>
                  <p>{item.location}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="pagination-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
}