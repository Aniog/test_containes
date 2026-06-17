import React, { useState, useEffect } from 'react';
import { strings } from '../../strings';

const s = strings.en.faq;

const ChevronIcon = ({ expanded }) => (
  <svg
    aria-hidden="true"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    className="flex-shrink-0 transition-transform duration-200"
    style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
  >
    <path d="M5 8L10 13L15 8" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function FaqItem({ item, index, defaultOpen }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [jsReady, setJsReady] = useState(false);
  const questionId = `faq-q-${index}`;
  const answerId = `faq-a-${index}`;

  useEffect(() => {
    setJsReady(true);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-subtle-divider">
      <button
        id={questionId}
        type="button"
        className="w-full flex items-center justify-between py-5 text-left bg-transparent border-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={handleToggle}
      >
        <span className="font-heading font-bold text-heading text-sm pr-4" style={{ textTransform: 'uppercase' }}>
          {item.question}
        </span>
        <ChevronIcon expanded={isOpen} />
      </button>
      <div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        className="faq-answer"
        style={jsReady ? { maxHeight: isOpen ? '500px' : '0', opacity: isOpen ? 1 : 0, overflow: 'hidden', transition: 'max-height 0.3s ease, opacity 0.3s ease' } : undefined}
      >
        <div className="pb-5 text-body-text text-sm leading-relaxed">
          {item.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-10 md:py-16 bg-light-bg">
      <div className="max-w-content mx-auto px-5">
        <h2 className="section-heading text-2xl md:text-3xl mb-8">{s.heading}</h2>
        <div className="max-w-3xl">
          {s.items.map((item, i) => (
            <FaqItem key={i} item={item} index={i} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
