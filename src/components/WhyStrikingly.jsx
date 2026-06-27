import React from 'react';
import { Zap, Smartphone, CheckCircle } from 'lucide-react';
import { strings } from '../data/generators';

const icons = [
  <Zap size={32} className="text-brand-purple" />,
  <Smartphone size={32} className="text-brand-purple" />,
  <CheckCircle size={32} className="text-brand-purple" />
];

const WhyStrikingly = () => {
  const { whyStrikingly } = strings.en;

  return (
    <section className="py-16 bg-bg-light">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-2xl md:text-3xl font-heading text-center mb-12">
          {whyStrikingly.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyStrikingly.features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
              <div aria-hidden="true" className="mb-2">
                {icons[index]}
              </div>
              <h3 className="text-lg font-heading font-bold text-hero-line1">
                {feature.title}
              </h3>
              <p className="text-sm text-body-text">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyStrikingly;
