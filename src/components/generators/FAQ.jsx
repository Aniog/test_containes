import { useState } from 'react';

function FAQItem({ item, isOpen, onToggle, index }) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="border-b border-divider">
      <h3 className="m-0">
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="w-full flex items-center justify-between py-[20px] px-0 bg-transparent border-none cursor-pointer text-left"
        >
          <span className="font-heading text-[14px] text-heading-dark">
            {item.question}
          </span>
          <svg
            width="20" height="20" viewBox="0 0 20 20" fill="none"
            aria-hidden="true"
            className={`shrink-0 ml-[10px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          >
            <path d="M5 8L10 13L15 8" stroke="#636972" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-body-text text-[14px] leading-relaxed m-0 pb-[20px]">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ({ t }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-[40px]">
      <div className="max-w-[720px] mx-auto px-5">
        <h2 className="font-heading text-[26px] md:text-[30px] text-heading m-0 mb-[30px] text-center">
          {t.faq.heading}
        </h2>
        <div className="border-t border-divider">
          {t.faq.items.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
