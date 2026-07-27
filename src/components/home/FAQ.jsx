import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    q: 'How do you find and verify suppliers?',
    a: 'We search our database of 500+ pre-verified suppliers and also conduct new searches based on your requirements. Every supplier goes through our verification process including business license checks, factory visits, production capacity assessment, and quality system evaluation.',
  },
  {
    q: 'What does a quality inspection include?',
    a: 'Our inspections follow international AQL standards. We check product appearance, dimensions, functionality, packaging, and labeling. We offer pre-production, during-production, and pre-shipment inspections, each with detailed photo reports and findings.',
  },
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work. We offer transparent pricing with no hidden costs. Basic supplier search starts with a free consultation. Contact us for a detailed quote based on your specific needs.',
  },
  {
    q: 'Can you handle small orders?',
    a: 'Yes. We work with buyers of all sizes. While some factories have minimum order quantities, we can help negotiate MOQs and find suppliers willing to work with smaller initial orders, especially for new product development.',
  },
  {
    q: 'What happens if quality does not meet standards?',
    a: 'If a pre-shipment inspection reveals quality issues, we document all findings and work with the factory to resolve them before shipment. If issues cannot be fixed, we help you negotiate replacements, refunds, or find alternative suppliers.',
  },
  {
    q: 'Do you help with shipping and customs?',
    a: 'Yes. We coordinate freight booking (sea, air, or express), prepare customs documentation, arrange insurance, and track your shipment from factory to destination. We work with reliable freight forwarders to ensure smooth delivery.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Common questions about our sourcing services, quality inspections, and shipping support.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-lg border border-neutral-200 bg-white">
              <button
                className="w-full flex items-center justify-between p-5 text-left bg-transparent border-0 cursor-pointer"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-base font-medium text-neutral-800 pr-4">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-neutral-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-neutral-400" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 pt-0">
                  <p className="text-sm text-neutral-500 leading-relaxed">{faq.a}</p>
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
