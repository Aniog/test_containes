import React, { useState, useEffect } from 'react';
import { strings } from '@/data/strings';

const s = strings.en;

function FaqItem({ item, index, defaultExpanded }) {
  // Start expanded so all answers are visible without JS (progressive enhancement)
  const [expanded, setExpanded] = useState(true);
  const [mounted, setMounted] = useState(false);
  const id = `faq-answer-${index}`;

  // After mount, collapse all except the first (progressive enhancement)
  useEffect(() => {
    setMounted(true);
    setExpanded(defaultExpanded);
  }, [defaultExpanded]);

  return (
    <div className="border-b border-divider last:border-b-0">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between py-[15px] px-0 bg-transparent border-none text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 rounded-[2px]"
        aria-expanded={expanded}
        aria-controls={id}
      >
        <span className="font-heading font-bold text-[14px] md:text-[15px] text-heading-dark uppercase pr-[20px] leading-[1.4]">
          {item.question}
        </span>
        <svg
          className="flex-shrink-0 text-brand-purple transition-transform duration-200"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        id={id}
        role="region"
        className="overflow-hidden transition-all duration-200"
        style={{
          maxHeight: expanded || !mounted ? '500px' : '0',
          opacity: expanded || !mounted ? 1 : 0,
        }}
      >
        <div className="pb-[15px] text-body-text text-[14px] leading-[1.7]">
          {item.answer}
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section className="py-[40px] bg-light-bg">
      <div className="section-wrapper">
        <h2 className="text-[26px] md:text-[32px] text-heading mb-[25px]">
          {s.faq.heading}
        </h2>
        <div className="max-w-[720px] border-t border-divider">
          {s.faq.items.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              index={i}
              defaultExpanded={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
