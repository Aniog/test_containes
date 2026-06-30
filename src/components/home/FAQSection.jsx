import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How do you find suppliers?',
    a: 'We use a combination of online B2B platforms, industry databases, trade show contacts, and our established network of verified manufacturers. Every potential supplier is screened before being presented to you.',
  },
  {
    q: 'What does factory verification involve?',
    a: 'Our team visits the factory in person to assess production lines, inspect equipment, review certifications, evaluate quality control processes, and check business licenses. You receive a detailed report with photos.',
  },
  {
    q: 'How much do your services cost?',
    a: 'Our fees depend on the scope of work. We offer transparent pricing with no hidden charges. Contact us for a free quote tailored to your specific sourcing needs.',
  },
  {
    q: 'What product categories do you source?',
    a: 'We source across a broad range including electronics, industrial equipment, home goods, apparel, auto parts, construction materials, packaging, and health products. If it is manufactured in China, we can help.',
  },
  {
    q: 'Do you handle shipping and logistics?',
    a: 'Yes. We coordinate sea freight, air freight, and express shipping. We handle documentation, customs clearance, and can arrange door-to-door delivery to your warehouse.',
  },
  {
    q: 'What is the minimum order quantity?',
    a: 'MOQs vary by supplier and product category. We work with factories that accommodate both small and large order volumes. We will identify suppliers whose MOQs match your requirements.',
  },
  {
    q: 'How do you ensure product quality?',
    a: 'We conduct during-production inspections and pre-shipment inspections using AQL (Acceptable Quality Limit) standards. Our inspectors check dimensions, materials, function, packaging, and provide photo evidence.',
  },
  {
    q: 'How do I get started?',
    a: 'Simply fill out the contact form or email us with details about the products you want to source. We will respond within 1-2 business days to discuss your requirements and provide a free sourcing assessment.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Answers to common questions about working with a China sourcing agent.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-gray-900 pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
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