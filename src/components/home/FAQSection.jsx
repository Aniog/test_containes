import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'How do I get started with sourcing from China?',
    answer: 'Simply submit your product requirements through our contact form or email us directly. We will review your needs, provide a free sourcing quote, and assign a dedicated project manager to your case.',
  },
  {
    question: 'What are your fees?',
    answer: 'Our fees depend on the scope of services required. We offer transparent pricing with no hidden costs. Typical sourcing service fees range from 5-10% of order value, with separate fees for inspections and shipping coordination.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct on-site factory audits that include checking business licenses, production facilities, quality management systems, worker conditions, and past client references. We only recommend suppliers that pass our verification process.',
  },
  {
    question: 'Can you handle small orders?',
    answer: 'Yes, we work with buyers of all sizes. While some factories have minimum order quantities, we can help you find suppliers willing to work with smaller volumes, especially for sample orders and initial runs.',
  },
  {
    question: 'How do you ensure product quality?',
    answer: 'We offer multiple inspection points: pre-production checks, during-production monitoring, and pre-shipment inspections. Our QC teams use AQL sampling standards and provide detailed reports with photos and measurements.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes, we coordinate end-to-end logistics including freight forwarding, customs documentation, and delivery to your warehouse or Amazon FBA. We work with trusted logistics partners to ensure smooth delivery.',
  },
  {
    question: 'What if there is a problem with my order?',
    answer: 'We act as your representative on the ground. If issues arise, we communicate directly with the factory, negotiate solutions, and keep you informed at every step. Our goal is to resolve problems before they reach you.',
  },
  {
    question: 'Which countries do you ship to?',
    answer: 'We coordinate shipping to destinations worldwide, including the United States, Europe, Australia, Canada, and other major markets. We handle the documentation required for your specific destination country.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="section-padding bg-[#f5f7fa]">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-[#1a2744] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#4a5568] max-w-2xl mx-auto text-base md:text-lg">
            Common questions about our China sourcing services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#e2e8f0] last:border-b-0">
              <button
                className="w-full flex items-center justify-between py-5 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-medium text-[#1a2744] pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-[#d4a843] flex-shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-[#4a5568] flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="pb-5">
                  <p className="text-[#4a5568] text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
