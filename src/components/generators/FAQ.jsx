import { useState } from 'react'
import { strings } from '../../data/strings'

const t = strings.en.faq

function FAQItem({ item, index, isOpen, onToggle }) {
  const panelId = `faq-panel-${index}`
  const buttonId = `faq-button-${index}`

  return (
    <div className="border-b border-divider">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="w-full flex items-center justify-between py-5 text-start font-heading font-bold uppercase text-heading-dark text-sm focus-ring rounded"
        >
          <span>{item.q}</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            className={`shrink-0 ml-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          >
            <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-[500px] pb-5' : 'max-h-0'}`}
      >
        <p className="text-body-text font-body text-sm leading-relaxed">
          {item.a}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-10">
      <div className="max-w-content mx-auto px-5">
        <h2 className="font-heading font-bold uppercase text-heading-section text-2xl md:text-3xl text-center">
          {t.heading}
        </h2>
        <div className="mt-8 max-w-[800px] mx-auto">
          {t.items.map((item, idx) => (
            <FAQItem
              key={idx}
              item={item}
              index={idx}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
