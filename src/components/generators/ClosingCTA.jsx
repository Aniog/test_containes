import React from 'react';
import { strings } from '@/lib/strings.en';

const ClosingCTA = () => {
  const { en } = strings;
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl mb-4 font-heading text-h1-line1-text">{en.closingCta.heading}</h2>
        <p className="text-[#636972] text-lg mb-10">{en.closingCta.subheading}</p>
        <a href="/s/ai_site_builder" className="btn btn-lg btn-gradient px-10 text-base">
          {en.common.ctaMain}
        </a>
      </div>
    </section>
  );
};

export default ClosingCTA;
