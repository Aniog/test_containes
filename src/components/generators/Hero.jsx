import React from 'react';
import { HeroIllustration } from './Illustrations';

export default function Hero({ s }) {
  return (
    <section className="strk-hero" aria-labelledby="hero-heading">
      <div
        className="strk-hero-wash"
        aria-hidden="true"
        data-strk-bg="AI website generator hero illustration line art mockup"
        data-strk-bg-id="hero-wash-bg-7a3b2c"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="strk-container strk-hero-inner">
        <div className="strk-hero-copy">
          <h1 id="hero-heading" className="strk-h1">
            <span className="strk-h1-line-1">{s.hero.line1}</span>
            <span className="strk-h1-line-2">{s.hero.line2}</span>
          </h1>
          <p className="strk-hero-sub">{s.hero.sub}</p>
          <div className="strk-hero-ctas">
            <a
              className="strk-btn strk-btn-primary strk-btn-lg"
              href="/s/ai_site_builder"
            >
              {s.hero.primaryCta}
            </a>
            <a className="strk-btn strk-btn-ghost" href="#all-generators">
              {s.hero.secondaryCta}
            </a>
          </div>
        </div>
        <div className="strk-hero-art" aria-hidden="true">
          <HeroIllustration width={420} height={280} />
        </div>
      </div>
    </section>
  );
}
