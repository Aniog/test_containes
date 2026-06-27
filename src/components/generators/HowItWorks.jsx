import React from 'react';

const HowItWorks = ({ heading, steps }) => (
  <section className="w-full bg-[#F4F6F8] py-10 md:py-[40px]">
    <div className="max-w-[1200px] mx-auto px-5">
      <h2 className="text-[26px] md:text-[32px] font-bold text-center mb-10 text-[#4B5056] uppercase">{heading}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {steps.map((step, i) => (
          <div key={i} className="text-center">
            <div className="inline-flex items-center justify-center w-[48px] h-[48px] rounded-full bg-[#8159BB] text-white font-heading font-bold text-[20px] mb-4">
              {i + 1}
            </div>
            <h3 className="font-heading font-bold text-[16px] text-[#4B5056] uppercase mb-2">{step.title}</h3>
            <p className="text-[14px] text-[#636972] leading-[1.5]">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
