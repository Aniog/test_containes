import React from 'react';
import strings from '@/data/strings.en';

export default function HowItWorks() {
  const s = strings.howItWorks;
  return (
    <section className="w-full py-[40px]" style={{ backgroundColor: 'var(--light-bg)' }}>
      <div className="section-container">
        <h2 className="font-heading font-bold text-[26px] md:text-[32px] text-center mb-[30px]" style={{ color: 'var(--heading-text)' }}>
          {s.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {s.steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div
                className="w-[48px] h-[48px] rounded-full flex items-center justify-center mb-[15px] font-heading font-bold text-[18px] text-white"
                style={{ background: 'var(--ai-gradient)' }}
              >
                {i + 1}
              </div>
              <h3 className="font-heading font-bold text-[15px] mb-[8px]" style={{ color: 'var(--heading-text)' }}>
                {step.title}
              </h3>
              <p className="text-[13px]" style={{ color: 'var(--body-text)' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
