import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How much does your sourcing service cost?',
    answer: 'We typically charge a percentage of the order value or a flat project fee depending on complexity and volume. For simple supplier searches, we offer fixed-fee packages. Contact us for a custom quote based on your specific needs.',
  },
  {
    question: 'How long does it take to find a supplier?',
    answer: 'Initial supplier shortlists are usually ready within 5-7 business days. Factory verification adds another 3-5 days. The full process from inquiry to placing a sample order typically takes 2-3 weeks.',
  },
  {
    question: 'Do you handle small orders or only large volumes?',
    answer: 'We work with both small businesses and large enterprises. While our pricing is most competitive for orders above $10,000, we also support smaller test orders and startup sourcing projects.',
  },
  {
    question: 'Can you help with custom product development?',
    answer: 'Yes. We manage the entire custom product process including CAD support, prototype coordination, mold development, and production. Our team has experience across electronics, hardware, textiles, and packaging.',
  },
  {
    question: 'What happens if there are quality issues?',
    answer: 'Our pre-shipment inspections catch most issues before goods leave the factory. If problems are found, we negotiate rework or replacements with the supplier on your behalf. We never ship without your approval.',
  },
  {
    question: 'Do you offer shipping and customs support?',
    answer: 'Yes. We coordinate with freight forwarders to arrange sea freight, air cargo, or express shipping. We also prepare all export documentation including commercial invoices, packing lists, and certificates of origin.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2 block">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-border-light rounded-lg bg-surface overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-medium text-slate-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 text-sm text-slate-500 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
