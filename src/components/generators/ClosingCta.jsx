import React from 'react';
import { strings } from '@/data/strings';

const s = strings.en;

export default function ClosingCta() {
  return (
    <section className="py-[60px] md:py-[80px] bg-white">
      <div className="section-wrapper text-center">
        <h2 className="text-[28px] md:text-[36px] text-heading mb-[10px]">
          {s.closingCta.heading}
        </h2>
        <p className="text-body-text text-[15px] mb-[30px] max-w-[480px] mx-auto">
          {s.closingCta.subheadline}
        </p>
        <a
          href="/s/ai_site_builder"
          className="btn-primary no-underline text-[16px] min-w-[260px]"
          style={{ height: '44px' }}
        >
          {s.closingCta.cta}
        </a>
      </div>
    </section>
  );
}
