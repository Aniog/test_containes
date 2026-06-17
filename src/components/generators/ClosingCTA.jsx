import React from 'react';
import { strings } from '../../strings';

const s = strings.en.closingCta;

export default function ClosingCTA() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-content mx-auto px-5 text-center">
        <h2 className="section-heading text-2xl md:text-3xl mb-3">{s.headline}</h2>
        <p className="text-body-text text-base mb-8 max-w-lg mx-auto">{s.sub}</p>
        <a href="/s/ai_site_builder" className="btn-primary inline-flex">
          {s.cta}
        </a>
      </div>
    </section>
  );
}
