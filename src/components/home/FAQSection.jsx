import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What types of products can you source?',
    answer: 'We source across a wide range of categories including electronics, home goods, apparel, industrial parts, packaging, and auto parts. If it is made in China, we can likely find a qualified supplier for it. Contact us with your specific product requirements.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct on-site factory audits that verify business licenses, production capacity, quality management systems, and actual manufacturing capabilities. We also check references, review export history, and assess financial stability before recommending any supplier.',
  },
  {
    question: 'What are your fees?',
    answer: 'Our pricing depends on the scope of work. We offer flexible models including commission-based, project-based, and retainer options. We always provide a clear quote before starting any work. Contact us for a free initial consultation.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes. We coordinate freight booking (sea, air, rail), handle export documentation, arrange consolidation from multiple suppliers, and work with customs brokers to ensure smooth clearance. We can manage door-to-door delivery to most destinations.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Typical supplier identification and verification takes 5-10 business days. Sample arrangement adds another 7-14 days depending on the product. Production timelines vary by product and quantity. We provide realistic timelines upfront and keep you updated throughout.',
  },
  {
    question: 'What if I already have a supplier but need quality control?',
    answer: 'We offer standalone QC inspection services. We can inspect your existing suppliers at any production stage — pre-production, during production, or pre-shipment — and provide detailed reports with photos and findings.',
  },
  {
    question: 'Do you sign NDAs to protect my product designs?',
    answer: 'Yes. We routinely sign NDAs with clients and can also arrange NNN agreements with suppliers to protect your intellectual property, designs, and specifications before sharing them with any factory.',
  },
  {
    question: 'What happens if a shipment has quality issues?',
    answer: 'If our pre-shipment inspection identifies issues, we work with the factory to resolve them before shipment. If problems are found after delivery, we help negotiate remedies with the supplier, including rework, replacement, or refund, depending on the situation.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24 bg-surface" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-3">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-steel text-lg">
            Common questions about our China sourcing services.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-semibold text-primary-dark pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-custom flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-steel text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
