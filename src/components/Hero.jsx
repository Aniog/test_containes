import React from 'react';
import { strings } from '../data/generators';
import { HeroIllustration } from './Icons';

const s = strings.en;

export default function Hero() {
  return (
    <section className="bg-white" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(118,113,255,0.06) 0%, rgba(203,12,159,0.04) 50%, transparent 80%)' }}>
      <div className="section-container flex flex-col md:flex-row items-center gap-[30px] md:gap-[40px] py-[60px] md:py-[80px]">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15] tracking-wide mb-[20px]">
            <span className="block text-heading-dark">{s.heroLine1}</span>
            <span className="block hero-gradient-text">{s.heroLine2}</span>
          </h1>
          <p className="text-body-gray text-[14px] md:text-[16px] leading-[1.6] max-w-[480px] mb-[30px] mx-auto md:mx-0">
            {s.heroSubheadline}
          </p>
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-[10px]">
            <a href={s.builderPath} className="btn-primary w-full sm:w-auto text-center">
              {s.heroCtaPrimary}
            </a>
            <a href="#all-generators" className="btn-secondary w-full sm:w-auto text-center">
              {s.heroCtaSecondary}
            </a>
          </div>
        </div>
        <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
