import React from 'react';
import strings from '../../strings';

const s = strings.en;

const ClosingCTA = () => (
  <section className="py-[50px] bg-white">
    <div className="content-container text-center">
      <h2 className="text-[24px] md:text-[32px] text-[var(--color-heading-text)]">
        {s.closingTitle}
      </h2>
      <p className="mt-[10px] text-[15px] text-[var(--color-body-text)] max-w-[440px] mx-auto">
        {s.closingSub}
      </p>
      <div className="mt-[25px]">
        <a
          href={s.builderPath}
          className="ai-gradient-btn inline-flex items-center justify-center h-[44px] px-[30px] rounded-[4px] font-bold text-[14px] uppercase tracking-wide whitespace-nowrap"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {s.closingCta}
        </a>
      </div>
    </div>
  </section>
);

export default ClosingCTA;
