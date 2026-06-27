import React from 'react';
import { strings } from '@/strings.en';
import { LightningIcon, MobileIcon, FreeIcon } from './Icons';

const icons = [LightningIcon, MobileIcon, FreeIcon];

export default function WhyStrikingly() {
  return (
    <section className="py-10 md:py-12">
      <div className="section-wrapper">
        <h2 className="text-[26px] md:text-[32px] text-[#4B5056] mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
          {strings.whyStrikingly.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strings.whyStrikingly.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="flex flex-col items-center text-center gap-3">
                <Icon />
                <h3 className="text-sm font-bold text-[#4B5056]" style={{ fontFamily: 'var(--font-heading)' }}>
                  {item.title}
                </h3>
                <p className="text-[#636972] text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
