import React from 'react';
import { strings } from '../data/strings';

const s = strings.en;

const whyIcons = [
  // Lightning bolt
  <svg key="0" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M18 4 L8 18 L16 18 L14 28 L24 14 L16 14 Z" fill="#8159BB" />
  </svg>,
  // Mobile phone
  <svg key="1" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect x="8" y="4" width="16" height="24" rx="3" stroke="#8159BB" strokeWidth="2" />
    <line x1="14" y1="24" x2="18" y2="24" stroke="#8159BB" strokeWidth="2" />
  </svg>,
  // Gift/free
  <svg key="2" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect x="6" y="14" width="20" height="14" rx="2" stroke="#8159BB" strokeWidth="2" />
    <line x1="16" y1="14" x2="16" y2="28" stroke="#8159BB" strokeWidth="2" />
    <path d="M16 14 C16 10 10 8 10 12 C10 14 16 14 16 14" stroke="#8159BB" strokeWidth="2" fill="none" />
    <path d="M16 14 C16 10 22 8 22 12 C22 14 16 14 16 14" stroke="#8159BB" strokeWidth="2" fill="none" />
  </svg>,
];

export default function WhyStrikingly() {
  return (
    <section className="why" aria-labelledby="why-heading">
      <div className="container">
        <h2 id="why-heading" className="section-heading">{s.whyHeading}</h2>
        <div className="why-grid">
          {s.whyItems.map((item, i) => (
            <div key={i} className="why-card">
              <div className="why-card-icon">{whyIcons[i]}</div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
