import React from 'react';
import strings from '@/data/strings.en.js';

export default function HowItWorks() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center', marginBlockEnd: '40px' }}>
          {strings.howHeading}
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px',
            textAlign: 'center',
          }}
          className="how-grid"
        >
          {strings.steps.map((step, i) => (
            <div key={i}>
              <div className="step-circle" style={{ marginInline: 'auto' }}>
                {i + 1}
              </div>
              <h3 style={{ fontSize: '14px', marginBlockEnd: '8px', color: 'var(--color-hero-dark)' }}>
                {step.title}
              </h3>
              <p style={{ color: 'var(--color-body)', fontSize: '14px', margin: 0 }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .how-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </section>
  );
}