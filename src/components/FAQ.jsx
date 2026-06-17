import React, { useState } from 'react';
import strings from '@/data/strings.en';

export default function FAQ() {
  const s = strings.faq;
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section className="w-full py-[40px]" style={{ backgroundColor: 'var(--light-bg)' }}>
      <div className="section-container max-w-[800px]">
        <h2 className="font-heading font-bold text-[26px] md:text-[32px] text-center mb-[30px]" style={{ color: 'var(--heading-text)' }}>
          {s.heading}
        </h2>
        <div className="flex flex-col gap-0">
          {s.items.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <div
                key={i}
                className="border-b"
                style={{ borderColor: 'var(--divider)' }}
              >
                <button
                  id={buttonId}
                  className="w-full flex items-center justify-between py-[15px] px-0 bg-transparent border-none text-left"
                  style={{ color: 'var(--heading-text)' }}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(i)}
                >
                  <span className="font-heading font-bold text-[14px] pr-[20px]">
                    {item.question}
                  </span>
                  <svg
                    aria-hidden="true"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="flex-shrink-0 transition-transform duration-200"
                    style={{
                      color: 'var(--brand-purple)',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <path d="M5 8 L10 13 L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`faq-answer ${isOpen ? 'expanded' : 'collapsed'}`}
                >
                  <div className="pb-[15px] text-[13px] leading-[1.6]" style={{ color: 'var(--body-text)' }}>
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
