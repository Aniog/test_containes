import React from 'react';

function IconLive() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
      <path
        d="M16 4 L20 12 L28 13 L22 19 L24 28 L16 23 L8 28 L10 19 L4 13 L12 12 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMobile() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
      <rect x="10" y="4" width="12" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <line x1="14" y1="8" x2="18" y2="8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="13" y1="24" x2="19" y2="24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconFree() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M16 9 V23 M11 13 H19 C20.5 13 21.5 14 21.5 15.5 C21.5 17 20.5 18 19 18 H13"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

const ITEMS = [
  { Icon: IconLive, titleKey: 'claim1', bodyKey: 'claim1Body' },
  { Icon: IconMobile, titleKey: 'claim2', bodyKey: 'claim2Body' },
  { Icon: IconFree, titleKey: 'claim3', bodyKey: 'claim3Body' },
];

export default function WhyStrikingly({ s }) {
  return (
    <section className="strk-section" aria-labelledby="why-heading">
      <div className="strk-container">
        <header className="strk-section-head">
          <h2 id="why-heading" className="strk-h2">
            {s.why.heading}
          </h2>
          <p className="strk-section-sub">{s.why.sub}</p>
        </header>
        <ul className="strk-why-grid" role="list">
          {ITEMS.map(({ Icon, titleKey, bodyKey }) => (
            <li key={titleKey} className="strk-why-card">
              <span className="strk-why-icon" aria-hidden="true">
                <Icon />
              </span>
              <span className="strk-why-title">{s.why[titleKey]}</span>
              <span className="strk-why-body">{s.why[bodyKey]}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
