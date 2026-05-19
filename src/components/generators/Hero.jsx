import React from 'react';
import { strings } from '@/data/strings';

const t = strings.en;

const HeroIllustration = () => (
  <svg
    width="480"
    height="360"
    viewBox="0 0 480 360"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="w-full h-auto max-w-[480px]"
  >
    {/* Browser window frame */}
    <rect x="40" y="30" width="400" height="300" rx="8" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.6" />
    <rect x="40" y="30" width="400" height="30" rx="8" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.3" />
    <circle cx="62" cy="45" r="5" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.5" />
    <circle cx="80" cy="45" r="5" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.5" />
    <circle cx="98" cy="45" r="5" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.5" />
    {/* Header bar */}
    <rect x="60" y="75" width="120" height="8" rx="4" fill="#8159BB" opacity="0.3" />
    <rect x="340" y="75" width="80" height="8" rx="4" fill="#8159BB" opacity="0.2" />
    {/* Hero area */}
    <rect x="60" y="105" width="200" height="12" rx="4" fill="#8159BB" opacity="0.4" />
    <rect x="60" y="125" width="160" height="8" rx="4" fill="#8159BB" opacity="0.2" />
    <rect x="60" y="145" width="100" height="24" rx="4" fill="#8159BB" opacity="0.3" />
    {/* Image placeholder */}
    <rect x="290" y="100" width="130" height="80" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.3" />
    <path d="M320 155 L340 135 L360 150 L380 130 L400 155" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.4" />
    {/* Content blocks */}
    <rect x="60" y="200" width="160" height="60" rx="4" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.25" />
    <rect x="240" y="200" width="160" height="60" rx="4" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.25" />
    <rect x="60" y="280" width="160" height="30" rx="4" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.2" />
    <rect x="240" y="280" width="160" height="30" rx="4" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.2" />
    {/* Sparkle accents */}
    <path d="M420 50 L425 55 L420 60 L415 55 Z" fill="#7671FF" opacity="0.6" />
    <path d="M70 180 L73 185 L70 190 L67 185 Z" fill="#CB0C9F" opacity="0.5" />
    <path d="M450 150 L453 155 L450 160 L447 155 Z" fill="#7671FF" opacity="0.4" />
  </svg>
);

const Hero = () => (
  <section className="relative overflow-hidden">
    {/* Faint purple-to-pink wash */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse at 70% 50%, rgba(118, 113, 255, 0.05) 0%, rgba(203, 12, 159, 0.03) 40%, transparent 70%)',
      }}
      aria-hidden="true"
    />
    <div className="max-w-[1200px] mx-auto px-5 py-16 md:py-20 relative">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left column */}
        <div className="flex-1 text-center md:text-start">
          <h1 className="font-heading font-bold uppercase leading-tight mb-5">
            <span className="block text-3xl md:text-5xl text-heading-dark">
              {t.hero.h1Line1}
            </span>
            <span className="block text-3xl md:text-5xl ai-gradient-text">
              {t.hero.h1Line2}
            </span>
          </h1>
          <p className="text-body-text text-sm md:text-base leading-normal mb-8 max-w-[480px] mx-auto md:mx-0">
            {t.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2.5 justify-center md:justify-start">
            <a
              href="/s/ai_site_builder"
              className="inline-flex items-center justify-center h-11 px-6 rounded ai-gradient-bg text-white font-heading font-bold uppercase text-sm tracking-wide transition-opacity hover:opacity-90"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#all-generators"
              className="inline-flex items-center justify-center h-11 px-6 rounded border border-brand-purple text-brand-purple font-heading font-bold uppercase text-sm tracking-wide bg-transparent transition-colors hover:bg-brand-purple hover:text-white"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
        {/* Right column */}
        <div className="flex-1 flex justify-center md:justify-end">
          <HeroIllustration />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
