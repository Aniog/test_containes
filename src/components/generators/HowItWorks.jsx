import React from 'react';
import { strings } from '@/data/strings';

const t = strings.en;

const HowItWorks = () => (
  <section className="py-10 bg-bg-light">
    <div className="max-w-[1200px] mx-auto px-5">
      <h2 className="font-heading font-bold uppercase text-heading-section text-2xl md:text-3xl leading-tight mb-8 text-center">
        {t.howItWorks.heading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {t.howItWorks.steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-brand-purple text-white flex items-center justify-center font-heading font-bold text-sm mb-4">
              {index + 1}
            </div>
            <h3 className="font-heading font-bold uppercase text-heading-section text-sm mb-2">
              {step.title}
            </h3>
            <p className="text-body-text text-sm leading-normal">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
