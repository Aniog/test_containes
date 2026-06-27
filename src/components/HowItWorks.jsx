import React from 'react';
import strings from '../strings';

export default function HowItWorks() {
  const t = strings.en;
  const steps = [
    { title: t.howStep1Title, desc: t.howStep1Desc },
    { title: t.howStep2Title, desc: t.howStep2Desc },
    { title: t.howStep3Title, desc: t.howStep3Desc },
  ];

  return (
    <section className="bg-[#F4F6F8] py-[60px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-[26px] md:text-[32px] font-heading font-bold text-[#4B5056] mb-[40px] text-center">
          {t.howHeading}
        </h2>
        <div className="flex flex-col md:flex-row gap-[30px]">
          {steps.map((step, i) => (
            <div key={i} className="flex-1 flex flex-col items-center text-center gap-[15px]">
              {/* Numbered circle */}
              <div
                className="w-[48px] h-[48px] rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #7671FF, #CB0C9F)' }}
              >
                <span className="font-heading font-bold text-[18px] text-white">{i + 1}</span>
              </div>
              <div>
                <span className="font-heading font-bold text-[14px] text-[#2E2E2F] block mb-[5px]">
                  {step.title}
                </span>
                <p className="text-[14px] text-[#636972] leading-[1.5] m-0 max-w-[280px] mx-auto">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
