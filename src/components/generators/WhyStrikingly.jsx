import React from 'react';
import { strings } from '../../strings';

const s = strings.en.whyStrikingly;

const icons = [
  <svg aria-hidden="true" key="bolt" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M16 4L8 18H16L14 28L24 14H16L16 4Z" stroke="#8159BB" strokeWidth="2" strokeLinejoin="round" fill="none"/>
  </svg>,
  <svg aria-hidden="true" key="mobile" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="9" y="4" width="14" height="24" rx="3" stroke="#8159BB" strokeWidth="2" fill="none"/>
    <line x1="13" y1="24" x2="19" y2="24" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  <svg aria-hidden="true" key="free" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="11" stroke="#8159BB" strokeWidth="2" fill="none"/>
    <path d="M12 16H20M16 12V20" stroke="#8159BB" strokeWidth="2" strokeLinecap="round"/>
  </svg>,
];

export default function WhyStrikingly() {
  return (
    <section className="py-10 md:py-16">
      <div className="max-w-content mx-auto px-5">
        <h2 className="section-heading text-2xl md:text-3xl mb-10">{s.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {s.items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center md:items-start md:text-left">
              <div className="mb-4">{icons[i]}</div>
              <h3 className="font-heading font-bold text-heading text-sm mb-2" style={{ textTransform: 'uppercase' }}>
                {item.title}
              </h3>
              <p className="text-body-text text-sm leading-relaxed m-0">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
