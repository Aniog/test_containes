import React from 'react';
import { strings } from '@/lib/generators-data';

const HowItWorks = () => {
  const t = strings.en.howItWorks;
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-heading-gray font-heading font-bold text-[26px] md:text-[32px] mb-12 uppercase text-center">
          {t.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {t.steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-brand-purple flex items-center justify-center text-white font-heading font-bold text-xl mb-6">
                {idx + 1}
              </div>
              <h3 className="text-heading-gray font-heading font-bold text-[18px] mb-4 uppercase">
                {step.title}
              </h3>
              <p className="text-body-gray text-[14px] leading-relaxed max-w-[280px]">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
