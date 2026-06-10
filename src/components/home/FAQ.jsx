import { useState } from 'react'
import { ChevronDown, Plus } from 'lucide-react'

const faqs = [
  {
    question: 'What types of products can you help me source from China?',
    answer: 'We source a wide range of products including furniture, textiles, electronics, hardware, packaging, industrial parts, and more. If you have a product in mind, reach out and we will let you know if we can help.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct on-site factory visits to verify business licenses, production capacity, facilities, and workforce. We also check references and previous client feedback. Every supplier in our network has been personally verified by our team.',
  },
  {
    question: 'What is your quality control process?',
    answer: 'We offer quality inspections at multiple stages: pre-production sample approval, inline inspections during production, and pre-shipment inspections using AQL 2.5 standards. We can also arrange third-party inspections by SGS, Bureau Veritas, or Intertek.',
  },
  {
    question: 'How much do your services cost?',
    answer: 'Our pricing depends on the services you need. We offer transparent, project-based pricing. Contact us for a free quote tailored to your specific requirements. Most clients find our fees pay for themselves through quality improvements and reduced risks.',
  },
  {
    question: 'What are your shipping and logistics capabilities?',
    answer: 'We handle sea freight, air freight, and express shipping. We work with established logistics partners to ensure competitive rates and reliable delivery. We also manage all customs documentation and can arrange door-to-door delivery.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Timeline varies based on product complexity and supplier availability. Typical timelines: supplier identification 1-2 weeks, sample approval 2-4 weeks, production 4-12 weeks, shipping 2-6 weeks. We will provide a detailed timeline during the quote process.',
  },
  {
    question: 'Do you work with small orders?',
    answer: 'Yes, we work with businesses of all sizes. While some factories have minimum order requirements, we help connect you with suppliers that match your order volumes. Let us know your quantities and we will find suitable options.',
  },
  {
    question: 'What if products arrive with quality issues?',
    answer: 'If issues arise, we act as your advocate with the supplier. We document defects, negotiate solutions, and work to resolve problems. Our pre-shipment inspections significantly reduce the risk of issues, but we support you if problems occur.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-600">
            Find answers to common questions about our China sourcing services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-neutral-50 rounded-xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-neutral-100 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-neutral-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-neutral-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-neutral-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-primary-50 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-neutral-900 mb-2">
            Have more questions?
          </h3>
          <p className="text-neutral-600 mb-4">
            Our team is ready to answer any questions about your sourcing needs.
          </p>
          <a
            href="mailto:contact@ssourcingchina.com"
            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
          >
            Contact Us
            <ChevronDown className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}