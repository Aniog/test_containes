import React from "react";
import { strings } from "../strings";
import { HeroIllustration } from "../icons";

export default function Hero() {
  const s = strings.en.hero;
  return (
    <section className="hero section section--hero" aria-labelledby="hero-h1">
      <div className="container hero__grid">
        <div className="hero__copy">
          <h1 className="hero__h1" id="hero-h1">
            <span>{s.h1Line1}</span>{" "}
            <span className="hero__h1-line-2">{s.h1Line2}</span>
          </h1>
          <p className="hero__sub">{s.sub}</p>
          <div className="hero__ctas">
            <a className="btn btn--primary" href="/s/ai_site_builder">
              {s.primaryCta}
            </a>
            <a className="btn btn--secondary" href="#all-generators">
              {s.secondaryCta}
            </a>
          </div>
        </div>
        <div className="hero__art-wrap">
          <HeroIllustration className="hero__art" />
        </div>
      </div>
    </section>
  );
}