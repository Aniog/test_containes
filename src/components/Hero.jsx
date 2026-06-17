import React from 'react';
import { strings } from '../data/strings';

const s = strings.en;

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-inner">
        <div className="hero-content">
          <h1 id="hero-heading" className="hero-heading">
            <span className="hero-heading-line-1">{s.heroH1Line1}</span>
            <span className="hero-heading-line-2">{s.heroH1Line2}</span>
          </h1>
          <p className="hero-subheadline">{s.heroSubheadline}</p>
          <div className="hero-ctas">
            <a href="/s/ai_site_builder" className="btn btn-primary btn-large">
              {s.heroCtaPrimary}
            </a>
            <a href="#all-generators" className="btn btn-ghost">
              {s.heroCtaSecondary}
            </a>
          </div>
        </div>
        <div className="hero-illustration">
          <svg
            width="480"
            height="360"
            viewBox="0 0 480 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect x="40" y="40" width="400" height="280" rx="8" stroke="#8159BB" strokeWidth="2" fill="none" />
            <rect x="60" y="60" width="360" height="30" rx="4" fill="#F4F6F8" />
            <circle cx="80" cy="75" r="6" fill="#C6C9CD" />
            <circle cx="100" cy="75" r="6" fill="#C6C9CD" />
            <circle cx="120" cy="75" r="6" fill="#C6C9CD" />
            <rect x="60" y="110" width="160" height="180" rx="4" fill="#F4F6F8" />
            <rect x="240" y="110" width="180" height="80" rx="4" fill="#F4F6F8" />
            <rect x="240" y="210" width="180" height="80" rx="4" fill="#F4F6F8" />
            <rect x="80" y="130" width="120" height="8" rx="2" fill="#C6C9CD" />
            <rect x="80" y="150" width="100" height="8" rx="2" fill="#C6C9CD" />
            <rect x="80" y="170" width="110" height="8" rx="2" fill="#C6C9CD" />
            <rect x="80" y="200" width="80" height="20" rx="4" fill="#8159BB" opacity="0.3" />
            <rect x="260" y="130" width="140" height="8" rx="2" fill="#C6C9CD" />
            <rect x="260" y="150" width="120" height="8" rx="2" fill="#C6C9CD" />
            <rect x="260" y="170" width="100" height="8" rx="2" fill="#C6C9CD" />
            <rect x="260" y="230" width="140" height="8" rx="2" fill="#C6C9CD" />
            <rect x="260" y="250" width="120" height="8" rx="2" fill="#C6C9CD" />
            <rect x="260" y="270" width="100" height="8" rx="2" fill="#C6C9CD" />
          </svg>
        </div>
      </div>
    </section>
  );
}
