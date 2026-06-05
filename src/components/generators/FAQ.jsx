import { useState } from 'react';
import { strings } from '../../data/generatorsData';

const s = strings.en.faq;

function FaqItem({ item, index, isOpen, onToggle }) {
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
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '18px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'start',
          gap: 16,
        }}
      >
        <span
          className="font-heading"
          style={{ fontSize: 14, color: '#2E2E2F', flex: 1, lineHeight: 1.4 }}
        >
          {item.q}
        </span>
        {/* Chevron icon */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            flexShrink: 0,
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.25s ease',
          }}
        >
          <path
            d="M5 7.5l5 5 5-5"
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
        className={`faq-answer${isOpen ? ' open' : ''}`}
      >
        <div style={{ paddingBottom: 18 }}>
          {item.a.split('\n\n').map((para, i) => (
            <p
              key={i}
              style={{
                fontSize: 14,
                color: '#636972',
                lineHeight: 1.7,
                margin: 0,
                marginTop: i > 0 ? 12 : 0,
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
  // First item open by default
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <section
      style={{
        backgroundColor: '#F4F6F8',
        paddingTop: 60,
        paddingBottom: 60,
        borderTop: '1px solid #E2E4E7',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 760, padding: '0 20px' }}>
        <h2
          className="font-heading"
          style={{
            fontSize: 'clamp(22px, 2.5vw, 30px)',
            color: '#4B5056',
            margin: 0,
            marginBottom: 30,
            textAlign: 'center',
          }}
        >
          {s.heading}
        </h2>

        <div
          style={{
            backgroundColor: '#fff',
            border: '1px solid #E2E4E7',
            borderRadius: 6,
            padding: '0 24px',
          }}
        >
          {s.items.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
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
