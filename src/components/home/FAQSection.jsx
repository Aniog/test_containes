import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'How much does your sourcing service cost?',
    answer: 'Our pricing depends on the scope of services needed. We offer transparent pricing with no hidden fees. Basic supplier sourcing starts at a flat fee, while comprehensive services including QC and shipping coordination are typically priced as a percentage of the order value. Contact us for a customized quote based on your specific needs.',
  },
  {
    question: 'How do you verify Chinese suppliers?',
    answer: 'Our verification process includes: business license verification, on-site factory audits, production capacity assessment, quality management system review, reference checks from existing clients, and compliance verification with international standards. We maintain detailed reports for each verified supplier in our network.',
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We work across all major manufacturing industries including electronics, home goods, apparel, machinery, promotional products, building materials, and more. Our team has deep expertise in navigating the specific challenges and standards of each industry.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Initial supplier identification typically takes 3-5 business days. The full process from inquiry to first shipment usually takes 30-60 days depending on product complexity, sample approval, and production lead times. We provide detailed timelines at the start of each project.',
  },
  {
    question: 'Can you help with small order quantities?',
    answer: 'Yes, we work with businesses of all sizes. While minimum order quantities vary by product and factory, we have relationships with suppliers who accommodate smaller orders, especially for new product launches or market testing. We will find the right solution for your volume needs.',
  },
  {
    question: 'What quality control measures do you implement?',
    answer: 'We implement a comprehensive QC process: pre-production sample approval, in-line inspections during manufacturing, pre-shipment inspections using AQL standards, and loading supervision. Each inspection includes detailed reports with photos and measurements.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Common questions about our China sourcing services. Can't find what you're looking for? Contact us directly.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-navy pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 p-8 bg-gray-50 rounded-xl">
          <h3 className="text-xl font-bold text-navy mb-3">Still have questions?</h3>
          <p className="text-gray-600 mb-5">Our team is ready to help with any questions about sourcing from China.</p>
          <a
            href="/contact"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-block"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
