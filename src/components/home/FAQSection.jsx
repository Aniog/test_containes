import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Icon } from '@/components/ui/Icon'
import { faqs } from '@/data/site'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <Container>
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          description="Quick answers to common questions about working with SSourcing China."
        />

        <div className="mt-12 max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-neutral-200 bg-white overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="flex w-full items-center justify-between p-5 text-left font-semibold text-neutral-900 hover:bg-neutral-50"
                aria-expanded={openIndex === idx}
              >
                {faq.question}
                <span className="ml-4 flex-shrink-0 text-neutral-500">
                  {openIndex === idx ? (
                    <Icon name="ChevronUp" className="h-5 w-5" />
                  ) : (
                    <Icon name="ChevronDown" className="h-5 w-5" />
                  )}
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-5 pb-5 text-neutral-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
