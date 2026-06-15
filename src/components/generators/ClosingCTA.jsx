import React from 'react';
import { strings } from '@/lib/generators-data';

const ClosingCTA = () => {
  const t = strings.en.closing;
  const tc = strings.en.common;
  
  return (
    <section className="py-20 bg-white border-t border-divider">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-heading-dark font-heading font-bold text-[28px] md:text-[36px] mb-4 uppercase">
          {t.title}
        </h2>
        <p className="text-body-gray mb-10 max-w-[500px] mx-auto">
          {t.sub}
        </p>
        
        <a 
          href="/s/ai_site_builder" 
          className="inline-flex h-[44px] px-10 py-3 rounded-[4px] font-heading font-bold uppercase text-[14px] bg-gradient-to-r from-[#7671FF] to-[#CB0C9F] text-white items-center justify-center hover:opacity-90 transition-opacity whitespace-nowrap shadow-md"
        >
          {tc.ctaStartWithAI}
        </a>
      </div>
    </section>
  );
};

export default ClosingCTA;
