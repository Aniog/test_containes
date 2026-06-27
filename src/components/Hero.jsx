import React from 'react';
import { strings } from '../data/generators';

const Hero = () => {
  const { hero } = strings.en;

  return (
    <section className="max-w-[1200px] mx-auto px-5 pt-10 pb-16 md:py-20 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1 text-center md:text-left">
        <h1 className="flex flex-col gap-1">
          <span className="text-3xl md:text-5xl font-heading font-extrabold text-hero-line1">
            {hero.line1}
          </span>
          <span className="text-3xl md:text-5xl font-heading font-extrabold ai-gradient-text uppercase">
            {hero.line2}
          </span>
        </h1>
        <p className="mt-6 text-lg text-body-text max-w-xl mx-auto md:mx-0">
          {hero.subheadline}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
          <a href="/s/ai_site_builder" className="btn btn-large btn-primary w-full sm:w-auto">
            {hero.primaryCTA}
          </a>
          <a href="#all-generators" className="btn btn-large btn-ghost w-full sm:w-auto">
            {hero.secondaryCTA}
          </a>
        </div>
      </div>
      
      <div className="flex-1 w-full max-w-lg">
        <svg 
          width="500" 
          height="400" 
          viewBox="0 0 500 400" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          aria-hidden="true"
        >
          {/* Faint wash background */}
          <circle cx="250" cy="200" r="180" fill="url(#hero-gradient)" fillOpacity="0.05" />
          <defs>
            <radialGradient id="hero-gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250 200) rotate(90) scale(180)">
              <stop stopColor="#7671FF" />
              <stop offset="1" stopColor="#CB0C9F" />
            </radialGradient>
          </defs>
          
          {/* Browser Mockup */}
          <rect x="50" y="50" width="400" height="300" rx="4" stroke="#E2E4E7" strokeWidth="2" />
          <line x1="50" y1="80" x2="450" y2="80" stroke="#E2E4E7" strokeWidth="2" />
          <circle cx="70" cy="65" r="4" fill="#E2E4E7" />
          <circle cx="85" cy="65" r="4" fill="#E2E4E7" />
          <circle cx="100" cy="65" r="4" fill="#E2E4E7" />
          
          {/* Mock Content */}
          <rect x="80" y="110" width="120" height="8" rx="4" fill="#F4F6F8" />
          <rect x="80" y="130" width="200" height="20" rx="4" fill="#7671FF" fillOpacity="0.1" />
          <rect x="80" y="160" width="160" height="8" rx="4" fill="#F4F6F8" />
          
          <rect x="280" y="110" width="140" height="180" rx="4" stroke="#7671FF" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="350" cy="180" r="30" stroke="#CB0C9F" strokeWidth="2" strokeOpacity="0.2" />
          <line x1="335" y1="180" x2="365" y2="180" stroke="#CB0C9F" strokeOpacity="0.2" />
          <line x1="350" y1="165" x2="350" y2="195" stroke="#CB0C9F" strokeOpacity="0.2" />
          
          <rect x="80" y="240" width="60" height="24" rx="4" fill="url(#gradient-fill)" />
          <defs>
            <linearGradient id="gradient-fill" x1="80" y1="240" x2="140" y2="264" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7671FF" />
              <stop offset="1" stopColor="#CB0C9F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
