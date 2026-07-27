import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What does a sourcing agent do?',
    answer:
      'A sourcing agent helps you find suppliers, negotiate terms, verify factories, manage quality control, and coordinate logistics on your behalf in China.',
  },
  {
    question: 'How do you charge for sourcing services?',
    answer:
      'We typically charge a service fee based on the project scope or a commission on the order value. Contact us for a transparent quote tailored to your needs.',
  },
  {
    question: 'Can you work with small or first-time buyers?',
    answer:
      'Yes. We support startups, small businesses, and established importers. We adapt our services to your order size and experience level.',
  },
  {
    question: 'Do you inspect products before shipment?',
    answer:
      'Yes. We offer pre-shipment, during-production, and container-loading inspections based on your quality requirements.',
  },
  {
    question: 'Which industries do you cover?',
    answer:
      'We cover electronics, machinery, home goods, apparel, packaging, beauty, personal care, and many other categories.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 id="faq-title" className="text-3xl font-bold text-slate-900 md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p id="faq-subtitle" className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Quick answers to common questions about sourcing from China with us.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="flex w-full items-center justify-between text-left"
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="mt-3 text-slate-600 leading-relaxed">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
