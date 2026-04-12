import React from 'react';
import '../styles/pricing.css';

const pricingPlans = [
  {
    id: 1,
    price: 39,
    plan: "Starter Plans",
    popular: false,
    features: [
      "15% OFF All Service",
      "Floor Wash & cleeny",
      "Maintaince Equipment",
      "Schedule Working",
      "24/7 Supports"
    ]
  },
  {
    id: 2,
    price: 59,
    plan: "Standard Plans",
    popular: true,
    features: [
      "15% OFF All Service",
      "Floor Wash & cleeny",
      "Maintaince Equipment",
      "Schedule Working",
      "24/7 Supports"
    ]
  },
  {
    id: 3,
    price: 89,
    plan: "Premium Plans",
    popular: false,
    features: [
      "15% OFF All Service",
      "Floor Wash & cleeny",
      "Maintaince Equipment",
      "Schedule Working",
      "24/7 Supports"
    ]
  }
];

export default function Pricing() {
  return (
    <div className="pricing-section">
      <div className="pricing-container">

        {/* Hero Banner */}
        <div className="hero-banner">
          <div className="banner-content">
            <h2 className="banner-title">
              Please Call Us to Take the<br />
              Extraordinary Service!
            </h2>
            <button className="call-btn">
              📞 Call :123 (4567) 890
            </button>
          </div>
          <div className="banner-image">
            <img 
              src="https://www.cleeny.online/images/address-thumb.png" 
              alt="Cleaning Service Man" 
            />
          </div>
        </div>

        {/* Pricing Header */}
        <div className="pricing-header">
          <p className="section-subtitle">PRICING PLAN</p>
          <h1 className="section-title">Affordable Pricing Plan</h1>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              <div className="price-tag">
                <span className="dollar">$</span>
                <span className="price">{plan.price}</span>
                <span className="monthly">Monthly</span>
              </div>

              <div className="plan-name">{plan.plan}</div>

              <ul className="features-list">
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <span className="check">✔</span> {feature}
                  </li>
                ))}
              </ul>

              <button className="choose-btn">
                Choose Plan →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}