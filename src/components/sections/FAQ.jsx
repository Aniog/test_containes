import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What types of businesses do you work with?',
    answer: 'We work with importers, distributors, e-commerce sellers, startups, and established brands in North America, Europe, Australia, and beyond.',
  },
  {
    question: 'How do you charge for your services?',
    answer: 'Our fees depend on the scope of work. We offer sourcing-only packages, full-service project management, and QC inspection services. Contact us for a tailored quote.',
  },
  {
    question: 'Can you help if I already have a supplier?',
    answer: 'Yes. Many clients come to us for factory audits, quality inspections, production follow-up, or shipping coordination even after they have found a supplier.',
  },
  {
    question: 'Do you own the factories?',
    answer: 'No. We are an independent sourcing agent. This allows us to objectively evaluate and recommend the best supplier for your product and budget.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Initial supplier shortlists usually take 3-7 business days. Full sampling and verification timelines depend on product complexity, typically 2-6 weeks.',
  },
  {
    question: 'Which industries do you specialize in?',
    answer: 'We commonly source electronics, machinery, packaging, textiles, home goods, and promotional products. If your category is not listed, please ask.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label">FAQ</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4">
            Common questions about sourcing from China
          </h2>
          <p className="text-lg text-slate-600">
            Get clear answers to help you move forward with confidence.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.question} className="card overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
