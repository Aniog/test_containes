import { useState } from 'react'
import { strings } from '../data/strings'

const faqItems = [
  { qKey: 'faq1Q', aKey: 'faq1A' },
  { qKey: 'faq2Q', aKey: 'faq2A' },
  { qKey: 'faq3Q', aKey: 'faq3A' },
  { qKey: 'faq4Q', aKey: 'faq4A' },
  { qKey: 'faq5Q', aKey: 'faq5A' },
  { qKey: 'faq6Q', aKey: 'faq6A' },
]

export default function FAQ() {
  const t = strings.en
  const [openIndex, setOpenIndex] = useState(0)

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <section className="faq" aria-labelledby="faq-heading">
      <div className="container">
        <h2 id="faq-heading" className="section-heading">{t.faqHeading}</h2>
        <div className="faq-list">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i
            const id = `faq-item-${i}`
            const buttonId = `faq-button-${i}`

            return (
              <div key={i} className="faq-item" id={id}>
                <button
                  type="button"
                  className="faq-button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={id}
                  onClick={() => toggleItem(i)}
                >
                  <span className="faq-question">{t[item.qKey]}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    className={`faq-chevron ${isOpen ? 'faq-chevron-open' : ''}`}
                  >
                    <path
                      d="M5 7 L10 12 L15 7"
                      stroke="#636972"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  className={`faq-answer ${isOpen ? 'faq-answer-open' : ''}`}
                  role="region"
                  aria-labelledby={buttonId}
                  id={`${id}-content`}
                >
                  <p>{t[item.aKey]}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
