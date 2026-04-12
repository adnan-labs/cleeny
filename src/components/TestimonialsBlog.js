import React from 'react';
import '../styles/testimonialsBlog.css';

const testimonials = [
  {
    id: 1,
    name: "Jhon D. Alexon",
    role: "Web Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    quote: "Competently cultivate worldwide e-tailers through to principles professionally engineer high-payoff deliverables without exact Rapidiously network effective"
  },
  {
    id: 2,
    name: "Anjelina Watson",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    quote: "Competently cultivate worldwide e-tailers through to principles professionally engineer high-payoff deliverables without exact Rapidiously network effective"
  }
];

const blogPosts = [
  {
    id: 1,
    date: "02",
    month: "MAY",
    image: "https://www.cleeny.online/images/blog-thumb.png",
    title: "Newest Cleaning Tools for House 2024",
    description: "Competently repurpose forward benefits conveniently target e-business",
    readMore: "#"
  },
  {
    id: 2,
    date: "12",
    month: "MAY",
    image: "https://www.cleeny.online/images/blog-thumb2.png",
    title: "10 Most Popular Cleaning Tips for House",
    description: "Competently repurpose forward benefits conveniently target e-business",
    readMore: "#"
  },
  {
    id: 3,
    date: "25",
    month: "MAY",
    image: "https://www.cleeny.online/images/blog-thumb3.png",
    title: "Floor Cleaning Use New Equipment",
    description: "Competently repurpose forward benefits conveniently target e-business",
    readMore: "#"
  }
];

export default function TestimonialsBlog() {
  return (
    <div className="testimonials-blog-section">

      {/* Testimonials Section */}
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="section-badge">TESTIMONIALS</span>
          <h2 className="section-title">Our Customer's Feedback</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="avatar"
                />
                <div>
                  <h4 className="name">{testimonial.name}</h4>
                  <p className="role">{testimonial.role}</p>
                </div>
                <div className="rating">
                  {'★'.repeat(testimonial.rating)}
                </div>
              </div>

              <div className="quote-icon">“ ”</div>

              <p className="testimonial-text">
                {testimonial.quote}
              </p>

              <div className="service-quality">Service Quality</div>
            </div>
          ))}
        </div>

        
        <div className="dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>

      {/* Latest Blog Section */}
      <div className="blog-section">
        <div className="blog-header">
          <div>
            <span className="blog-subtitle">LATEST BLOG</span>
            <h2 className="blog-title">
              Learn about our Latest<br />
              News from Blog
            </h2>
          </div>
          <button className="view-all-btn">
            Veiw All Blog →
          </button>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-image-container">
                <img src={post.image} alt={post.title} className="blog-image" />
                <div className="date-badge">
                  <span className="date">{post.date}</span>
                  <span className="month">{post.month}</span>
                </div>
              </div>

              <div className="blog-content">
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-description">{post.description}</p>
                <a href={post.readMore} className="read-more">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}