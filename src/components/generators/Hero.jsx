import React from 'react';

const Hero = ({ h1Line1, h1Line2, subheadline, primaryCta, secondaryCta }) => (
  <section className="w-full hero-wash">
    <div className="max-w-[1200px] mx-auto px-5 py-[60px] md:py-[80px]">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <h1 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold leading-[1.2] mb-5">
            <span className="block text-[#2E2E2F] uppercase">{h1Line1}</span>
            <span className="block ai-gradient-text uppercase">{h1Line2}</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#636972] leading-[1.5] mb-8 max-w-[520px] mx-auto md:mx-0">
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-[10px] justify-center md:justify-start">
            <a
              href="/s/ai_site_builder"
              className="ai-gradient-fill inline-flex items-center justify-center h-[44px] px-[15px] rounded-[4px] font-heading font-bold text-[14px] uppercase text-white no-underline hover:opacity-90 transition-opacity"
            >
              {primaryCta}
            </a>
            <a
              href="#all-generators"
              className="inline-flex items-center justify-center h-[36px] px-[15px] rounded-[4px] font-heading font-bold text-[14px] uppercase text-[#8159BB] border border-[#8159BB] bg-transparent no-underline hover:bg-[#8159BB] hover:text-white transition-colors"
            >
              {secondaryCta}
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center order-1 md:order-2">
          <svg
            width="440"
            height="320"
            viewBox="0 0 440 320"
            fill="none"
            aria-hidden="true"
            className="w-full max-w-[440px]"
          >
            <rect x="40" y="20" width="360" height="240" rx="12" stroke="#8159BB" strokeWidth="2" fill="none" opacity="0.3" />
            <rect x="60" y="50" width="320" height="30" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.2" />
            <circle cx="80" cy="65" r="6" stroke="#7671FF" strokeWidth="1.5" fill="none" opacity="0.3" />
            <circle cx="100" cy="65" r="6" stroke="#CB0C9F" strokeWidth="1.5" fill="none" opacity="0.3" />
            <circle cx="120" cy="65" r="6" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.3" />
            <rect x="60" y="100" width="150" height="12" rx="2" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.2" />
            <rect x="60" y="120" width="200" height="8" rx="2" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.15" />
            <rect x="60" y="136" width="180" height="8" rx="2" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.15" />
            <rect x="60" y="152" width="120" height="8" rx="2" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.15" />
            <rect x="260" y="100" width="120" height="80" rx="6" stroke="#7671FF" strokeWidth="1.5" fill="none" opacity="0.2" />
            <rect x="60" y="200" width="320" height="40" rx="6" stroke="#CB0C9F" strokeWidth="1.5" fill="none" opacity="0.15" />
            <rect x="160" y="210" width="120" height="20" rx="4" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.2" />
            <line x1="40" y1="280" x2="400" y2="280" stroke="#8159BB" strokeWidth="1" opacity="0.1" />
            <circle cx="220" cy="300" r="8" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.2" />
          </svg>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
