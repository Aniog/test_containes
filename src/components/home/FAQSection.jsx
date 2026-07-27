import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How do I know if a Chinese supplier is reliable?',
    a: 'We conduct on-site factory audits, verify business licenses and certifications, check trade references, and assess production capabilities. Our verification process covers legal status, manufacturing capacity, quality control systems, and financial stability.',
  },
  {
    q: 'What are your fees and how do you charge?',
    a: 'Our fees depend on the scope of work. We offer both project-based and retainer models. Typically, we charge a percentage of the order value or a fixed fee per project. We provide detailed quotes upfront with no hidden costs.',
  },
  {
    q: 'Do you handle small orders or only large volumes?',
    a: 'We work with orders of all sizes. For small orders, we can help consolidate with other buyers to meet MOQs. We also help startups and small businesses find flexible suppliers who accommodate lower volumes.',
  },
  {
    q: 'What industries and product categories do you cover?',
    a: 'We source across consumer electronics, apparel and textiles, home and kitchen goods, industrial parts, packaging materials, and more. If it is manufactured in China, we can help source it.',
  },
  {
    q: 'How long does the sourcing process typically take?',
    a: 'A typical sourcing engagement takes 4-8 weeks from initial briefing to first shipment. This includes supplier research, quotation collection, factory verification, sampling, production, and shipping.',
  },
  {
    q: 'Do you offer quality inspection services?',
    a: 'Yes, we offer during-production inspections, pre-shipment inspections, and random sampling. Our QC team follows AQL standards and provides detailed reports with photos and measurements.',
  },
  {
    q: 'How do you handle shipping and logistics?',
    a: 'We coordinate all shipping methods including sea freight, air freight, and express courier. We handle customs documentation, consolidate shipments, and can arrange door-to-door delivery to your location.',
  },
  {
    q: 'Is my product design safe with your team?',
    a: 'Absolutely. We sign NDAs with all clients and treat your product designs and specifications as confidential. We also require confidentiality agreements from suppliers before sharing any sensitive information.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-16 md:py-24 bg-surface-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-surface-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-surface-500 text-lg">
            Common questions about working with a China sourcing agent.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-surface-200 overflow-hidden"
            >
              <button
                type="button"
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-surface-800 text-sm pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-surface-400 shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-surface-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}