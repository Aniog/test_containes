import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our sourcing service is free for the initial supplier search and quote. We charge a transparent commission (typically 5-10% of order value) only when you place an order through us. There are no upfront fees or hidden charges.',
  },
  {
    q: 'How do you verify suppliers?',
    a: 'We conduct on-site factory audits covering business license verification, production capacity assessment, quality management systems, export history review, and worker conditions. Every supplier in our network has been personally visited by our team.',
  },
  {
    q: 'What quality control measures do you take?',
    a: 'We perform inspections at three critical stages: pre-production (raw materials and setup), in-line (during production), and pre-shipment (finished goods). Each inspection includes a detailed report with photos and measurements.',
  },
  {
    q: 'Can you handle small order quantities?',
    a: 'Yes. While minimum order quantities vary by product and supplier, we work with factories that accommodate small to large orders. We will always be transparent about MOQ requirements during the quoting stage.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Initial quotes are typically provided within 48 hours. Supplier verification takes 3-5 business days. Sample production takes 7-14 days depending on complexity. Mass production timelines vary by product but are confirmed before order placement.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'Yes. We coordinate the entire logistics chain including freight forwarding (sea, air, and rail), export documentation from China, customs clearance assistance, and door-to-door delivery to your specified destination.',
  },
  {
    q: 'What happens if there are quality issues?',
    a: 'Our multi-stage inspection process minimizes this risk significantly. If issues are discovered during pre-shipment inspection, we work with the factory to rework or replace defective goods before shipment. We also assist with any post-delivery claims.',
  },
  {
    q: 'Can you sign a Non-Disclosure Agreement (NDA)?',
    a: 'Absolutely. We are happy to sign NDAs and can also help you establish NDAs directly with suppliers to protect your designs, specifications, and proprietary information.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-text-secondary text-lg">
            Answers to the most common questions about sourcing from China.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border rounded-lg overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-bg-light transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-text-primary font-medium text-sm pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-text-muted flex-shrink-0 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 pt-0">
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
