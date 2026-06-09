import React from 'react';
import { strings } from '../data/generators';

const s = strings.en;

export default function ClosingCTA() {
  return (
    <section className="bg-white section-padding">
      <div className="section-container text-center">
        <h2 className="text-[22px] md:text-[28px] text-heading-gray mb-[10px]">
          {s.closingCtaHeading}
        </h2>
        <p className="text-body-gray text-[14px] mb-[24px]">
          {s.closingCtaSub}
        </p>
        <a href={s.builderPath} className="btn-primary">
          {s.closingCtaButton}
        </a>
      </div>
    </section>
  );
}
