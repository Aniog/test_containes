import React, { useState } from 'react';
import { strings } from '@/strings.en';
import { ChevronDownIcon } from './Icons';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section className="py-10 md:py-12 bg-[#F4F6F8]">
      <div className="section-wrapper max-w-3xl">
        <h2 className="text-[26px] md:text-[32px] text-[#4B5056] mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
          {strings.faq.heading}
        </h2>
        <div className="flex flex-col gap-0">
          {strings.faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            return (
              <div key={i} className="border-b border-[#E2E4E7]">
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen ? 'true' : 'false'}
                  aria-controls={panelId}
                  className="w-full flex items-center justify-between py-5 text-left gap-4"
                >
                  <span className="text-sm font-bold text-[#4B5056]" style={{ fontFamily: 'var(--font-heading)' }}>
                    {item.question}
                  </span>
                  <ChevronDownIcon
                    className={`flex-shrink-0 text-[#8159BB] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  id={panelId}
                  role="region"
                  className="faq-answer"
                  data-open={isOpen ? 'true' : 'false'}
                >
                  <div className="pb-5 text-sm text-[#636972] leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
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
