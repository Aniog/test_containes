import React from 'react';
import { HeroIllustration } from './Icons';
import strings from '../../strings';

const s = strings.en;

const Hero = () => (
  <section className="relative overflow-hidden" style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(129,89,187,0.06) 0%, rgba(203,12,159,0.03) 50%, transparent 80%)' }}>
    <div className="content-container py-[60px] md:py-[80px]">
      <div className="flex flex-col-reverse md:flex-row items-center gap-[40px] md:gap-[60px]">
        {/* Left column */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15] tracking-wide">
            <span className="block text-[var(--color-hero-heading)]">
              {s.heroH1Line1}
            </span>
            <span className="block ai-gradient-text">
              {s.heroH1Line2}
            </span>
          </h1>
          <p className="mt-[20px] text-[15px] md:text-[16px] leading-[1.6] text-[var(--color-body-text)] max-w-[480px] mx-auto md:mx-0">
            {s.heroSubheadline}
          </p>
          <div className="mt-[30px] flex flex-col sm:flex-row gap-[10px] justify-center md:justify-start">
            <a
              href={s.builderPath}
              className="ai-gradient-btn inline-flex items-center justify-center h-[44px] px-[24px] rounded-[4px] font-[var(--font-heading)] font-bold text-[14px] uppercase tracking-wide whitespace-nowrap"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {s.heroCtaPrimary}
            </a>
            <a
              href="#all-generators"
              className="ghost-btn inline-flex items-center justify-center h-[44px] px-[24px] rounded-[4px] font-bold text-[14px] uppercase tracking-wide whitespace-nowrap"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {s.heroCtaSecondary}
            </a>
          </div>
        </div>
        {/* Right column - illustration */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="max-w-[480px] w-full">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
