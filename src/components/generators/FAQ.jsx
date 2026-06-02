import React, { useState } from 'react';
import { strings } from '@/data/generators';
import { ChevronDown } from 'lucide-react';

const s = strings.en;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section style={{ padding: '40px 0', background: '#F4F6F8' }}>
      <div className="section-container" style={{ maxWidth: '800px' }}>
        <h2
          style={{
            fontSize: 'clamp(22px, 3vw, 32px)',
            marginBottom: '32px',
            textAlign: 'center',
          }}
        >
          {s.faq.heading}
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {s.faq.questions.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="card"
                style={{
                  padding: '16px 20px',
                  borderRadius: '3px',
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: '15px',
                      color: '#2E2E2F',
                      textTransform: 'none',
                    }}
                  >
                    {item.q}
                  </span>
                  <ChevronDown
                    size={20}
                    color="#8159BB"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      flexShrink: 0,
                      marginInlineStart: '12px',
                    }}
                  />
                </button>
                <div
                  id={`faq-answer-${idx}`}
                  style={{
                    maxHeight: isOpen ? '500px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease',
                  }}
                >
                  <p
                    style={{
                      fontSize: '14px',
                      color: '#636972',
                      lineHeight: 1.6,
                      paddingTop: '12px',
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
