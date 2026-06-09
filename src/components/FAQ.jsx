import React, { useEffect, useRef, useState } from 'react';
import { faqItems, strings } from '../data/generators';
import { ChevronDownIcon } from './Icons';

const s = strings.en;

function FaqItem({ item, index }) {
  const [isOpen, setIsOpen] = useState(index === 0);
  const contentRef = useRef(null);
  const btnId = `faq-btn-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div className="border-b border-divider last:border-b-0">
      <h3>
        <button
          type="button"
          id={btnId}
          className="w-full flex items-center justify-between py-[16px] text-left text-[14px] md:text-[15px] font-heading font-bold text-heading-dark tracking-wide bg-transparent border-none cursor-pointer"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen(!isOpen)}
          style={{ textTransform: 'none' }}
        >
          <span className="pr-[20px]">{item.question}</span>
          <span className={`flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
            <ChevronDownIcon />
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? '400px' : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="pb-[16px] pr-[40px]">
          <p className="text-body-gray text-[13px] md:text-[14px] leading-[1.7]">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="bg-light-bg section-padding">
      <div className="section-container">
        <h2 className="text-[22px] md:text-[28px] text-heading-gray text-center mb-[30px]">
          {s.faqHeading}
        </h2>
        <div className="max-w-[720px] mx-auto bg-white border border-card-border rounded-card p-[20px] md:p-[30px]">
          {faqItems.map((item, index) => (
            <FaqItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
