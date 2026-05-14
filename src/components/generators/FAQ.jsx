import { useState, useId } from 'react'
import { t } from './strings'

const HEADING_FONT = "'Brandon Grotesque', 'Josefin Sans', Poppins, sans-serif"

function FaqItem({ faq, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen)
  const answerId = useId()
  const btnId = useId()

  return (
    <div
      style={{
        borderBottom: '1px solid #E2E4E7',
      }}
    >
      <button
        id={btnId}
        aria-expanded={open}
        aria-controls={answerId}
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 bg-transparent cursor-pointer text-start"
        style={{
          padding: '18px 0',
          border: 'none',
          fontFamily: HEADING_FONT,
          fontWeight: 700,
          fontSize: '15px',
          color: '#2E2E2F',
          lineHeight: 1.3,
        }}
      >
        <span>{faq.q}</span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{
            flexShrink: 0,
            transform: open ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.2s ease',
          }}
        >
          <path
            d="M4 6l5 5 5-5"
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
        style={{
          maxHeight: open ? '600px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.25s ease',
        }}
      >
        <div style={{ paddingBottom: '18px' }}>
          {faq.a.split('\n\n').map((para, i) => (
            <p
              key={i}
              className="m-0"
              style={{
                color: '#636972',
                fontSize: '14px',
                lineHeight: 1.7,
                marginBottom: i < faq.a.split('\n\n').length - 1 ? '12px' : '0',
              }}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="py-10" style={{ backgroundColor: '#fff' }}>
      <div className="max-w-content mx-auto px-5" style={{ maxWidth: '760px' }}>
        <h2
          className="m-0 mb-8 uppercase text-center"
          style={{
            fontFamily: HEADING_FONT,
            fontWeight: 700,
            fontSize: 'clamp(22px, 2.5vw, 30px)',
            color: '#4B5056',
            lineHeight: 1.2,
          }}
        >
          {t.faqHeading}
        </h2>

        <div style={{ borderTop: '1px solid #E2E4E7' }}>
          {t.faqs.map((faq, i) => (
            <FaqItem key={faq.q} faq={faq} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
