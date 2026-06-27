import React from 'react';
import { strings } from '../lib/strings';
import { Zap, Smartphone, CreditCard } from 'lucide-react';

const FeaturesAndSteps = () => {
  const stepsStrings = strings.en.how_it_works;
  const whyStrings = strings.en.why_strikingly;

  const whyIcons = [
    <Zap className="w-6 h-6" />,
    <Smartphone className="w-6 h-6" />,
    <CreditCard className="w-6 h-6" />
  ];

  return (
    <div className="bg-white">
      {/* How it works */}
      <section className="py-20 border-t border-divider">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h2 className="text-2xl md:text-3xl text-heading-dark mb-14 tracking-tight">
            {stepsStrings.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stepsStrings.steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-brand-purple text-white font-heading font-bold text-lg flex items-center justify-center">
                  {idx + 1}
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-base font-bold text-heading-dark tracking-wider">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed max-w-[280px]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Strikingly */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-2xl md:text-3xl text-center md:text-left text-heading-dark mb-14 tracking-tight">
            {whyStrings.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {whyStrings.items.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-6 text-center md:text-left items-center md:items-start group">
                <div className="w-10 h-10 flex items-center justify-center text-brand-purple">
                  {whyIcons[idx]}
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-base font-bold text-heading-dark tracking-wider group-hover:text-brand-purple transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesAndSteps;
