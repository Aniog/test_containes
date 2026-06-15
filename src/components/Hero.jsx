import React from 'react';
import { strings } from '@/lib/strings';

export const Hero = () => {
  const t = strings.en.hero;
  return (
    <section className="bg-white overflow-hidden py-[60px] md:py-[80px]">
      <div className="container-custom grid md:grid-cols-2 gap-[40px] items-center">
        <div className="flex flex-col gap-[20px] text-center md:text-left order-1 md:order-1">
          <h1 className="text-[32px] md:text-[48px] leading-[1.1] mb-[10px]">
            <span className="block text-[var(--hero-h1-dark)]">{t.title1}</span>
            <span className="block ai-gradient-text">{t.title2}</span>
          </h1>
          <p className="text-[var(--body-text)] text-[16px] max-w-[500px] mx-auto md:mx-0">
            {t.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-[10px] justify-center md:justify-start">
            <a href="/s/ai_site_builder" className="btn btn-big btn-primary">
              {t.primaryCTA}
            </a>
            <a href="#all-generators" className="btn btn-big btn-ghost">
              {t.secondaryCTA}
            </a>
          </div>
        </div>
        
        <div className="order-2 md:order-2 flex justify-center">
          <div className="relative w-full max-w-[500px] aspect-[4/3] bg-[var(--light-bg)] rounded-[8px] flex items-center justify-center p-4">
            <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-auto">
              <rect x="20" y="20" width="360" height="260" rx="10" stroke="#8159BB" strokeWidth="2" strokeDasharray="5 5" />
              <rect x="50" y="50" width="100" height="20" rx="4" fill="#E2E4E7" />
              <rect x="50" y="80" width="300" height="40" rx="4" fill="#F4F6F8" stroke="#C6C9CD" />
              <circle cx="70" cy="180" r="20" fill="#7671FF" fillOpacity="0.2" />
              <rect x="100" y="170" width="200" height="10" rx="2" fill="#E2E4E7" />
              <rect x="100" y="190" width="150" height="10" rx="2" fill="#E2E4E7" />
              <path d="M20 150C80 130 150 170 200 150C250 130 320 170 380 150" stroke="#CB0C9F" strokeWidth="2" strokeOpacity="0.3" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7671FF05] to-[#CB0C9F05] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
