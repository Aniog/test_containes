import React from 'react';
import { strings } from '../../constants/strings';

const Hero = () => {
  const { hero } = strings.en;

  return (
    <section className="container-custom py-[60px] md:py-[80px] grid md:grid-cols-2 gap-[40px] items-center">
      <div className="flex flex-col items-start gap-5">
        <h1 className="text-[32px] md:text-[48px] m-0">
          <span className="text-[#2E2E2F] block">{hero.h1_line1}</span>
          <span className="ai-gradient-text block">{hero.h1_line2}</span>
        </h1>
        <p className="text-[#636972] text-[16px] max-w-[480px] m-0">
          {hero.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-[10px] w-full sm:w-auto mt-2">
          <a
            href="/s/ai_site_builder"
            className="ai-gradient-bg text-white h-[44px] px-[25px] rounded-[4px] flex items-center justify-center font-['Josefin_Sans'] font-bold uppercase transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {hero.cta_primary}
          </a>
          <a
            href="#all-generators"
            className="ghost-button h-[44px] px-[25px] rounded-[4px] flex items-center justify-center font-['Josefin_Sans'] font-bold uppercase"
          >
            {hero.cta_secondary}
          </a>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <svg
          width="500"
          height="350"
          viewBox="0 0 500 350"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-[500px] h-auto"
          aria-hidden="true"
        >
          <rect x="10" y="10" width="480" height="330" rx="4" stroke="#E2E4E7" strokeWidth="2" />
          <path d="M10 60H490" stroke="#E2E4E7" strokeWidth="2" />
          <circle cx="25" cy="35" r="5" fill="#E2E4E7" />
          <circle cx="40" cy="35" r="5" fill="#E2E4E7" />
          <circle cx="55" cy="35" r="5" fill="#E2E4E7" />
          
          <rect x="50" y="90" width="120" height="20" rx="2" fill="#F4F6F8" />
          <rect x="50" y="125" width="200" height="40" rx="2" fill="#E2E4E7" fillOpacity="0.3" />
          <rect x="50" y="180" width="150" height="30" rx="4" fill="#8159BB" fillOpacity="0.2" />
          
          <rect x="280" y="90" width="170" height="150" rx="4" stroke="#8159BB" strokeOpacity="0.3" strokeDasharray="4 4" />
          <circle cx="365" cy="165" r="20" stroke="#8159BB" strokeOpacity="0.4" />
          
          <path d="M50 240H450" stroke="#F4F6F8" strokeWidth="2" />
          <rect x="50" y="270" width="80" height="40" rx="2" fill="#F4F6F8" />
          <rect x="150" y="270" width="80" height="40" rx="2" fill="#F4F6F8" />
          <rect x="250" y="270" width="80" height="40" rx="2" fill="#F4F6F8" />
          <rect x="350" y="270" width="80" height="40" rx="2" fill="#F4F6F8" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
