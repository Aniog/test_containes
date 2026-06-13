import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How much does a sourcing agent cost?',
    a: 'Our fee structure depends on the scope of work. For supplier sourcing, we typically charge a flat project fee. For ongoing production management, we work on a percentage of order value (usually 3-8%). Contact us for a customized quote based on your specific needs.',
  },
  {
    q: 'How do you verify suppliers?',
    a: 'We conduct on-site factory audits that include business license verification, production capacity assessment, quality management system review, equipment inspection, and reference checks with previous buyers. You receive a detailed audit report with photos.',
  },
  {
    q: 'What if the supplier fails quality inspection?',
    a: 'If a pre-shipment inspection reveals quality issues, we work with the factory to correct them before shipment. If issues cannot be resolved, we help you switch to an alternative supplier from our network. Your payment is protected throughout this process.',
  },
  {
    q: 'Do you handle small orders or only large volumes?',
    a: 'We work with orders of all sizes. While our sweet spot is orders above $10,000, we also support smaller initial trial orders. For very small quantities, we can recommend appropriate channels and still provide quality oversight.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Supplier identification typically takes 1-2 weeks. Factory audits and sampling take another 1-2 weeks. Production timelines depend on product complexity and order volume. Most projects go from inquiry to shipment in 4-12 weeks.',
  },
  {
    q: 'Which regions in China do you cover?',
    a: 'We are based in Shenzhen and cover all major manufacturing regions: Guangdong (electronics, furniture, plastics), Zhejiang (textiles, hardware, small commodities), Jiangsu (machinery, chemicals), Fujian (stone, ceramics), and Shandong (tires, machinery).',
  },
]

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Common questions about working with a China sourcing agent.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-brand-navy pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}