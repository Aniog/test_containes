import { useState } from 'react';
import s from '../../data/strings.js';

function AccordionItem({ item, index, isOpen, onToggle }) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-btn-${index}`;

  return (
    <div
      style={{
        borderBottom: '1px solid #E2E4E7',
      }}
    >
      <h3 style={{ margin: 0 }}>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => onToggle(index)}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            padding: '18px 0',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'start',
            fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: 15,
            color: '#2E2E2F',
            letterSpacing: '0.02em',
          }}
        >
          <span>{item.question}</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            style={{
              flexShrink: 0,
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.25s ease',
            }}
          >
            <path d="M5 7.5l5 5 5-5" stroke="#8159BB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        style={{
          overflow: 'hidden',
          maxHeight: isOpen ? 600 : 0,
          transition: 'max-height 0.3s ease',
        }}
      >
        <div style={{ paddingBottom: 18 }}>
          {item.answer.split('\n\n').map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: 14,
                color: '#636972',
                lineHeight: 1.7,
                margin: i === 0 ? '0 0 12px' : '0',
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
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="bg-light-bg" style={{ paddingTop: 60, paddingBottom: 60 }}>
      <div className="content-container" style={{ maxWidth: 760 }}>
        <h2
          className="section-heading m-0 mb-8"
          style={{ fontSize: 'clamp(22px, 2.5vw, 30px)' }}
        >
          {s.faqHeading}
        </h2>
        <div
          style={{
            background: '#ffffff',
            border: '1px solid #E2E4E7',
            borderRadius: 6,
            padding: '0 24px',
          }}
        >
          {s.faqItems.map((item, index) => (
            <AccordionItem
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
}
