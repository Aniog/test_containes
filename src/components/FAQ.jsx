import React, { useState } from 'react';
import { strings } from '../data/strings';

const s = strings.en;

function FaqItem({ item, index, isOpen, onToggle }) {
  const id = `faq-item-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div className="faq-item">
      <button
        id={id}
        className="faq-button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="faq-question">{item.question}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className={`faq-chevron ${isOpen ? 'faq-chevron-open' : ''}`}
        >
          <path d="M5 7 L10 12 L15 7" stroke="#636972" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={id}
        className={`faq-panel ${isOpen ? 'faq-panel-open' : ''}`}
      >
        {item.answer.split('\n\n').map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq" aria-labelledby="faq-heading">
      <div className="container">
        <h2 id="faq-heading" className="section-heading">{s.faqHeading}</h2>
        <div className="faq-list">
          {s.faqItems.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              index={i}
              isOpen={i === openIndex}
              onToggle={() => setOpenIndex(i === openIndex ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
