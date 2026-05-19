import React from 'react';
import { strings } from '@/data/strings';

const t = strings.en;

const ClosingCTA = () => (
  <section className="py-16 bg-white">
    <div className="max-w-[1200px] mx-auto px-5 text-center">
      <h2 className="font-heading font-bold uppercase text-heading-section text-2xl md:text-3xl leading-tight mb-2.5">
        {t.closingCta.heading}
      </h2>
      <p className="text-body-text text-sm mb-8">
        {t.closingCta.subheading}
      </p>
      <a
        href="/s/ai_site_builder"
        className="inline-flex items-center justify-center h-11 px-8 rounded ai-gradient-bg text-white font-heading font-bold uppercase text-sm tracking-wide transition-opacity hover:opacity-90"
      >
        {t.closingCta.cta}
      </a>
    </div>
  </section>
);

export default ClosingCTA;
