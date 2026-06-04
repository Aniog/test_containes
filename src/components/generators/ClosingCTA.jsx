import React from 'react';
import strings from '@/data/strings.en.js';

export default function ClosingCTA() {
  return (
    <section className="py-[60px]" style={{ background: '#FFFFFF' }}>
      <div className="max-content section-padding text-center">
        <h2 className="text-[28px] md:text-[36px] text-heading-gray m-0 mb-[10px]">
          {strings.closingHeading}
        </h2>
        <p className="text-[15px] text-body-gray m-0 mb-[30px]">
          {strings.closingSub}
        </p>
        <a href={strings.aiBuilderUrl} className="btn-primary no-underline">
          {strings.closingCTA}
        </a>
      </div>
    </section>
  );
}