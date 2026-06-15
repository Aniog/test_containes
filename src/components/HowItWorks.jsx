import React from 'react';
import { strings } from '@/lib/strings';

export const HowItWorks = () => {
  const t = strings.en.howItWorks;

  return (
    <section className="bg-[var(--light-bg)]">
      <div className="container-custom">
        <h2 className="section-title text-center">{t.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] mt-[40px]">
          {t.steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left gap-[15px]">
              <div className="w-[40px] h-[40px] rounded-full border-2 border-[var(--brand-purple)] text-[var(--brand-purple)] flex items-center justify-center font-heading text-[18px] font-bold">
                {idx + 1}
              </div>
              <h3 className="text-[16px] font-bold text-[var(--hero-h1-dark)]">
                {step.title}
              </h3>
              <p className="text-[14px] text-[var(--body-text)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
