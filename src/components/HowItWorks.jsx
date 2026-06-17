import React from 'react';
import { strings } from '../data/strings';

const s = strings.en;

export default function HowItWorks() {
  return (
    <section className="how-it-works" aria-labelledby="hiw-heading">
      <div className="container">
        <h2 id="hiw-heading" className="section-heading">{s.howItWorksHeading}</h2>
        <div className="steps-grid">
          {s.steps.map((step, i) => (
            <div key={i} className="step-card">
              <div className="step-number" aria-hidden="true">{i + 1}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
