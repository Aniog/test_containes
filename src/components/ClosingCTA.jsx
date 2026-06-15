import React from 'react';
import { strings } from '@/lib/strings';

export const ClosingCTA = () => {
  const t = strings.en.closingCTA;

  return (
    <section className="bg-white py-[60px] md:py-[80px]">
      <div className="container-custom text-center flex flex-col items-center gap-[20px]">
        <h2 className="text-[32px] md:text-[40px] font-bold text-[var(--hero-h1-dark)]">
          {t.title}
        </h2>
        <p className="text-[var(--body-text)] text-[16px] max-w-[500px]">
          {t.subtitle}
        </p>
        <a href="/s/ai_site_builder" className="btn btn-big btn-primary h-[44px] px-[30px]">
          {t.button}
        </a>
      </div>
    </section>
  );
};
