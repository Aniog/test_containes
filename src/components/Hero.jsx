import React from 'react';
import { strings } from '../lib/strings';

const Hero = () => {
  const s = strings.en.hero;

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="max-w-[1200px] mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-6 text-center md:text-left">
          <h1 className="flex flex-col gap-1 tracking-tight">
            <span className="text-3xl md:text-5xl font-bold text-heading-dark">
              {s.h1_line1}
            </span>
            <span className="text-3xl md:text-5xl font-bold bg-ai-gradient bg-clip-text text-transparent pb-1">
              {s.h1_line2}
            </span>
          </h1>
          <p className="text-base md:text-lg text-body-text max-w-lg mx-auto md:mx-0">
            {s.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-center md:justify-start">
            <a 
              href="/s/ai_site_builder"
              className="h-[44px] px-8 flex items-center justify-center bg-ai-gradient rounded-[4px] font-heading font-bold text-sm text-white uppercase tracking-wider hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              {s.cta_primary}
            </a>
            <a 
              href="#all-generators"
              className="h-[44px] px-8 flex items-center justify-center border border-brand-purple rounded-[4px] font-heading font-bold text-sm text-brand-purple uppercase tracking-wider hover:bg-brand-purple/5 transition-colors whitespace-nowrap"
            >
              {s.cta_secondary}
            </a>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end">
          <svg 
            width="500" 
            height="400" 
            viewBox="0 0 500 400" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[500px] h-auto"
            aria-hidden="true"
          >
            <rect x="50" y="50" width="400" height="300" rx="4" stroke="#8159BB" strokeWidth="1" strokeOpacity="0.3" />
            <line x1="50" y1="90" x2="450" y2="90" stroke="#8159BB" strokeWidth="1" strokeOpacity="0.2" />
            <circle cx="70" cy="70" r="4" fill="#8159BB" fillOpacity="0.2" />
            <circle cx="85" cy="70" r="4" fill="#8159BB" fillOpacity="0.2" />
            <circle cx="100" cy="70" r="4" fill="#8159BB" fillOpacity="0.2" />
            
            <rect x="80" y="120" width="120" height="15" rx="2" fill="#8159BB" fillOpacity="0.1" />
            <rect x="80" y="145" width="200" height="8" rx="1" fill="#8159BB" fillOpacity="0.05" />
            <rect x="80" y="160" width="180" height="8" rx="1" fill="#8159BB" fillOpacity="0.05" />
            
            <rect x="300" y="120" width="120" height="120" rx="4" stroke="#8159BB" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 4" />
            <path d="M340 180 L360 160 L380 190" stroke="#8159BB" strokeWidth="1" strokeOpacity="0.3" />
            
            <rect x="80" y="250" width="80" height="30" rx="15" fill="#7671FF" fillOpacity="0.1" />
            <rect x="170" y="250" width="80" height="30" rx="15" stroke="#CB0C9F" strokeWidth="1" strokeOpacity="0.2" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
