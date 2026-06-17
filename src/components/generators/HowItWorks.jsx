import React from 'react';
import { strings } from '@/lib/strings.en';

const HowItWorks = () => {
  const { en } = strings;
  return (
    <section className="bg-light-bg py-16 md:py-20 lg:py-24">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl mb-12 text-center">{en.howItWorks.heading}</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {en.howItWorks.steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-sm mx-auto">
              <div className="w-12 h-12 rounded-full bg-[#8159BB] text-white flex items-center justify-center font-heading text-lg mb-6">
                {index + 1}
              </div>
              <h3 className="text-lg text-heading-text mb-2 font-heading">{step.title}</h3>
              <p className="text-[#636972] text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
