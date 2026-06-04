import React from 'react';
import strings from '@/data/strings.en.js';

function StepCircle({ number }) {
  return (
    <div
      className="w-[48px] h-[48px] rounded-full flex items-center justify-center shrink-0"
      style={{ background: 'linear-gradient(135deg, #7671FF, #CB0C9F)' }}
    >
      <span className="font-heading font-bold text-[20px] text-white leading-none">{number}</span>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="py-[40px]" style={{ background: '#F4F6F8' }}>
      <div className="max-content section-padding">
        <h2 className="text-[26px] md:text-[32px] text-heading-gray m-0 mb-[40px] text-center">
          {strings.howHeading}
        </h2>
        <div className="flex flex-col md:flex-row gap-[30px] justify-center">
          {strings.howSteps.map((step, i) => (
            <div key={i} className="flex-1 flex flex-col items-center text-center gap-[15px] max-w-[320px] mx-auto">
              <StepCircle number={i + 1} />
              <h3 className="font-heading font-bold text-[15px] uppercase text-heading-gray m-0 leading-[1.2]">
                {step.title}
              </h3>
              <p className="text-[14px] text-body-gray m-0 leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}