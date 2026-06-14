import React from 'react';
import { HeroIllustration } from './Illustrations.jsx';

const Hero = ({ t }) => (
  <section
    className="strk-section strk-section--hero strk-section--hero-bg"
    aria-labelledby="hero-title"
  >
    <div className="strk-container strk-hero">
      <div className="strk-hero__copy">
        <h1 className="strk-hero__title" id="hero-title">
          <span className="strk-hero__title-line">{t('hero.line1')}</span>
          <span className="strk-hero__title-line strk-hero__title-line--gradient">
            {t('hero.line2')}
          </span>
        </h1>
        <p className="strk-hero__sub">{t('hero.sub')}</p>
        <div className="strk-hero__ctas">
          <a
            className="strk-btn strk-btn--gradient strk-btn--lg"
            href="/s/ai_site_builder"
          >
            {t('hero.primaryCta')}
          </a>
          <a
            className="strk-btn strk-btn--ghost strk-btn--lg"
            href="#all-generators"
          >
            {t('hero.secondaryCta')}
          </a>
        </div>
      </div>
      <div className="strk-hero__art">
        <HeroIllustration className="strk-hero__illustration" />
      </div>
    </div>
  </section>
);

export default Hero;
