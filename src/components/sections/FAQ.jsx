import React from 'react'
import { strings } from '../../data/strings'

const s = strings.en

function FaqItem({ item, index, isOpen, onToggle }) {
  const answerId = `faq-answer-${index}`
  const buttonId = `faq-button-${index}`
  const contentRef = React.useRef(null)
  const [maxHeight, setMaxHeight] = React.useState(0)
  const [jsReady, setJsReady] = React.useState(false)

  React.useEffect(() => {
    setJsReady(true)
  }, [])

  React.useEffect(() => {
    if (!jsReady) return
    if (isOpen && contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight)
    } else {
      setMaxHeight(0)
    }
  }, [isOpen, jsReady])

  return (
    <div style={{ borderBottom: '1px solid #E2E4E7' }}>
      <button
        id={buttonId}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={answerId}
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
        }}
      >
        <span style={{
          fontFamily: '"Josefin Sans", Poppins, sans-serif',
          fontWeight: 700,
          fontSize: 15,
          textTransform: 'uppercase',
          color: '#2E2E2F',
          lineHeight: 1.3,
        }}>
          {item.question}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          style={{
            flexShrink: 0,
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
          }}
        >
          <path d="M4 6L8 10L12 6" stroke="#636972" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div
        id={answerId}
        role="region"
        aria-labelledby={buttonId}
        ref={contentRef}
        style={{
          overflow: 'hidden',
          maxHeight: jsReady
            ? maxHeight
            : 'none', // SSR/no-JS: all answers visible
          transition: jsReady ? 'max-height 0.3s ease' : 'none',
        }}
      >
        <div style={{ paddingBottom: 18 }}>
          {item.answer.map((para, j) => (
            <p key={j} style={{ fontSize: 14, color: '#636972', lineHeight: 1.7, marginBlock: 0, marginBottom: j < item.answer.length - 1 ? 12 : 0 }}>
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState(0)

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <section style={{ paddingBlock: '40px', background: '#F4F6F8' }}>
      <div className="section-container" style={{ maxWidth: 780 }}>
        <h2 style={{
          fontFamily: '"Josefin Sans", Poppins, sans-serif',
          fontWeight: 700,
          textTransform: 'uppercase',
          fontSize: 'clamp(22px, 3vw, 28px)',
          color: '#4B5056',
          textAlign: 'center',
          marginBottom: 30,
        }}>
          {s.faqHeading}
        </h2>
        <div>
          {s.faqItems.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
