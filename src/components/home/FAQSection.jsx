import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our fees depend on the scope of work. For supplier sourcing and verification, we charge a project-based fee. For ongoing production management, we typically work on a percentage of order value. Contact us for a customized quote based on your specific needs.',
  },
  {
    q: 'How do you verify that a factory is legitimate?',
    a: 'We conduct on-site audits that include: business license verification, factory tour and capacity assessment, equipment inspection, quality management system review, worker conditions check, and reference verification with previous clients.',
  },
  {
    q: 'Can you handle small orders or only large volumes?',
    a: 'We work with orders of all sizes. For smaller buyers, we help negotiate competitive MOQs (Minimum Order Quantities) and identify suppliers willing to work with growing businesses. We have supported first-time importers with orders as small as $2,000.',
  },
  {
    q: 'How do you handle quality control?',
    a: 'We follow a three-stage quality control process: Pre-Production Inspection (materials and components check), During Production Inspection (random sampling during manufacturing), and Pre-Shipment Inspection (AQL-based final inspection before shipment).',
  },
  {
    q: 'Do you work with specific industries only?',
    a: 'No. We source across a wide range of industries including electronics, home goods, textiles, hardware, machinery, packaging, and more. Our team has experience across diverse product categories.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Supplier identification typically takes 1-2 weeks. Factory audits and sampling take another 2-4 weeks. Production timelines vary by product complexity. Most projects from initial inquiry to shipment take 6-12 weeks.',
  },
]

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section className="py-20 md:py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-semibold text-navy pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}