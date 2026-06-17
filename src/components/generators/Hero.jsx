import React from 'react';
import { strings } from '../../strings';

const s = strings.en.hero;

const HeroIllustration = () => (
  <svg aria-hidden="true" width="480" height="360" viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[480px]">
    <rect x="40" y="20" width="400" height="280" rx="12" stroke="#8159BB" strokeWidth="2" fill="none" opacity="0.3"/>
    <rect x="60" y="50" width="360" height="30" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.2"/>
    <circle cx="80" cy="65" r="6" stroke="#7671FF" strokeWidth="1.5" fill="none" opacity="0.4"/>
    <circle cx="100" cy="65" r="6" stroke="#7671FF" strokeWidth="1.5" fill="none" opacity="0.3"/>
    <circle cx="120" cy="65" r="6" stroke="#7671FF" strokeWidth="1.5" fill="none" opacity="0.2"/>
    <rect x="60" y="100" width="160" height="180" rx="6" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.2"/>
    <rect x="240" y="100" width="180" height="80" rx="6" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.2"/>
    <rect x="240" y="200" width="180" height="80" rx="6" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.2"/>
    <rect x="80" y="120" width="120" height="12" rx="3" fill="#8159BB" opacity="0.15"/>
    <rect x="80" y="145" width="100" height="8" rx="2" fill="#8159BB" opacity="0.1"/>
    <rect x="80" y="165" width="110" height="8" rx="2" fill="#8159BB" opacity="0.1"/>
    <rect x="80" y="185" width="90" height="8" rx="2" fill="#8159BB" opacity="0.1"/>
    <rect x="80" y="220" width="80" height="30" rx="4" fill="url(#hero-grad)" opacity="0.2"/>
    <rect x="260" y="120" width="140" height="10" rx="3" fill="#8159BB" opacity="0.15"/>
    <rect x="260" y="140" width="120" height="8" rx="2" fill="#8159BB" opacity="0.1"/>
    <rect x="260" y="220" width="140" height="10" rx="3" fill="#8159BB" opacity="0.15"/>
    <rect x="260" y="240" width="100" height="8" rx="2" fill="#8159BB" opacity="0.1"/>
    <path d="M40 310 L440 310" stroke="#8159BB" strokeWidth="1" opacity="0.15"/>
    <circle cx="240" cy="330" r="4" fill="#8159BB" opacity="0.2"/>
    <defs>
      <linearGradient id="hero-grad" x1="80" y1="220" x2="160" y2="250" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7671FF"/>
        <stop offset="1" stopColor="#CB0C9F"/>
      </linearGradient>
    </defs>
  </svg>
);

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(118,113,255,0.06) 0%, rgba(203,12,159,0.03) 50%, transparent 80%)' }}>
      <div className="max-w-content mx-auto px-5 py-16 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1 max-w-xl">
          <h1 className="font-heading font-bold leading-tight m-0" style={{ textTransform: 'uppercase' }}>
            <span className="block text-heading-dark text-3xl md:text-4xl lg:text-5xl">{s.h1Line1}</span>
            <span className="block ai-gradient-text text-3xl md:text-4xl lg:text-5xl mt-1">{s.h1Line2}</span>
          </h1>
          <p className="text-body-text text-base mt-5 mb-8 max-w-lg leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            {s.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="/s/ai_site_builder" className="btn-primary text-center">
              {s.primaryCta}
            </a>
            <a href="#all-generators" className="btn-ghost text-center">
              {s.secondaryCta}
            </a>
          </div>
        </div>
        <div className="flex-shrink-0 order-first md:order-last">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
