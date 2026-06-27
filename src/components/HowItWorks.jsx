import React from 'react';
import { strings } from '@/strings.en';
import { StepNumber } from './Icons';

export default function HowItWorks() {
  return (
    <section className="py-10 md:py-12 bg-[#F4F6F8]">
      <div className="section-wrapper">
        <h2 className="text-[26px] md:text-[32px] text-[#4B5056] mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
          {strings.howItWorks.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strings.howItWorks.steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3">
              <StepNumber number={i + 1} />
              <h3 className="text-sm font-bold text-[#4B5056]" style={{ fontFamily: 'var(--font-heading)' }}>
                {step.title}
              </h3>
              <p className="text-[#636972] text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
