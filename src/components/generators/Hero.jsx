import React from 'react';
import { strings } from '@/lib/strings.en';

const Hero = () => {
  const { en } = strings;
  return (
    <section className="container-custom py-16 md:py-20 lg:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="flex flex-col mb-6">
            <span className="text-h1-line1-text text-3xl md:text-5xl lg:text-6xl mb-1">
              {en.hero.h1Line1}
            </span>
            <span className="ai-gradient-text text-3xl md:text-5xl lg:text-6xl">
              {en.hero.h1Line2}
            </span>
          </h1>
          <p className="text-[#636972] text-lg mb-10 max-w-lg">
            {en.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="/s/ai_site_builder" className="btn btn-lg btn-gradient whitespace-nowrap">
              {en.common.ctaStartBuilding}
            </a>
            <a href="#all-generators" className="btn btn-lg btn-ghost whitespace-nowrap">
              {en.common.ctaBrowseGenerators}
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <svg width="500" height="350" viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="500" height="350" rx="4" fill="#F4F6F8" />
            <path d="M40 40H460V310H40V40Z" fill="white" stroke="#E2E4E7" />
            <rect x="60" y="60" width="100" height="12" rx="2" fill="#E2E4E7" />
            <rect x="60" y="80" width="380" height="8" rx="1" fill="#F4F6F8" />
            <rect x="60" y="95" width="300" height="8" rx="1" fill="#F4F6F8" />
            
            <rect x="60" y="130" width="180" height="100" rx="2" fill="#F4F6F8" stroke="#E2E4E7" />
            <rect x="260" y="130" width="180" height="100" rx="2" fill="#F4F6F8" stroke="#E2E4E7" />
            
            <rect x="60" y="250" width="380" height="40" rx="2" fill="#7671FF" fillOpacity="0.1" stroke="#7671FF" strokeOpacity="0.3" strokeDasharray="4 4" />
            <rect x="190" y="262" width="120" height="16" rx="2" fill="#8159BB" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
