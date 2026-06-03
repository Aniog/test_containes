





import React, { useState } from 'react';
import strings from '@/data/strings.en.js';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="section faq">
      <div className="section-container">
        <h2 className="section-heading">{strings.faqHeading}</h2>
        <div className="faq-list">
          {strings.faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-btn-${i}`;

            return (
              <div key={i} className="faq-item">
                <h3 className="faq-question">
                  <button
                    type="button"
                    id={buttonId}
                    className="faq-trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(i)}
                  >
                    <span className="faq-trigger-text">{faq.question}</span>
                    <svg
                      className={`faq-chevron ${isOpen ? 'faq-chevron-open' : ''}`}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 6l4 4 4-4"
                        stroke="#636972"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`faq-panel ${isOpen ? 'faq-panel-open' : ''}`}
                  hidden={!isOpen}
                >
                  <div className="faq-panel-inner">
                    <p className="faq-answer">{faq.answer}</p>
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




