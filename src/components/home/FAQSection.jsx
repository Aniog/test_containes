import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What is a sourcing agent and how do you differ from a trading company?',
    a: 'A sourcing agent represents your interests — we find factories, negotiate prices, and manage quality on your behalf. Unlike trading companies, we do not mark up products. You pay factories directly, and we charge a transparent service fee.',
  },
  {
    q: 'How much do your services cost?',
    a: 'Our fees depend on the scope of work. For supplier sourcing, we charge a flat project fee. For ongoing QC and production management, we offer monthly retainers. Contact us for a customized quote based on your requirements.',
  },
  {
    q: 'What types of products can you source?',
    a: 'We cover a wide range: electronics, home goods, furniture, textiles, packaging, machinery, hardware, automotive parts, and more. Our network spans major manufacturing hubs including Shenzhen, Guangzhou, Yiwu, and Foshan.',
  },
  {
    q: 'How do you verify suppliers?',
    a: 'Every supplier undergoes a multi-step verification: business license check, on-site factory audit, production capacity assessment, certification verification, and reference checks with previous buyers.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'Yes. We coordinate sea freight, air freight, and express shipping. Our logistics partners handle customs clearance, documentation, and door-to-door delivery across all major ports worldwide.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Initial supplier matching typically takes 5-10 business days. Full cycle from inquiry to shipment depends on product complexity and order volume, but most projects complete within 4-8 weeks.',
  },
  {
    q: 'What are your payment terms?',
    a: 'We recommend standard trade terms: 30% deposit with order, 70% before shipment after QC approval. For larger orders, we can help negotiate letter of credit (L/C) terms with suppliers.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-20 md:py-28 bg-brand-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="faq-title" className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p id="faq-subtitle" className="text-lg text-brand-gray-600">
            Common questions about sourcing from China.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-brand-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-brand-gray-50 transition-colors"
              >
                <span className="text-base font-semibold text-brand-navy pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-gray-400 shrink-0 transition-transform duration-200 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-brand-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
