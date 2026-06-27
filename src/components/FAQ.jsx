import React, { useState, useCallback } from 'react'
import strings from '@/strings/en'

const { faq } = strings.en

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = useCallback((index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }, [])

  return (
    <section className="section-spacing" style={{ background: '#FFFFFF' }}>
      <div className="container">
        <h2
          style={{
            fontSize: 'clamp(22px, 3vw, 28px)',
            color: 'var(--color-heading)',
            textAlign: 'center',
            marginBottom: 30,
          }}
        >
          {faq.heading}
        </h2>

        <div style={{ maxWidth: 720, marginInline: 'auto' }}>
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i
            const contentId = `faq-answer-${i}`

            return (
              <div
                key={item.question}
                style={{
                  borderBottom: '1px solid var(--color-divider)',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '18px 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'start',
                    gap: 16,
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: 15,
                    color: 'var(--color-heading)',
                    textTransform: 'none',
                    lineHeight: 1.4,
                  }}
                >
                  <span>{item.question}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                    }}
                  >
                    <path
                      d="M4 6l4 4 4-4"
                      stroke="var(--color-brand-purple)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={contentId}
                  style={{
                    maxHeight: isOpen ? '400px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.35s ease',
                  }}
                >
                  <div style={{ paddingBottom: 20 }}>
                    <p
                      style={{
                        fontSize: 14,
                        lineHeight: 1.7,
                        color: 'var(--color-body-text)',
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
