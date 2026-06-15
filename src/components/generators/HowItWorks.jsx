import React from 'react';
import { strings } from '../../constants/strings';

const HowItWorks = () => {
  const { howItWorks } = strings.en;

  return (
    <section className="container-custom py-[60px] md:py-[80px]">
      <div className="text-center mb-[50px]">
        <h2 className="text-[26px] md:text-[32px] text-[#4B5056]">{howItWorks.title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {howItWorks.steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="w-[40px] h-[40px] rounded-full bg-[#8159BB] text-white flex items-center justify-center font-bold text-[18px] mb-5">
              {idx + 1}
            </div>
            <h3 className="text-[14px] font-bold text-[#4B5056] mb-3 uppercase tracking-wider">
              {step.title}
            </h3>
            <p className="text-[#636972] text-[14px] leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
