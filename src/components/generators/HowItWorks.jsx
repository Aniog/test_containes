



import React from 'react';
import strings from '@/data/strings.en.js';

const HowItWorks = () => {
  return (
    <section className="section how-it-works">
      <div className="section-container">
        <h2 className="section-heading">{strings.howItWorksHeading}</h2>
        <div className="steps-grid">
          {strings.steps.map((step, i) => (
            <div key={i} className="step-card">
              <div className="step-number" aria-hidden="true">
                <span>{i + 1}</span>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;


