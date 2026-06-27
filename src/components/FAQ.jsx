import React, { useState, useRef, useEffect } from 'react';
import strings from '../strings';

const plusIcon = (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 3v10M3 8h10" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function FAQ() {
  const t = strings.en;
  const faqs = [
    { q: t.faqQ1, a: t.faqA1 },
    { q: t.faqQ2, a: t.faqA2 },
    { q: t.faqQ3, a: t.faqA3 },
    { q: t.faqQ4, a: t.faqA4 },
    { q: t.faqQ5, a: t.faqA5 },
    { q: t.faqQ6, a: t.faqA6 },
  ];

  const [openIndex, setOpenIndex] = useState(0);
  const panelRefs = useRef([]);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? -1 : i));
  };

  return (
    <section className="max-w-[760px] mx-auto px-5 py-[60px]">
      <h2 className="text-[26px] md:text-[32px] font-heading font-bold text-[#4B5056] mb-[30px]">
        {t.faqHeading}
      </h2>
      {faqs.map((faq, i) => (
        <div key={i} className="faq-item">
          <button
            type="button"
            className="faq-button"
            aria-expanded={openIndex === i}
            aria-controls={`faq-panel-${i}`}
            onClick={() => toggle(i)}
          >
            <span>{faq.q}</span>
            <span className="faq-icon">{plusIcon}</span>
          </button>
          <div
            id={`faq-panel-${i}`}
            className={`faq-panel${openIndex === i ? ' open' : ''}`}
            ref={(el) => { panelRefs.current[i] = el; }}
            role="region"
            aria-labelledby={`faq-btn-${i}`}
          >
            <div className="faq-panel-inner">{faq.a}</div>
          </div>
        </div>
      ))}
    </section>
  );
}
