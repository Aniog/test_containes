import React from 'react';

const icons = [
  <svg key="live" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <circle cx="20" cy="20" r="14" stroke="#8159BB" strokeWidth="2" fill="none" />
    <path d="M14 20 L18 24 L26 16" stroke="#8159BB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="mobile" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <rect x="12" y="4" width="16" height="32" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
    <line x1="12" y1="10" x2="28" y2="10" stroke="#8159BB" strokeWidth="1" />
    <line x1="12" y1="30" x2="28" y2="30" stroke="#8159BB" strokeWidth="1" />
    <circle cx="20" cy="34" r="1.5" fill="#8159BB" />
  </svg>,
  <svg key="free" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <circle cx="20" cy="20" r="14" stroke="#8159BB" strokeWidth="2" fill="none" />
    <text x="20" y="25" textAnchor="middle" fill="#8159BB" fontSize="14" fontWeight="bold" fontFamily="sans-serif">$</text>
    <line x1="14" y1="28" x2="26" y2="28" stroke="#8159BB" strokeWidth="2" />
  </svg>,
];

const WhyStrikingly = ({ heading, items }) => (
  <section className="w-full bg-white py-10 md:py-[40px]">
    <div className="max-w-[1200px] mx-auto px-5">
      <h2 className="text-[26px] md:text-[32px] font-bold text-center mb-10 text-[#4B5056] uppercase">{heading}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {items.map((item, i) => (
          <div key={i} className="text-center">
            <div className="flex justify-center mb-4">{icons[i]}</div>
            <h3 className="font-heading font-bold text-[16px] text-[#4B5056] uppercase mb-2">{item.title}</h3>
            <p className="text-[14px] text-[#636972] leading-[1.5]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyStrikingly;
