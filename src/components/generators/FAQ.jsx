import { useState } from 'react'

export default function FAQ({ t }) {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? -1 : i)
  }

  return (
    <section className="py-[40px]">
      <div className="max-w-[1200px] mx-auto px-[20px]">
        <h2 className="text-[26px] md:text-[30px] text-heading-section mb-[30px] text-center">
          {t.faq.heading}
        </h2>
        <div className="max-w-[800px] mx-auto">
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i
            const panelId = `faq-panel-${i}`
            const buttonId = `faq-button-${i}`

            return (
              <div key={i} className="border-b border-divider">
                <h3 className="text-[14px] normal-case">
                  <button
                    id={buttonId}
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex items-center justify-between py-[20px] text-start text-heading-dark text-[15px] font-semibold hover:text-brand-purple transition-colors"
                    style={{ fontFamily: "'Open Sans', sans-serif", textTransform: 'none' }}
                  >
                    <span>{item.q}</span>
                    <svg
                      width="20" height="20" viewBox="0 0 20 20" fill="none"
                      className={`shrink-0 ms-[10px] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    >
                      <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-body-text text-[14px] leading-[1.7] pb-[20px]">
                    {item.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
