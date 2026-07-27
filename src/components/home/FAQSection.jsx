import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct thorough background checks including business license verification, factory audits, production capacity assessment, and reference checks from previous clients. Each supplier in our network has been personally visited and evaluated.',
  },
  {
    question: 'What are your fees?',
    answer: 'We charge a transparent sourcing fee based on the order value, typically 5-10%. There are no hidden costs. We provide detailed quotations before any commitment, and our fees include all services from supplier sourcing to shipping coordination.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'The timeline varies depending on product complexity and quantity. Typically, supplier identification takes 3-5 days, sampling takes 7-14 days, and production takes 15-45 days. We provide detailed timelines at the start of each project.',
  },
  {
    question: 'Can you handle small orders?',
    answer: 'Yes, we work with businesses of all sizes. While minimum order quantities vary by product and supplier, we can often negotiate lower MOQs for first-time orders or help you find suppliers who accommodate smaller quantities.',
  },
  {
    question: 'What quality control measures do you use?',
    answer: 'We implement multi-stage quality control: pre-production sample approval, during-production inspections, and pre-shipment inspections. We follow international quality standards and can conduct specific tests based on your requirements.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes, we provide end-to-end shipping coordination including freight forwarding, customs clearance, and documentation. We work with reliable logistics partners and can arrange sea, air, or rail freight based on your needs.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section bg-white" id="faq">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Common questions about our sourcing services
          </p>
        </div>

        {/* FAQ grid */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-semibold text-gray-900">
                      {faq.question}
                    </span>
                  </div>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 pl-15">
                    <p className="text-gray-600 ml-9">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Have more questions? We're here to help.
          </p>
          <Link
            to="/contact"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
          >
            Contact Us
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
