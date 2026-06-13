import { useState, useRef, useEffect } from 'react';
import strings from '../strings.en.js';

const faqItems = [
  { q: strings.faq1Q, a: strings.faq1A },
  { q: strings.faq2Q, a: strings.faq2A },
  { q: strings.faq3Q, a: strings.faq3A },
  { q: strings.faq4Q, a: strings.faq4A },
  { q: strings.faq5Q, a: strings.faq5A },
  { q: strings.faq6Q, a: strings.faq6A },
];

function FaqItem({ item, index }) {
  const [open, setOpen] = useState(index === 0);
  const contentRef = useRef(null);
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-btn-${index}`;

  return (
    <div className="border-b border-subtle-divider">
      <button
        id={buttonId}
        className="w-full flex items-center justify-between py-[15px] text-start bg-transparent border-none cursor-pointer font-heading font-bold text-[16px] uppercase text-heading-dark"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span>{item.q}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className={`flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M4 6l4 4 4-4" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        ref={contentRef}
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? (contentRef.current?.scrollHeight || 500) + 'px' : '0px',
        }}
      >
        <div className="pb-[15px] text-[14px] text-body-gray leading-relaxed">
          {item.a}
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section className="py-10 md:py-[40px] bg-light-bg">
      <div className="max-w-content mx-auto px-5">
        <h2 className="text-[26px] md:text-[30px] text-heading-gray m-0 mb-[30px] text-center">
          {strings.faqHeading}
        </h2>
        <div className="max-w-[720px] mx-auto">
          {faqItems.map((item, i) => (
            <FaqItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}