import React from 'react';
import { strings } from '@/data/strings';

const t = strings.en;

const icons = [
  // Zap / Lightning icon for "Live in Seconds"
  <svg key="zap" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M15 3 L6 16 H13 L12 25 L22 12 H15 Z" stroke="#8159BB" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>,
  // Mobile icon for "Mobile by Default"
  <svg key="mobile" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <rect x="7" y="3" width="14" height="22" rx="3" stroke="#8159BB" strokeWidth="1.5" />
    <line x1="7" y1="7" x2="21" y2="7" stroke="#8159BB" strokeWidth="1.5" />
    <line x1="7" y1="21" x2="21" y2="21" stroke="#8159BB" strokeWidth="1.5" />
    <circle cx="14" cy="23.5" r="1" fill="#8159BB" />
  </svg>,
  // Gift / Free icon for "Free to Start"
  <svg key="free" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <rect x="4" y="12" width="20" height="13" rx="2" stroke="#8159BB" strokeWidth="1.5" />
    <rect x="3" y="8" width="22" height="5" rx="2" stroke="#8159BB" strokeWidth="1.5" />
    <line x1="14" y1="8" x2="14" y2="25" stroke="#8159BB" strokeWidth="1.5" />
    <path d="M14 8 C14 8 10 4 8 5 C6 6 8 8 14 8" stroke="#8159BB" strokeWidth="1.5" />
    <path d="M14 8 C14 8 18 4 20 5 C22 6 20 8 14 8" stroke="#8159BB" strokeWidth="1.5" />
  </svg>,
];

const WhyStrikingly = () => (
  <section className="py-10 bg-white">
    <div className="max-w-[1200px] mx-auto px-5">
      <h2 className="font-heading font-bold uppercase text-heading-section text-2xl md:text-3xl leading-tight mb-8 text-center">
        {t.whyStrikingly.heading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {t.whyStrikingly.items.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="mb-4">
              {icons[index]}
            </div>
            <h3 className="font-heading font-bold uppercase text-heading-section text-sm mb-2">
              {item.title}
            </h3>
            <p className="text-body-text text-sm leading-normal">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyStrikingly;
