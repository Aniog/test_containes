import React from 'react';
import strings from '../../strings';

const s = strings.en;

const steps = [
  { num: 1, title: s.step1Title, desc: s.step1Desc },
  { num: 2, title: s.step2Title, desc: s.step2Desc },
  { num: 3, title: s.step3Title, desc: s.step3Desc },
];

const HowItWorks = () => (
  <section className="py-[40px]">
    <div className="content-container">
      <h2 className="text-[24px] md:text-[28px] text-[var(--color-heading-text)] text-center mb-[30px]">
        {s.howTitle}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
        {steps.map((step) => (
          <div key={step.num} className="text-center">
            <div
              className="inline-flex items-center justify-center w-[44px] h-[44px] rounded-full text-white text-[18px] font-bold mb-[15px]"
              style={{
                background: 'linear-gradient(135deg, #8159BB, #7671FF)',
                fontFamily: 'var(--font-heading)',
              }}
            >
              {step.num}
            </div>
            <h3
              className="text-[14px] font-bold text-[var(--color-heading-text)] uppercase mb-[8px]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {step.title}
            </h3>
            <p className="text-[14px] text-[var(--color-body-text)] leading-[1.6] max-w-[300px] mx-auto">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
