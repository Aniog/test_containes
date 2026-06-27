import React from 'react';

const ClosingCta = ({ headline, sub, cta }) => (
  <section className="w-full bg-white py-10 md:py-[60px]">
    <div className="max-w-[1200px] mx-auto px-5 text-center">
      <h2 className="text-[26px] md:text-[32px] font-bold text-[#4B5056] uppercase mb-3">{headline}</h2>
      <p className="text-[14px] md:text-[16px] text-[#636972] mb-8 max-w-[480px] mx-auto">{sub}</p>
      <a
        href="/s/ai_site_builder"
        className="ai-gradient-fill inline-flex items-center justify-center h-[44px] px-[20px] rounded-[4px] font-heading font-bold text-[14px] uppercase text-white no-underline hover:opacity-90 transition-opacity"
      >
        {cta}
      </a>
    </div>
  </section>
);

export default ClosingCta;
