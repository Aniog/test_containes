


import React from 'react';
import strings from '@/data/strings.en.js';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-heading">
            <span className="hero-heading-line1">{strings.heroLine1}</span>
            <span className="hero-heading-line2">{strings.heroLine2}</span>
          </h1>
          <p className="hero-sub">{strings.heroSubheadline}</p>
          <div className="hero-ctas">
            <a href="/s/ai_site_builder" className="btn btn-primary btn-lg">
              {strings.heroPrimaryCTA}
            </a>
            <a href="#all-generators" className="btn btn-ghost btn-lg">
              {strings.heroSecondaryCTA}
            </a>
          </div>
        </div>
        <div className="hero-illustration" aria-hidden="true">
          <svg
            width="480"
            height="360"
            viewBox="0 0 480 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="40" y="20" width="400" height="320" rx="8" stroke="#C6C9CD" strokeWidth="1.5" fill="white" />
            <rect x="40" y="20" width="400" height="48" rx="8" fill="#F4F6F8" />
            <circle cx="64" cy="44" r="5" fill="#8159BB" opacity="0.6" />
            <circle cx="80" cy="44" r="5" fill="#8159BB" opacity="0.4" />
            <circle cx="96" cy="44" r="5" fill="#8159BB" opacity="0.2" />
            <rect x="160" y="36" width="120" height="16" rx="3" fill="#E2E4E7" />
            <rect x="60" y="88" width="360" height="100" rx="6" fill="#F4F6F8" />
            <rect x="80" y="108" width="200" height="12" rx="3" fill="#E2E4E7" />
            <rect x="80" y="130" width="140" height="12" rx="3" fill="#E2E4E7" />
            <rect x="80" y="152" width="100" height="12" rx="3" fill="#E2E4E7" />
            <rect x="60" y="208" width="170" height="112" rx="6" fill="#F4F6F8" />
            <rect x="250" y="208" width="170" height="112" rx="6" fill="#F4F6F8" />
            <rect x="80" y="228" width="100" height="10" rx="3" fill="#E2E4E7" />
            <rect x="80" y="248" width="130" height="10" rx="3" fill="#E2E4E7" />
            <rect x="270" y="228" width="100" height="10" rx="3" fill="#E2E4E7" />
            <rect x="270" y="248" width="130" height="10" rx="3" fill="#E2E4E7" />
            <circle cx="240" cy="44" r="16" fill="url(#ai-grad-hero)" opacity="0.15" />
            <defs>
              <linearGradient id="ai-grad-hero" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#7671FF" />
                <stop offset="1" stopColor="#CB0C9F" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;


