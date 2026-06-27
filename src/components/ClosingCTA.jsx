import React from 'react';
import { strings } from '../lib/strings';

const ClosingCTA = () => {
  const s = strings.en.closing;

  return (
    <section className="bg-white py-20 text-center border-t border-divider">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col items-center gap-6">
        <h2 className="text-3xl md:text-5xl text-heading-dark tracking-tight">
          {s.title}
        </h2>
        <p className="text-base md:text-lg text-body-text max-w-lg">
          {s.subtitle}
        </p>
        <div className="mt-4">
          <a 
            href="/s/ai_site_builder"
            className="h-[44px] px-10 flex items-center justify-center bg-ai-gradient rounded-[4px] font-heading font-bold text-sm text-white uppercase tracking-wider hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            {s.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;
