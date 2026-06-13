import { useState } from 'react';
import strings from '@/data/strings';
const s = strings.en;

const faqItems = [
  { id: 'faq-1', question: s.faq1Q, answer: s.faq1A },
  { id: 'faq-2', question: s.faq2Q, answer: s.faq2A },
  { id: 'faq-3', question: s.faq3Q, answer: s.faq3A },
  { id: 'faq-4', question: s.faq4Q, answer: s.faq4A },
  { id: 'faq-5', question: s.faq5Q, answer: s.faq5A },
  { id: 'faq-6', question: s.faq6Q, answer: s.faq6A },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      style={{
        background: '#F4F6F8',
        padding: '40px 20px',
      }}
    >
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h2
          className="heading-font"
          style={{
            fontSize: 'clamp(22px, 2.5vw, 32px)',
            color: '#4B5056',
            margin: '0 0 30px',
            textAlign: 'center',
          }}
        >
          {s.faqHeading}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <article
                key={item.id}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #C6C9CD',
                  borderRadius: 3,
                  overflow: 'hidden',
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-question-${item.id}`}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 20px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: 15,
                    fontWeight: 600,
                    color: '#2E2E2F',
                    fontFamily: "'Open Sans', sans-serif",
                    lineHeight: 1.4,
                  }}
                >
                  <span style={{ paddingInlineEnd: 12 }}>{item.question}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s ease',
                    }}
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="#8159BB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${item.id}`}
                  className={`faq-panel ${isOpen ? 'expanded' : 'collapsed'}`}
                >
                  <div
                    style={{
                      padding: '0 20px 16px',
                      color: '#636972',
                      fontSize: 14,
                      lineHeight: 1.7,
                    }}
                  >
                    {item.answer}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
