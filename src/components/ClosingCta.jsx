import React from 'react';
import { strings } from '@/strings.en';

export default function ClosingCta() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="section-wrapper text-center">
        <h2 className="text-[26px] md:text-[32px] text-[#4B5056] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
          {strings.closingCta.headline}
        </h2>
        <p className="text-[#636972] text-sm mb-8 max-w-md mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
          {strings.closingCta.sub}
        </p>
        <a
          href="/s/ai_site_builder"
          className="ai-gradient-fill inline-flex items-center justify-center h-[44px] px-8 rounded text-sm font-bold tracking-wide transition-opacity hover:opacity-90"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {strings.closingCta.cta}
        </a>
      </div>
    </section>
  );
}
