import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'How do I start a sourcing project with SSourcing China?',
    answer: 'Simply fill out our inquiry form with your product requirements, target quantity, and any specifications you have. Our team will review your request and respond within 24 hours with next steps and an initial assessment.',
  },
  {
    question: 'What are your fees?',
    answer: 'Our fees depend on the scope and complexity of your project. We offer transparent pricing with no hidden costs. After reviewing your requirements, we provide a detailed quote before any work begins. Typical fees range from 5-10% of order value for full-service sourcing.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct on-site factory audits that include business license verification, production capacity assessment, quality management system review, and reference checks with existing clients. We also verify export licenses and relevant certifications.',
  },
  {
    question: 'Can you handle small order quantities?',
    answer: 'Yes, we work with buyers of all sizes. While some factories have minimum order quantities (MOQs), we can often negotiate lower MOQs or find suppliers willing to work with smaller orders. We will advise you on realistic expectations for your product category.',
  },
  {
    question: 'What if the quality does not meet my standards?',
    answer: 'Quality issues are caught during our inspection process before shipment. If defects are found, we work with the supplier to resolve the issue at their cost. Our multi-stage inspection approach (pre-production, during production, pre-shipment) minimizes the risk of quality problems.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes, we provide end-to-end logistics support including freight forwarding, customs documentation, warehousing, and coordination with your preferred freight forwarder. We can arrange shipping by sea, air, or express courier depending on your needs.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Timeline depends on product complexity and order size. Supplier sourcing typically takes 1-2 weeks, sampling 2-4 weeks, and production 4-8 weeks. We provide a detailed timeline for each project so you know what to expect.',
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We have experience across many industries including electronics, machinery, consumer goods, textiles, building materials, auto parts, medical equipment, and packaging. If your product is manufactured in China, we can source it.',
  },
]

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">FAQ</span>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Common questions about our sourcing services and process.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-slate-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 md:px-5 pb-4 md:pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
