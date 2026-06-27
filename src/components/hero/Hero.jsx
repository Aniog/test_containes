import React from "react";
import { strings } from "../../data/strings";

export default function Hero() {
  const s = strings.en;
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1 id="hero-heading" className="hero-h1">
            <span className="hero-h1-line1">{s.heroH1Line1}</span>
            <span className="hero-h1-line2">{s.heroH1Line2}</span>
          </h1>
          <p className="hero-subheadline">{s.heroSubheadline}</p>
          <div className="hero-ctas">
            <a href="/s/ai_site_builder" className="btn btn-primary btn-large">
              {s.heroCtaPrimary}
            </a>
            <a href="#all-generators" className="btn btn-ghost btn-large">
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
            <rect x="40" y="40" width="400" height="280" rx="8" stroke="#8159BB" strokeWidth="2" strokeDasharray="4 4" />
            <rect x="60" y="60" width="360" height="40" rx="4" fill="#F4F6F8" />
            <rect x="60" y="120" width="160" height="120" rx="4" fill="#F4F6F8" />
            <rect x="240" y="120" width="180" height="50" rx="4" fill="#F4F6F8" />
            <rect x="240" y="180" width="180" height="50" rx="4" fill="#F4F6F8" />
            <rect x="60" y="260" width="360" height="40" rx="4" fill="#F4F6F8" />
            <circle cx="140" cy="180" r="30" stroke="#7671FF" strokeWidth="2" />
            <path d="M130 180 L140 190 L155 170" stroke="#CB0C9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
