import { useState, useCallback } from 'react';
import strings from '@/data/strings';
import { ChevronDown } from './Icons';

const s = strings.en.faq;

function FaqItem({ question, answer, isOpen, onToggle, index }) {
  const id = `faq-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div className="border-b border-divider last:border-b-0">
      <h3 className="m-0">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          id={id}
          className="w-full flex items-center justify-between gap-4 py-4 px-0 bg-transparent border-none text-left cursor-pointer hover:text-brand-purple transition-colors"
        >
          <span className="font-heading font-bold text-[14px] md:text-[15px] uppercase text-text-heading leading-snug">
            {question}
          </span>
          <ChevronDown
            className={`shrink-0 text-text-body transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={id}
        className="overflow-hidden transition-all duration-200"
        style={{
          maxHeight: isOpen ? '500px' : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="pb-4 text-text-body text-[14px] leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = useCallback((index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  }, []);

  return (
    <section className="bg-light-bg py-10 md:py-[40px]">
      <div className="max-w-[720px] mx-auto px-5">
        <h2 className="font-heading font-bold uppercase text-[24px] md:text-[30px] text-text-heading leading-[1.2] m-0 mb-6 text-center">
          {s.heading}
        </h2>
        <div className="bg-white border border-card-border rounded-card p-5 md:p-6">
          {s.questions.map((item, index) => (
            <FaqItem
              key={index}
              index={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
