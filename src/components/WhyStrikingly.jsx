import React from 'react';
import { strings } from '@/lib/strings';
import { Zap, Smartphone, DollarSign } from 'lucide-react';

const icons = [Zap, Smartphone, DollarSign];

export const WhyStrikingly = () => {
  const t = strings.en.whyStrikingly;

  return (
    <section className="bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">{t.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] mt-[40px]">
          {t.claims.map((claim, idx) => {
            const Icon = icons[idx];
            return (
              <div key={idx} className="flex flex-col items-center text-center gap-[15px]">
                <Icon className="w-[30px] h-[30px] text-[var(--brand-purple)]" />
                <h3 className="text-[16px] font-bold text-[var(--hero-h1-dark)]">
                  {claim.title}
                </h3>
                <p className="text-[14px] text-[var(--body-text)]">
                  {claim.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
