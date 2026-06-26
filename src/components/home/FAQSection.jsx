import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What types of products can you source from China?',
    answer: 'We source a wide range of products including electronics, machinery, textiles, home goods, auto parts, building materials, and more. If it is manufactured in China, we can help you find a reliable supplier for it.',
  },
  {
    question: 'How do you verify suppliers and factories?',
    answer: 'We conduct on-site factory audits that verify business licenses, production capacity, quality management systems (ISO certifications), worker conditions, and actual manufacturing capabilities. We also check references from existing clients and review export history.',
  },
  {
    question: 'What does your quality inspection process include?',
    answer: 'We offer three types of inspections: pre-production inspection (checking raw materials and components), during-production inspection (monitoring quality at key milestones), and pre-shipment inspection (final check before goods leave the factory). Each inspection includes detailed photo reports.',
  },
  {
    question: 'How much does your sourcing service cost?',
    answer: 'Our pricing depends on the complexity and scope of your sourcing needs. We offer flexible pricing models including project-based fees and retainer arrangements. Contact us for a free initial consultation and quote.',
  },
  {
    question: 'Can you help with small order quantities?',
    answer: 'Yes, we work with buyers of all sizes. While minimum order quantities vary by product and supplier, we can help negotiate favorable terms even for smaller orders, especially when building a new supplier relationship.',
  },
  {
    question: 'How long does the sourcing process typically take?',
    answer: 'Timelines vary by product complexity. Supplier identification typically takes 1-2 weeks, factory verification another 1-2 weeks, and sample development 2-4 weeks. We provide a detailed timeline estimate during our initial consultation.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes, we coordinate end-to-end logistics including freight booking (sea, air, or rail), customs documentation, import/export compliance, and delivery tracking. We work with reliable freight forwarders to ensure smooth delivery.',
  },
  {
    question: 'What happens if there is a quality issue with my order?',
    answer: 'If a quality issue is found during inspection, we work with the factory to resolve it before shipment. If an issue is discovered after delivery, we help facilitate claims and remediation with the supplier. Our goal is to prevent issues before they occur through thorough inspection.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-neutral-200 overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-neutral-50 transition-colors"
              >
                <span className="font-semibold text-neutral-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-neutral-500 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
