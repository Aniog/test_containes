import React from 'react';
import { strings } from '@/lib/generators-data';
import { Zap, Smartphone, CheckCircle } from 'lucide-react';

const icons = [Zap, Smartphone, CheckCircle];

const WhyStrikingly = () => {
  const t = strings.en.whyStrikingly;
  
  return (
    <section className="py-20 bg-bg-light">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-heading-gray font-heading font-bold text-[26px] md:text-[32px] mb-12 uppercase text-center">
          {t.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {t.features.map((feature, idx) => {
            const Icon = icons[idx];
            return (
              <div key={idx} className="bg-white p-8 border border-card-border rounded-[3px] flex flex-col items-center text-center">
                <div className="text-brand-purple mb-6">
                  {Icon && <Icon size={32} aria-hidden="true" />}
                </div>
                <h3 className="text-heading-gray font-heading font-bold text-[18px] mb-4 uppercase">
                  {feature.title}
                </h3>
                <p className="text-body-gray text-[14px] leading-relaxed">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyStrikingly;
