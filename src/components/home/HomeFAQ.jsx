import { useState } from 'react'
import { faqs, Icons } from '@/lib/data'

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 lg:py-28 bg-surface-alt">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-text-primary">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            Clear answers to common questions about sourcing from China.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-border overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-surface-alt/50 transition-colors"
              >
                <span className="font-medium text-text-primary pr-4">{faq.q}</span>
                <Icons.ChevronRight
                  className={`w-5 h-5 text-text-muted shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-90' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}