import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'How much does your sourcing service cost?',
    answer: 'Our fees depend on the service level and order complexity. We offer transparent pricing with no hidden fees. Contact us for a free quote tailored to your specific needs.',
  },
  {
    question: 'What is the minimum order quantity (MOQ)?',
    answer: 'MOQs vary by product and supplier. We work with suppliers who can accommodate both small and large orders. We\'ll help you find the right supplier based on your quantity requirements.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Typically, supplier identification takes 3-7 days. Sample approval takes 1-2 weeks. Production lead time varies by product, usually 2-6 weeks. We provide detailed timelines for each project.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes, we provide complete shipping coordination including customs documentation, freight forwarding, and delivery tracking. We ship via sea, air, and rail depending on your needs.',
  },
  {
    question: 'What happens if there are quality issues?',
    answer: 'We conduct multiple quality inspections throughout production. If issues are found, we work with the supplier to resolve them before shipment. We also offer quality guarantees on our inspection services.',
  },
  {
    question: 'Can you help with product customization?',
    answer: 'Absolutely. We work with suppliers who offer OEM and ODM services. From custom packaging to product modifications, we help you create products that match your brand specifications.',
  },
  {
    question: 'Which countries do you serve?',
    answer: 'We serve clients worldwide, with primary markets in North America, Europe, Australia, and the Middle East. Our team handles all logistics regardless of your location.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'Our verification process includes business license checks, on-site factory audits, certification verification, production capability assessment, and financial stability evaluation.',
  },
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="section-padding bg-white" id="faq">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-100 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle mx-auto">
            Get answers to common questions about our sourcing services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-0">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-6 text-left"
              >
                <span className="text-lg font-semibold text-navy pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-navy-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="pb-6 animate-fade-in">
                  <p className="text-navy-500">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
