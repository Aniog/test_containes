import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is a China sourcing agent?',
    answer: 'A sourcing agent is your local representative in China who finds suppliers, negotiates prices, verifies factories, inspects quality, and coordinates shipping on your behalf. We act as your eyes and ears on the ground.',
  },
  {
    question: 'How much does your service cost?',
    answer: 'Our fees depend on the scope of work. Typically we charge a service fee based on order value (5-8%) or a fixed project fee. We provide a detailed quote after understanding your requirements — no hidden costs.',
  },
  {
    question: 'What is the minimum order quantity (MOQ)?',
    answer: 'MOQ depends on the product and supplier. We work with factories that accept orders from as low as 100-500 units for many products. We can negotiate MOQ reductions for new clients.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct on-site factory audits checking business licenses, production capacity, quality management systems, worker conditions, and past export experience. We provide a detailed audit report with photos.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'From initial inquiry to supplier shortlist: 5-10 business days. Sample development: 7-20 days depending on product complexity. Full production: varies by product and quantity.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes. We coordinate with freight forwarders for sea, air, or rail shipping. We handle export documentation, container loading supervision, and can assist with import customs requirements.',
  },
  {
    question: 'Can you source custom or OEM products?',
    answer: 'Absolutely. We specialize in custom manufacturing and OEM/ODM projects. We manage the entire process from design review to tooling, sampling, production, and delivery.',
  },
  {
    question: 'What if there is a quality problem?',
    answer: 'Our pre-shipment inspections catch issues before goods leave China. If problems are found, we negotiate with the factory for rework, replacement, or compensation before shipment.',
  },
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-600">
            Common questions from buyers considering a China sourcing agent.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-neutral-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-neutral-50 transition-colors border-none cursor-pointer"
              >
                <span className="font-medium text-neutral-800 pr-4">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === idx && (
                <div className="px-5 pb-5 text-neutral-600 leading-relaxed">
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

export default FAQSection
