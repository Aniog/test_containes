




import React from 'react';
import strings from '@/data/strings.en.js';

const WhyIcon = ({ index }) => {
  const icons = [
    <svg key="0" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="12" stroke="#8159BB" strokeWidth="1.5" />
      <path d="M12 16l3 3 5-6" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    <svg key="1" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="6" y="4" width="20" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="10" y="8" width="12" height="12" rx="2" fill="#F4F6F8" />
      <circle cx="16" cy="14" r="3" fill="#8159BB" opacity="0.3" />
    </svg>,
    <svg key="2" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="12" stroke="#8159BB" strokeWidth="1.5" />
      <path d="M10 16h12M16 10v12" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
    </svg>,
  ];
  return icons[index] || icons[0];
};

const WhyStrikingly = () => {
  return (
    <section className="section why-strikingly">
      <div className="section-container">
        <h2 className="section-heading">{strings.whyHeading}</h2>
        <div className="why-grid">
          {strings.reasons.map((reason, i) => (
            <div key={i} className="why-card">
              <div className="why-icon" aria-hidden="true">
                <WhyIcon index={i} />
              </div>
              <h3 className="why-title">{reason.title}</h3>
              <p className="why-desc">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyStrikingly;



