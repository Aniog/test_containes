import React, { useState, useEffect } from 'react';
import { faqData, t } from '../../data/generatorsData';
import { ChevronDownIcon } from './Icons';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [isJsEnabled, setIsJsEnabled] = useState(false);

  useEffect(() => {
    setIsJsEnabled(true);
  }, []);

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-10 md:py-16 bg-light-bg">
      <div className="max-w-content mx-auto px-5">
        <h2 className="section-heading text-center mb-10">{t('faqHeading')}</h2>
        <div className="max-w-2xl mx-auto space-y-3">
          {faqData.map((item, index) => {
            // SSR: only first item open; JS: controlled by openIndex
            const isOpen = isJsEnabled ? openIndex === index : index === 0;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={index}
                className="bg-white border border-card-border rounded"
              >
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => isJsEnabled && toggleItem(index)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-light-bg/50 transition-colors"
                >
                  <span className="font-heading text-heading-darker text-sm pr-4">
                    {item.question}
                  </span>
                  <ChevronDownIcon
                    className={`flex-shrink-0 text-brand-purple transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={
                    isJsEnabled
                      ? `overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                        }`
                      : ''
                  }
                >
                  <div className="px-5 pb-4 text-body-gray text-sm leading-relaxed space-y-2">
                    {item.answer.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
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
