import React from 'react';
import "../styles/services.css";

const services = [
  {
    id: 1,
    title: "Post-Event Cleanup",
    icon: "🏠",
    image: "https://www.cleeny.online/images/service-img2.png",
    features: [
      "Fast turnaround for homes and venues",
      "Waste collection and surface reset"
    ],
    bgColor: "bg-yellow-500"
  },
  {
    id: 2,
    title: "Office Cleaning",
    icon: "🏢",
    image: "https://www.cleeny.online/images/service-img.png",
    features: [
      "Desk, floor, and common area cleaning",
      "Flexible schedules for business hours"
    ],
    bgColor: "bg-blue-600"
  },
  {
    id: 3,
    title: "Home Cleaning",
    icon: "🧹",
    image: "https://www.cleeny.online/images/service-img.png",
    features: [
      "Kitchen, bathroom & deep cleaning",
      "Safe products & eco-friendly environments"
    ],
    bgColor: "bg-blue-600"
  }
];

const ServiceCards = () => {
  return (
    <div className="service-cards-container" id="services">
      <div className="cards-wrapper">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="card-image">
              <img src={service.image} alt={service.title} />
              <div className={`icon-circle ${service.bgColor}`}>
                <span className="text-3xl">{service.icon}</span>
              </div>
            </div>

            <div className="card-content">
              <h3 className="card-title">{service.title}</h3>

              <ul className="features-list">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <span className="checkmark">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* ✅ FIXED LINK */}
              <a href="/services" className="view-service-btn">
                View Service →
              </a>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;