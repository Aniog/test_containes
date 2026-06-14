import React from 'react';

const STEPS = [
  { num: 1, titleKey: 'step1Title', bodyKey: 'step1Body' },
  { num: 2, titleKey: 'step2Title', bodyKey: 'step2Body' },
  { num: 3, titleKey: 'step3Title', bodyKey: 'step3Body' },
];

export default function HowItWorks({ s }) {
  return (
    <section className="strk-section strk-section-soft" aria-labelledby="how-heading">
      <div className="strk-container">
        <header className="strk-section-head">
          <h2 id="how-heading" className="strk-h2">
            {s.howItWorks.heading}
          </h2>
          <p className="strk-section-sub">{s.howItWorks.sub}</p>
        </header>
        <ol className="strk-steps" role="list">
          {STEPS.map((step) => (
            <li key={step.num} className="strk-step">
              <span className="strk-step-num" aria-hidden="true">
                {step.num}
              </span>
              <span className="strk-step-title">{s.howItWorks[step.titleKey]}</span>
              <span className="strk-step-body">{s.howItWorks[step.bodyKey]}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
