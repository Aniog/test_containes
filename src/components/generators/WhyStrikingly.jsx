import React from 'react';
import strings from '@/data/strings.en.js';

function BoltIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M16 3L7 15h5l-2 10 9-12h-5l2-10z" stroke="#8159BB" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="7" y="2" width="14" height="24" rx="3" stroke="#8159BB" strokeWidth="1.8" />
      <line x1="11" y1="22" x2="17" y2="22" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="10" y="6" width="8" height="11" rx="1" fill="#8159BB" opacity="0.12" />
    </svg>
  );
}

function FreeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="11" stroke="#8159BB" strokeWidth="1.8" />
      <path d="M10 16c0-2.5 2-4 4-4s4 1.5 4 4" stroke="#8159BB" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="14" cy="11" r="1.5" fill="#8159BB" />
      <path d="M12 18h4" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const ICONS = [BoltIcon, MobileIcon, FreeIcon];

export default function WhyStrikingly() {
  return (
    <section className="py-[40px]" style={{ background: '#FFFFFF' }}>
      <div className="max-content section-padding">
        <h2 className="text-[26px] md:text-[32px] text-heading-gray m-0 mb-[40px] text-center">
          {strings.whyHeading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {strings.whyItems.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div key={i} className="flex flex-col items-center text-center gap-[12px] max-w-[320px] mx-auto">
                <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center" style={{ background: '#F4F0FC' }}>
                  <Icon />
                </div>
                <h3 className="font-heading font-bold text-[15px] uppercase text-heading-gray m-0 leading-[1.2]">
                  {item.title}
                </h3>
                <p className="text-[14px] text-body-gray m-0 leading-relaxed">
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