import React from 'react';
import { strings } from '../../constants/strings';

const ClosingCTA = () => {
  const { closingCTA } = strings.en;

  return (
    <section className="bg-white py-[80px] text-center">
      <div className="container-custom">
        <h2 className="text-[32px] md:text-[40px] text-[#2E2E2F] mb-4 uppercase">{closingCTA.title}</h2>
        <p className="text-[#636972] text-[16px] mb-8">{closingCTA.subtitle}</p>
        <a
          href="/s/ai_site_builder"
          className="inline-flex items-center justify-center h-[44px] px-8 ai-gradient-bg text-white font-['Josefin_Sans'] font-bold uppercase rounded-[4px] hover:scale-[1.02] active:scale-[0.98] transition-transform"
        >
          {closingCTA.cta}
        </a>
      </div>
    </section>
  );
};

export default ClosingCTA;
