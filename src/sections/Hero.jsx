import React from "react";
import { strings } from "../strings";
import { HeroIllustration } from "../icons.jsx";

export default function Hero() {
  return (
    <section className="strk-hero strk-section strk-section--hero" aria-labelledby="hero-heading">
      <div className="strk-container strk-hero-inner">
        <div className="strk-hero-text">
          <h1 id="hero-heading">
            <span className="line-1">{strings.en.heroH1Line1}</span>
            <span className="line-2 strk-ai-gradient-text">{strings.en.heroH1Line2}</span>
          </h1>
          <p className="strk-hero-sub">{strings.en.heroSub}</p>
          <div className="strk-hero-ctas">
            <a
              href="/s/ai_site_builder"
              className="strk-btn strk-btn--primary strk-btn--big"
              data-strk-cta="hero-primary"
            >
              {strings.en.heroPrimary}
            </a>
            <a
              href="#all-generators"
              className="strk-btn strk-btn--ghost strk-btn--big"
              data-strk-cta="hero-secondary"
            >
              {strings.en.heroSecondary}
            </a>
          </div>
        </div>
        <div className="strk-hero-art">
          <HeroIllustration width={520} height={380} />
        </div>
      </div>
    </section>
  );
}