import React, { useState, useRef, useEffect } from 'react';
import strings from '@/data/strings.en.js';

function FAQItem({ faq, index, isOpen, onToggle }) {
  const panelRef = useRef(null);
  const triggerId = `faq-trigger-${index}`;
  const panelId = `faq-panel-${index}`;

  useEffect(() => {
    if (!panelRef.current) return;
    if (isOpen) {
      panelRef.current.style.maxHeight = panelRef.current.scrollHeight + 'px';
    } else {
      panelRef.current.style.maxHeight = '0px';
    }
  }, [isOpen]);

  return (
    <div className="faq-item">
      <button
        type="button"
        className="faq-trigger"
        id={triggerId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => onToggle(index)}
      >
        <span>{faq.q}</span>
        <svg className="faq-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <div
        className="faq-panel"
        id={panelId}
        ref={panelRef}
        role="region"
        aria-labelledby={triggerId}
        aria-hidden={!isOpen}
      >
        <div className="faq-body">
          {faq.a}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="section-title" style={{ textAlign: 'center', marginBlockEnd: '30px' }}>
          {strings.faqHeading}
        </h2>
        <div>
          {strings.faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}