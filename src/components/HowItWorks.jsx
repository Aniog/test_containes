import React from 'react';
import { strings } from '../data/generators';

const HowItWorks = () => {
  const { howItWorks } = strings.en;

  return (
    <section className="py-16 bg-white border-y border-divider">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-2xl md:text-3xl font-heading text-center mb-12">
          {howItWorks.title}
        </h2>
        
        <div className="flex flex-col md:flex-row gap-10 md:gap-5">
          {howItWorks.steps.map((step, index) => (
            <div key={index} className="flex-1 flex flex-col items-center text-center px-4">
              <div className="w-12 h-12 rounded-full bg-brand-purple flex items-center justify-center text-white font-heading text-xl mb-6">
                {index + 1}
              </div>
              <h3 className="text-lg font-heading font-bold text-hero-line1 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-body-text">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
