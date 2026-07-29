import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is a China sourcing agent?',
    answer: 'A sourcing agent is your local representative in China who finds suppliers, negotiates prices, manages quality control, and coordinates shipping on your behalf. We act as your eyes and ears on the ground.',
  },
  {
    question: 'How much does your service cost?',
    answer: 'Our fees depend on the scope of work. Typically, we charge a service fee based on order value (5-8%) or a fixed project fee. We provide a clear quote upfront with no hidden costs.',
  },
  {
    question: 'What is your minimum order requirement?',
    answer: 'We work with orders starting from $5,000 FOB value. For smaller orders, we can discuss options depending on the product category and complexity.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct on-site factory audits checking business licenses, production capacity, quality management systems, worker conditions, and past export experience. We provide a detailed audit report.',
  },
  {
    question: 'Can you help with product customization?',
    answer: 'Yes. We work with factories on custom designs, materials, packaging, and branding. We manage the sample process until you approve the final product.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Initial supplier shortlisting takes 5-10 business days. The full process from inquiry to shipment typically takes 4-12 weeks depending on product complexity and order size.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-text-body text-lg">
            Common questions from buyers considering a China sourcing agent.
          </p>
          <div className="w-16 h-1 bg-accent mx-auto mt-4" />
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-surface transition-colors border-none cursor-pointer"
              >
                <span className="font-medium text-text-primary text-sm md:text-base pr-4">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-text-muted shrink-0 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === idx && (
                <div className="px-5 pb-5 text-text-body text-sm leading-relaxed">
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

export default FAQ
