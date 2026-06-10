import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const faqs = [
  {
    question: 'What minimum order quantities (MOQ) can you handle?',
    answer: 'MOQs vary by supplier and product. We work with factories that accept MOQs as low as 500 units for some products, though many require 1,000+ units. We can help you find suppliers matching your volume requirements.',
  },
  {
    question: 'How do you verify suppliers are legitimate?',
    answer: 'We conduct on-site factory visits to verify business licenses, production capacity, equipment, and workforce. We also check financial stability and customer references. You receive detailed audit reports before any commitment.',
  },
  {
    question: 'What quality control inspections do you offer?',
    answer: 'We offer three types: pre-production inspection (material and component verification), during-production inspection (inline quality checks), and pre-shipment inspection (final product verification against your specifications). Reports include photos and detailed findings.',
  },
  {
    question: 'How do you handle shipping and logistics?',
    answer: 'We work with established freight forwarders offering sea freight, air freight, and express shipping. We handle documentation, customs clearance, and can coordinate door-to-door delivery. You get real-time tracking throughout the journey.',
  },
  {
    question: 'What are your service fees?',
    answer: 'Our pricing is transparent and based on the services you need. We provide detailed quotes upfront with no hidden fees. Typical arrangements include a project fee plus a percentage of order value, or fixed rates for specific services like inspections.',
  },
  {
    question: 'Can you help with product development and prototyping?',
    answer: 'Yes. We can connect you with factories that offer OEM and ODM services, assist with technical drawings, source materials, and manage prototype development. This is especially valuable for custom or innovative products.',
  },
  {
    question: 'How do you handle communication between us and Chinese suppliers?',
    answer: 'Our bilingual team acts as your liaison, translating specifications, negotiating terms, and ensuring clear understanding on both sides. We use your preferred communication channels and provide regular updates in your timezone.',
  },
  {
    question: 'What happens if there are quality issues with my order?',
    answer: 'We document all inspection results and require suppliers to address any non-conformances before shipment. If issues arise after delivery, we help mediate with suppliers and work toward resolution, whether replacement, refund, or compensation.',
  },
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Quick answers to common questions about our China sourcing services"
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-primary pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-secondary flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-secondary-50 rounded-xl p-8">
          <p className="text-slate-600 mb-4">Have more questions?</p>
          <a href="/contact" className="text-secondary font-semibold hover:text-secondary-600 transition-colors">
            Contact us for a personalized consultation
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQSection