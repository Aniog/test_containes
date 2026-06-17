import React from 'react';
import { strings } from '@/data/strings';

const s = strings.en;

const icons = [
  (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <circle cx="18" cy="18" r="14" stroke="#8159BB" strokeWidth="2" fill="none" />
      <path d="M14 18l3 3 5-6" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect x="6" y="10" width="24" height="16" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
      <rect x="10" y="14" width="8" height="8" rx="1" fill="#8159BB" opacity="0.15" />
      <rect x="20" y="14" width="6" height="2" rx="1" fill="#C6C9CD" />
      <rect x="20" y="18" width="6" height="2" rx="1" fill="#C6C9CD" />
    </svg>
  ),
  (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <circle cx="18" cy="18" r="14" stroke="#8159BB" strokeWidth="2" fill="none" />
      <text x="18" y="23" textAnchor="middle" fill="#8159BB" fontSize="16" fontWeight="bold">$</text>
    </svg>
  ),
];

export default function WhyStrikingly() {
  return (
    <section className="py-[40px]">
      <div className="section-wrapper">
        <h2 className="text-[26px] md:text-[32px] text-heading mb-[30px]">
          {s.whyStrikingly.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {s.whyStrikingly.items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-[15px]">
                {icons[i]}
              </div>
              <h3 className="font-heading font-bold text-[15px] text-heading-dark m-0 mb-[8px] uppercase leading-[1.3]">
                {item.title}
              </h3>
              <p className="text-body-text text-[14px] m-0 leading-[1.6] max-w-[300px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
