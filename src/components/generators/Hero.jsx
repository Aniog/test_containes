import React from 'react';
import { strings } from '@/lib/generators-data';

const Hero = () => {
  const t = strings.en.hero;
  const tc = strings.en.common;

  return (
    <section className="py-[60px] md:py-[80px] bg-white relative overflow-hidden">
      {/* Subtle wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-[#CB0C9F]/5 pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-4 relative flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="flex flex-col gap-1 mb-6">
            <span className="text-heading-dark font-heading font-bold text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] uppercase">
              {t.line1}
            </span>
            <span className="font-heading font-bold text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#7671FF] to-[#CB0C9F]">
              {t.line2}
            </span>
          </h1>
          
          <p className="text-body-gray text-[16px] md:text-[18px] max-w-[540px] mx-auto md:mx-0 mb-8 leading-relaxed">
            {t.subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-center md:justify-start">
            <a 
              href="/s/ai_site_builder" 
              className="h-[44px] px-8 py-3 rounded-[4px] font-heading font-bold uppercase text-[14px] bg-gradient-to-r from-[#7671FF] to-[#CB0C9F] text-white flex items-center justify-center hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              {tc.ctaStartBuilding}
            </a>
            <a 
              href="#all-generators" 
              className="h-[44px] px-8 py-3 rounded-[4px] font-heading font-bold uppercase text-[14px] border border-brand-purple text-brand-purple flex items-center justify-center hover:bg-brand-purple/5 transition-colors whitespace-nowrap"
            >
              {tc.ctaBrowseGenerators}
            </a>
          </div>
        </div>
        
        <div className="flex-1 w-full max-w-[500px] md:max-w-none">
          <svg 
            viewBox="0 0 500 400" 
            className="w-full h-auto text-brand-purple/20" 
            aria-hidden="true"
          >
            <rect x="20" y="40" width="460" height="320" rx="10" fill="none" stroke="currentColor" strokeWidth="2" />
            <rect x="40" y="60" width="120" height="20" rx="4" fill="currentColor" opacity="0.5" />
            <rect x="180" y="60" width="80" height="20" rx="4" fill="currentColor" opacity="0.3" />
            <rect x="280" y="60" width="80" height="20" rx="4" fill="currentColor" opacity="0.3" />
            <rect x="40" y="100" width="420" height="180" rx="6" fill="currentColor" opacity="0.1" />
            <circle cx="250" cy="190" r="30" fill="currentColor" opacity="0.2" />
            <rect x="80" y="300" width="100" height="40" rx="4" fill="currentColor" opacity="0.2" />
            <rect x="200" y="300" width="100" height="40" rx="4" fill="currentColor" opacity="0.2" />
            <rect x="320" y="300" width="100" height="40" rx="4" fill="currentColor" opacity="0.2" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
