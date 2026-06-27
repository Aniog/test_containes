import React from 'react';
import strings from '../strings';

export default function ClosingCTA() {
  const t = strings.en;
  return (
    <section className="text-center py-[60px] max-w-[1200px] mx-auto px-5">
      <h2 className="text-[26px] md:text-[32px] font-heading font-bold text-[#4B5056] mb-[10px]">
        {t.closingHeading}
      </h2>
      <p className="text-[14px] md:text-[16px] text-[#636972] mb-[30px] max-w-[500px] mx-auto">
        {t.closingSub}
      </p>
      <a href="/s/ai_site_builder" className="btn-primary btn-lg">
        {t.closingCta}
      </a>
    </section>
  );
}
