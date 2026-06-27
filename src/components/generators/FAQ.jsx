import { useState } from 'react'
import strings from '@/strings/strings.en.js'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="gen-section" aria-labelledby="faq-heading">
      <div className="gen-container gen-narrow">
        <div className="gen-section-header">
          <h2 id="faq-heading" className="gen-h2">{strings.faq.heading}</h2>
        </div>
        <div className="gen-faq">
          {strings.faq.questions.map((qa, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`
            return (
              <div key={index} className="gen-faq-item">
                <button
                  id={buttonId}
                  type="button"
                  className="gen-faq-button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{qa.q}</span>
                  <span className="gen-faq-chevron" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`gen-faq-panel ${isOpen ? 'gen-faq-panel-open' : ''}`}
                >
                  <div className="gen-faq-content">
                    {qa.a.map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
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
