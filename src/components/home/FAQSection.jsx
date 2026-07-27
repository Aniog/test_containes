import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How do you find and verify suppliers?',
    answer: 'We combine our internal supplier database with targeted market research. Every new factory undergoes an on-site audit covering business licenses, production capacity, quality systems, and export experience. We also check references and past client feedback before adding them to our network.',
  },
  {
    question: 'What does your quality inspection service include?',
    answer: 'Our standard inspection covers appearance, dimensions, functionality, packaging, and labeling against your approved samples and specifications. We provide a detailed report with photos and a pass/fail recommendation within 24 hours of the inspection.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Initial supplier shortlisting typically takes 3–5 business days. Factory verification adds another 3–5 days. From first contact to placing a production order, most clients move through the process in 2–4 weeks depending on product complexity.',
  },
  {
    question: 'Do you work with small order quantities?',
    answer: 'Yes. We support startups and small businesses with lower MOQ requirements. Our team will help you find suppliers willing to work with smaller initial orders and scale up as your business grows.',
  },
  {
    question: 'How do you charge for your services?',
    answer: 'We offer transparent, project-based pricing with no hidden fees. Typical models include a fixed sourcing fee per project or a percentage of the order value. We will provide a clear quote after understanding your requirements during the initial consultation.',
  },
  {
    question: 'Can you help with shipping and customs?',
    answer: 'Absolutely. We coordinate with freight forwarders to arrange sea, air, or rail freight. We also prepare commercial invoices, packing lists, certificates of origin, and any required compliance documentation for smooth customs clearance.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Quick answers to the questions we hear most often from new clients.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 md:px-6 pb-5 md:pb-6">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
