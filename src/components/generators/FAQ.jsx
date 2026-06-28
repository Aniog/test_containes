import React, { useState, useCallback } from 'react';
import { ChevronDownIcon } from './Icons';
import strings from '../../strings';

const s = strings.en;

const FAQItem = ({ item, index, isOpen, onToggle }) => {
  const id = `faq-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div className="border-b border-[var(--color-divider)]">
      <h3>
        <button
          type="button"
          className="flex items-center justify-between w-full py-[15px] text-left text-[15px] font-bold text-[var(--color-heading-text)] uppercase"
          style={{ fontFamily: 'var(--font-heading)' }}
          aria-expanded={isOpen}
          aria-controls={panelId}
          id={id}
          onClick={() => onToggle(index)}
        >
          <span className="pr-[20px]">{item.q}</span>
          <ChevronDownIcon
            className={`flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={id}
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? '400px' : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="pb-[20px] text-[14px] text-[var(--color-body-text)] leading-[1.7]">
          {item.a.split('\n\n').map((paragraph, i) => (
            <p key={i} className={i > 0 ? 'mt-[12px]' : ''}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = useCallback((index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  }, []);

  return (
    <section className="py-[40px]">
      <div className="content-container max-w-[760px]">
        <h2 className="text-[24px] md:text-[28px] text-[var(--color-heading-text)] text-center mb-[30px]">
          {s.faqTitle}
        </h2>
        <div className="border-t border-[var(--color-divider)]">
          {s.faqItems.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
