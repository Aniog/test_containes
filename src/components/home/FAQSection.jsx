import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What exactly does a sourcing agent do?',
    answer: 'A sourcing agent acts as your local representative in China. We find suppliers, verify their legitimacy, negotiate pricing, inspect quality, monitor production, and coordinate shipping — essentially handling everything between your order and delivery.',
  },
  {
    question: 'How do you charge for your services?',
    answer: 'We typically charge a percentage of the order value (usually 5-10%) depending on complexity, or a flat project fee for specific engagements like factory audits. We are transparent about pricing from day one — no hidden fees.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'For standard products, supplier identification takes 3-7 days. Full sourcing including verification, sampling, and first production run typically takes 4-8 weeks depending on the product category and order size.',
  },
  {
    question: 'Can you work with small orders or startups?',
    answer: 'Absolutely. We work with businesses of all sizes. For smaller volumes, we leverage our network of MOQ-flexible factories and can consolidate shipments to reduce costs.',
  },
  {
    question: 'What if I already have a supplier but need help with quality?',
    answer: 'We offer standalone inspection services. You can hire us just for factory audits, during-production inspections, or pre-shipment inspections — no commitment to our full sourcing package required.',
  },
  {
    question: 'Do you handle customs and shipping logistics?',
    answer: 'Yes. We coordinate freight forwarding, prepare export documentation, and can arrange door-to-door shipping. We work with trusted logistics partners to get competitive rates.',
  },
  {
    question: 'How do you protect my intellectual property?',
    answer: 'We help you draft and enforce NNN agreements (Non-Disclosure, Non-Use, Non-Circumvention) with suppliers. We also recommend splitting manufacturing across multiple factories when sensitive IP is involved.',
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'Our core strengths are electronics, apparel and textiles, home and furniture, industrial hardware, packaging, and health/beauty products. However, we can source virtually any consumer or industrial product manufactured in China.',
  },
]

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section className="bg-[#f6f7f9] section-padding">
      <div className="container-main">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1a2b4a] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#64748b] max-w-2xl mx-auto">
            Everything you need to know about working with SSourcing China.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all duration-200 ${
                  isOpen
                    ? 'bg-white border-[#c4951a]/30 shadow-sm'
                    : 'bg-white border-[#e2e8f0]'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm md:text-base font-semibold text-[#1a2b4a]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#c4951a] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4">
                    <p className="text-sm text-[#64748b] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
