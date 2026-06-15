import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What services does SSourcing China provide?',
    answer: 'We provide comprehensive sourcing services including supplier identification and verification, factory audits, quality inspection, production monitoring, price negotiation, and shipping coordination. We act as your local representative in China.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct on-site factory audits that include checking business licenses, verifying production capacity, reviewing quality control systems, and assessing working conditions. We also check the supplier\'s track record and client references.',
  },
  {
    question: 'What is your minimum order quantity (MOQ) requirement?',
    answer: 'We work with businesses of all sizes. While some factories have MOQ requirements, we leverage our relationships to negotiate lower MOQs when possible. We can discuss your specific needs during the initial consultation.',
  },
  {
    question: 'How do you ensure product quality?',
    answer: 'We implement a multi-stage quality control process including during-production inspections, pre-shipment inspections, and container loading supervision. We check against your specifications and provide detailed inspection reports with photos.',
  },
  {
    question: 'What are your fees?',
    answer: 'Our fee structure is transparent and depends on the scope of services required. We typically charge a service fee based on the project complexity and order value. We provide a detailed quotation after understanding your specific requirements.',
  },
  {
    question: 'Can you help with shipping and logistics?',
    answer: 'Yes, we provide complete logistics support including freight forwarding, customs clearance, and door-to-door delivery. We work with reliable logistics partners to ensure your goods arrive safely and on time.',
  },
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about our sourcing services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-gray-500 flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-gray-500 flex-shrink-0" size={20} />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
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
