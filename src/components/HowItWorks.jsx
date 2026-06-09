import React from 'react';
import { howItWorksSteps, strings } from '../data/generators';
import { StepIcon } from './Icons';

const s = strings.en;

export default function HowItWorks() {
  return (
    <section className="bg-light-bg section-padding">
      <div className="section-container">
        <h2 className="text-[22px] md:text-[28px] text-heading-gray text-center mb-[30px]">
          {s.howItWorksHeading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {howItWorksSteps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <StepIcon number={step.number} />
              <h3 className="text-[14px] text-heading-gray mt-[16px] mb-[8px] tracking-wide">
                {step.title}
              </h3>
              <p className="text-body-gray text-[13px] leading-[1.6]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
