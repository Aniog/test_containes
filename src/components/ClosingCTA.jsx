import React from 'react';
import strings from '@/data/strings.en';

export default function ClosingCTA() {
  const s = strings.closingCta;
  return (
    <section className="w-full py-[60px]" style={{ backgroundColor: 'var(--white)' }}>
      <div className="section-container text-center">
        <h2 className="font-heading font-bold text-[26px] md:text-[32px] mb-[10px]" style={{ color: 'var(--heading-text)' }}>
          {s.headline}
        </h2>
        <p className="text-[15px] mb-[25px]" style={{ color: 'var(--body-text)' }}>
          {s.sub}
        </p>
        <a href="/s/ai_site_builder" className="btn-primary text-[14px] px-[25px]">
          {s.cta}
        </a>
      </div>
    </section>
  );
}
