import React from 'react';
import strings from '@/data/strings.en.js';

function HeroIllustration() {
  return (
    <svg
      width="480"
      height="360"
      viewBox="0 0 480 360"
      fill="none"
      aria-hidden="true"
      style={{ maxWidth: '100%', height: 'auto' }}
    >
      <rect x="40" y="20" width="400" height="280" rx="8" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1.5" />
      {/* Browser bar */}
      <rect x="40" y="20" width="400" height="28" rx="8" fill="#E2E4E7" />
      <rect x="40" y="40" width="400" height="8" fill="#E2E4E7" />
      <circle cx="56" cy="34" r="5" fill="#C6C9CD" />
      <circle cx="72" cy="34" r="5" fill="#C6C9CD" />
      <circle cx="88" cy="34" r="5" fill="#C6C9CD" />
      {/* Header placeholder */}
      <rect x="60" y="60" width="100" height="10" rx="3" fill="#C6C9CD" />
      <rect x="300" y="58" width="120" height="8" rx="3" fill="#E2E4E7" />
      <rect x="340" y="72" width="80" height="8" rx="3" fill="#E2E4E7" />
      {/* Hero image placeholder */}
      <rect x="60" y="90" width="360" height="100" rx="6" fill="#8159BB" opacity="0.12" />
      <rect x="160" y="110" width="160" height="16" rx="4" fill="#8159BB" opacity="0.2" />
      <rect x="180" y="134" width="120" height="10" rx="3" fill="#8159BB" opacity="0.15" />
      {/* Section blocks */}
      <rect x="60" y="210" width="170" height="60" rx="4" fill="#E2E4E7" />
      <rect x="250" y="210" width="170" height="60" rx="4" fill="#E2E4E7" />
      {/* Floating accent */}
      <rect x="320" y="230" width="60" height="8" rx="3" fill="#8159BB" opacity="0.15" />
      <rect x="320" y="246" width="80" height="8" rx="3" fill="#8159BB" opacity="0.1" />
      {/* Purple accent line */}
      <rect x="60" y="278" width="40" height="4" rx="2" fill="#8159BB" opacity="0.3" />
      <rect x="105" y="278" width="80" height="4" rx="2" fill="#E2E4E7" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      style={{
        paddingBlock: '80px',
        background: 'radial-gradient(ellipse at 80% 20%, rgba(203, 12, 159, 0.04), transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(118, 113, 255, 0.04), transparent 50%)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          <div style={{ order: 1 }} className="hero-left">
            <h1 style={{ margin: 0, lineHeight: 1.15 }}>
              <span style={{ display: 'block', color: 'var(--color-hero-dark)' }}>
                {strings.heroH1Line1}
              </span>
              <span className="ai-gradient-text" style={{ display: 'block' }}>
                {strings.heroH1Line2}
              </span>
            </h1>
            <p
              style={{
                fontSize: '16px',
                color: 'var(--color-body)',
                marginBlock: '20px',
                maxWidth: '440px',
                lineHeight: 1.5,
              }}
            >
              {strings.heroSubheadline}
            </p>
            <div
              style={{
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap',
              }}
            >
              <a href="/s/ai_site_builder" className="btn btn-primary btn-lg">
                {strings.heroPrimaryCTA}
              </a>
              <a href="#all-generators" className="btn btn-ghost btn-lg">
                {strings.heroSecondaryCTA}
              </a>
            </div>
          </div>
          <div
            style={{ order: 2, display: 'flex', justifyContent: 'center' }}
            className="hero-right"
          >
            <HeroIllustration />
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-left {
            order: 1 !important;
          }
          .hero-right {
            order: 2 !important;
          }
        }
      `}</style>
    </section>
  );
}