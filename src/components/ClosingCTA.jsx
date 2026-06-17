import React from 'react';
import { strings } from '../data/strings';

const s = strings.en;

export default function ClosingCTA() {
  return (
    <section className="closing-cta" aria-labelledby="closing-heading">
      <div className="container">
        <h2 id="closing-heading" className="closing-heading">{s.closingHeading}</h2>
        <p className="closing-sub">{s.closingSub}</p>
        <a href="/s/ai_site_builder" className="btn btn-primary btn-large">
          {s.closingCta}
        </a>
      </div>
    </section>
  );
}
