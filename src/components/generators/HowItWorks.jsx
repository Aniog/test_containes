import React from 'react';
import { strings } from '@/data/strings';

const s = strings.en;

export default function HowItWorks() {
  return (
    <section className="py-[40px] bg-light-bg">
      <div className="section-wrapper">
        <h2 className="text-[26px] md:text-[32px] text-heading mb-[30px]">
          {s.howItWorks.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {s.howItWorks.steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div
                className="w-[48px] h-[48px] rounded-full flex items-center justify-center mb-[15px]"
                style={{ background: 'rgba(129,89,187,0.1)' }}
              >
                <span className="font-heading font-bold text-[20px] text-brand-purple">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-heading font-bold text-[15px] text-heading-dark m-0 mb-[8px] uppercase leading-[1.3]">
                {step.title}
              </h3>
              <p className="text-body-text text-[14px] m-0 leading-[1.6] max-w-[300px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
