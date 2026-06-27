import React from 'react';
import strings from '@/data/strings.en.js';

const BenefitIcons = [
  <svg key="0" className="benefit-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10 16l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="1" className="benefit-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect x="6" y="5" width="20" height="22" rx="3" stroke="currentColor" strokeWidth="1.5" />
    <line x1="13" y1="22" x2="19" y2="22" stroke="currentColor" strokeWidth="1.5" />
  </svg>,
  <svg key="2" className="benefit-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M16 4v24M8 16h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
  </svg>,
];

export default function WhyStrikingly() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-light-bg)' }}>
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center', marginBlockEnd: '40px' }}>
          {strings.whyHeading}
        </h2>
        <div className="grid-3">
          {strings.benefits.map((benefit, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '20px' }}>
              {BenefitIcons[i]}
              <h3 style={{ fontSize: '14px', marginBlockEnd: '8px', color: 'var(--color-hero-dark)' }}>
                {benefit.title}
              </h3>
              <p style={{ color: 'var(--color-body)', fontSize: '14px', margin: 0 }}>
                {benefit.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}