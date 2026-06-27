import { useState } from 'react';
import { strings } from '../../data/generators';

const s = strings.en;

function FaqItem({ faq, index, isOpen, onToggle }) {
  const answerId = `faq-answer-${index}`;
  const btnId = `faq-btn-${index}`;

  return (
    <div
      style={{
        borderBottom: '1px solid #E2E4E7',
      }}
    >
      <button
        id={btnId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onToggle}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          padding: '18px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span
          className="font-heading"
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: '#2E2E2F',
            letterSpacing: '0.01em',
            lineHeight: 1.3,
          }}
        >
          {faq.question}
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          aria-hidden="true"
          style={{
            flexShrink: 0,
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.25s ease',
          }}
        >
          <path
            d="M4 6.5l5 5 5-5"
            stroke="#8159BB"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        id={answerId}
        role="region"
        aria-labelledby={btnId}
        className="faq-answer"
        style={{
          maxHeight: isOpen ? 600 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        <div style={{ paddingBottom: 18 }}>
          {faq.answer.split('\n\n').map((para, i) => (
            <p
              key={i}
              style={{
                fontSize: 14,
                color: '#636972',
                margin: i === 0 ? 0 : '12px 0 0',
                lineHeight: 1.7,
                fontFamily: 'var(--font-body)',
              }}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First question expanded by default

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? -1 : i));
  };

  return (
    <section
      style={{
        background: '#ffffff',
        padding: '60px 20px',
        borderTop: '1px solid #E2E4E7',
      }}
    >
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <h2
          className="font-heading"
          style={{
            fontSize: 'clamp(22px, 2.5vw, 30px)',
            fontWeight: 700,
            color: '#4B5056',
            margin: '0 0 30px',
            letterSpacing: '0.02em',
          }}
        >
          {s.faqHeading}
        </h2>

        <div>
          {s.faqs.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
