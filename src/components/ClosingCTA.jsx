import React from 'react';
import { strings } from '../data/generators';

const ClosingCTA = () => {
  const { closingCTA } = strings.en;

  return (
    <section className="py-20 bg-white border-t border-divider text-center">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-heading mb-4 text-hero-line1">
          {closingCTA.title}
        </h2>
        <p className="text-lg text-body-text mb-10 max-w-xl mx-auto">
          {closingCTA.subtitle}
        </p>
        <a href="/s/ai_site_builder" className="btn btn-large btn-primary px-10">
          {closingCTA.button}
        </a>
      </div>
    </section>
  );
};

export default ClosingCTA;
