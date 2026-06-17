import React from 'react';
import strings from '@/data/strings.en';

const icons = [
  <svg aria-hidden="true" key="bolt" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M20 4 L8 20 H16 L14 32 L28 14 H20 Z" stroke="#8159BB" strokeWidth="2" fill="#8159BB" opacity="0.1" />
  </svg>,
  <svg aria-hidden="true" key="mobile" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="10" y="4" width="16" height="28" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
    <line x1="10" y1="10" x2="26" y2="10" stroke="#8159BB" strokeWidth="1" />
    <circle cx="18" cy="28" r="1.5" fill="#8159BB" />
  </svg>,
  <svg aria-hidden="true" key="free" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="13" stroke="#8159BB" strokeWidth="2" fill="none" />
    <text x="18" y="22" textAnchor="middle" fontSize="12" fontWeight="700" fill="#8159BB" fontFamily="Josefin Sans, sans-serif">$</text>
    <line x1="12" y1="26" x2="24" y2="26" stroke="#8159BB" strokeWidth="2" />
  </svg>,
];

export default function WhyStrikingly() {
  const s = strings.whyStrikingly;
  return (
    <section className="w-full py-[40px]" style={{ backgroundColor: 'var(--white)' }}>
      <div className="section-container">
        <h2 className="font-heading font-bold text-[26px] md:text-[32px] text-center mb-[30px]" style={{ color: 'var(--heading-text)' }}>
          {s.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {s.items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-[15px]">
                {icons[i]}
              </div>
              <h3 className="font-heading font-bold text-[15px] mb-[8px]" style={{ color: 'var(--heading-text)' }}>
                {item.title}
              </h3>
              <p className="text-[13px]" style={{ color: 'var(--body-text)' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
