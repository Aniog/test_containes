import React, { useState, useRef, useCallback } from "react";
import { strings } from "../../data/strings";

const faqItems = [
  { qKey: "faq1Q", aKey: "faq1A" },
  { qKey: "faq2Q", aKey: "faq2A" },
  { qKey: "faq3Q", aKey: "faq3A" },
  { qKey: "faq4Q", aKey: "faq4A" },
  { qKey: "faq5Q", aKey: "faq5A" },
  { qKey: "faq6Q", aKey: "faq6A" },
];

function FaqItem({ item, index, isOpen, onToggle }) {
  const s = strings.en;
  const contentRef = useRef(null);
  const id = `faq-item-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="faq-item">
      <button
        id={buttonId}
        className="faq-button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={id}
      >
        <span className="faq-question">{s[item.qKey]}</span>
        <svg
          className={`faq-chevron ${isOpen ? "faq-chevron-open" : ""}`}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path d="M5 7 L10 12 L15 7" stroke="#636972" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        id={id}
        ref={contentRef}
        className="faq-content"
        role="region"
        aria-labelledby={buttonId}
        style={{
          height: isOpen ? (contentRef.current?.scrollHeight || "auto") : "0px",
          overflow: "hidden",
          transition: "height 0.3s ease",
        }}
      >
        <div className="faq-answer">
          <p>{s[item.aKey]}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const s = strings.en;
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = useCallback((index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  }, []);

  return (
    <section className="faq" aria-labelledby="faq-heading">
      <div className="container">
        <h2 id="faq-heading" className="section-heading">{s.faqHeading}</h2>
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
