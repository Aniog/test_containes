import { useState } from 'react'
import { strings } from '@/data/strings'

const t = strings.en.faq

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-10 bg-white">
      <div className="max-w-[720px] mx-auto px-5">
        <h2 className="font-heading text-heading-section text-2xl md:text-3xl text-center mb-8">
          {t.heading}
        </h2>
        <div className="divide-y divide-divider border-t border-b border-divider">
          {t.items.map((item, idx) => {
            const isOpen = openIndex === idx
            const panelId = `faq-panel-${idx}`
            const buttonId = `faq-button-${idx}`

            return (
              <div key={idx}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between py-4 text-start bg-transparent border-0 cursor-pointer"
                  >
                    <span className="font-heading text-heading-dark text-sm pr-4">
                      {item.q}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                      className={`shrink-0 text-brand-purple transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    >
                      <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-[500px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-body-text text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
