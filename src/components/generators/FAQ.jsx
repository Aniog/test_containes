import React, { useState } from 'react';
import strings from '@/data/strings.en.js';

function FAQItem({ item, index, isOpen, toggle }) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-btn-${index}`;

  return (
    <div className="border-b border-subtle-divider">
      <h3 className="m-0">
        <button
          id={buttonId}
          type="button"
          onClick={toggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="w-full flex items-center justify-between py-[16px] px-0 bg-transparent border-none cursor-pointer font-heading font-bold text-[15px] uppercase text-hero-dark text-start leading-[1.3] focus-ring"
          style={{ borderRadius: '3px' }}
        >
          <span>{item.q}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="shrink-0 ms-[12px] transition-transform duration-200"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <path d="M4 6L8 10L12 6" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className="overflow-hidden transition-all duration-200"
        style={{ maxHeight: isOpen ? '500px' : '0px' }}
      >
        <div className="pb-[16px] text-[14px] text-body-gray leading-relaxed font-body" style={{ textTransform: 'none' }}>
          {item.a}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-[40px]" style={{ background: '#F4F6F8' }}>
      <div className="max-content section-padding" style={{ maxWidth: '800px' }}>
        <h2 className="text-[26px] md:text-[32px] text-heading-gray m-0 mb-[30px] text-center">
          {strings.faqHeading}
        </h2>
        <div>
          {strings.faqItems.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              toggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}