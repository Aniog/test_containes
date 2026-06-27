import React from 'react';
import { strings } from '@/strings.en';
import { HeroIllustration } from './Icons';

export default function Hero() {
  return (
    <section className="hero-wash py-16 md:py-20">
      <div className="section-wrapper">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <h1 className="mb-5">
              <span className="block text-[28px] md:text-[40px] lg:text-[48px] text-[#2E2E2F] leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                {strings.hero.h1Line1}
              </span>
              <span className="block text-[28px] md:text-[40px] lg:text-[48px] ai-gradient-text leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                {strings.hero.h1Line2}
              </span>
            </h1>
            <p className="text-[#636972] text-base mb-8 max-w-lg mx-auto md:mx-0" style={{ fontFamily: 'var(--font-body)' }}>
              {strings.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
              <a
                href="/s/ai_site_builder"
                className="ai-gradient-fill inline-flex items-center justify-center h-11 px-6 rounded text-sm font-bold tracking-wide transition-opacity hover:opacity-90"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {strings.hero.primaryCta}
              </a>
              <a
                href="#all-generators"
                className="ghost-btn inline-flex items-center justify-center h-11 px-6 rounded text-sm font-bold tracking-wide transition-colors"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {strings.hero.secondaryCta}
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 order-1 md:order-2">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
