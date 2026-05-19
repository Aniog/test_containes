import React, { useState } from 'react';
import { strings } from '@/data/strings';

const t = strings.en;

const ChevronIcon = ({ isOpen }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
  >
    <path d="M5 8 L10 13 L15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-10 bg-bg-light">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading font-bold uppercase text-heading-section text-2xl md:text-3xl leading-tight mb-8 text-center">
          {t.faq.heading}
        </h2>
        <div className="max-w-[800px] mx-auto">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={index}
                className="border-b border-divider"
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between py-5 text-start bg-transparent border-none text-heading-section font-semibold text-sm md:text-base hover:text-brand-purple transition-colors"
                  >
                    <span>{item.question}</span>
                    <ChevronIcon isOpen={isOpen} />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-[500px] opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-body-text text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
