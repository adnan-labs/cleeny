import React from 'react';
import './WorkingProcess.css';

const WorkingProcess: React.FC = () => {
  const steps = [
    {
      id: 1,
      icon: "🔍",
      title: "Find Us Online",
      description: "Easily discover our cleaning services through our website or online platforms.",
    },
    {
      id: 2,
      icon: "🤝",
      title: "Choose Services",
      description: "Select the perfect cleaning package that fits your home or office needs.",
    },
    {
      id: 3,
      icon: "📅",
      title: "Book Appointment",
      description: "Choose a convenient date and time. Our team will arrive on schedule.",
    },
  ];

  return (
    <section className="working-process">
      {/* Decorative background icons */}
      <div className="decor-left">🧤</div>
      <div className="decor-right">🧹</div>

      <div className="container">
        {/* Header */}
        <div className="header">
          <p className="subtitle">WORKING PROCESS</p>
          <h2 className="main-title">Easy Steps to Works</h2>
          <p className="description">
            Competently repurpose go forward benefits without goal-oriented ROI 
            conveniently target e-business opportunities whereas
          </p>
        </div>

        {/* Steps */}
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={step.id} className="step-item">
              <div className="step-card">
                {/* Icon + Number */}
                <div className="icon-wrapper">
                  <div className="icon-circle">
                    {step.icon}
                  </div>
                  <div className="step-number">{step.id}</div>
                </div>

                {/* Content */}
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
              </div>

              {/* Underline */}
              <div className="step-underline"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Side Images */}
      <div className="side-image left-image">
        <img 
          src="https://images.unsplash.com/photo-1584622781564-1d9870e8f1a1?w=180" 
          alt="Cleaning glove with brush" 
        />
      </div>

      <div className="side-image right-image">
        <img 
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=180" 
          alt="Cleaner with broom" 
        />
      </div>
    </section>
  );
};

export default WorkingProcess;