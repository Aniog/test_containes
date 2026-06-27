import React from 'react';
import strings from '../strings';

const lightningIcon = (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M13 2L3 14h9l-2 8 10-12h-9l2-8z" stroke="#8159BB" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const mobileIcon = (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="5" y="2" width="14" height="20" rx="3" stroke="#8159BB" strokeWidth="1.5" />
    <line x1="12" y1="18" x2="12" y2="18.01" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const freeIcon = (
  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#8159BB" strokeWidth="1.5" />
    <path d="M8 12l3 3 5-6" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function WhyStrikingly() {
  const t = strings.en;
  const items = [
    { icon: lightningIcon, title: t.why1Title, desc: t.why1Desc },
    { icon: mobileIcon, title: t.why2Title, desc: t.why2Desc },
    { icon: freeIcon, title: t.why3Title, desc: t.why3Desc },
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-5 py-[60px]">
      <h2 className="text-[26px] md:text-[32px] font-heading font-bold text-[#4B5056] mb-[40px] text-center">
        {t.whyHeading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-[15px]">
            <div className="w-[48px] h-[48px] flex items-center justify-center flex-shrink-0">
              {item.icon}
            </div>
            <div>
              <span className="font-heading font-bold text-[14px] text-[#2E2E2F] block mb-[5px]">
                {item.title}
              </span>
              <p className="text-[14px] text-[#636972] leading-[1.5] m-0 max-w-[280px] mx-auto">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
