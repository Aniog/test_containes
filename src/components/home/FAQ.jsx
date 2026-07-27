import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'How do you verify suppliers in China?',
    answer: 'We conduct comprehensive supplier verification that includes business license verification, factory visits, production capacity assessment, quality management system review, and reference checks from existing clients. Our local team visits every factory before we recommend them to our clients.',
  },
  {
    question: 'What are your fees and pricing structure?',
    answer: 'We offer transparent pricing with no hidden fees. Our services are typically charged as a percentage of the order value, which varies based on product complexity and order volume. We provide detailed quotes upfront so you know exactly what to expect. Contact us for a customized quote based on your specific needs.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'The timeline varies depending on product complexity and requirements. Initial supplier identification typically takes 3-5 business days. Sample production and approval usually takes 7-14 days. Production lead times vary by product but typically range from 15-45 days. We provide detailed timelines for each project.',
  },
  {
    question: 'Can you handle small quantity orders?',
    answer: 'Yes, we work with businesses of all sizes. While minimum order quantities vary by supplier and product, we have relationships with manufacturers who accept smaller orders. We\'ll help you find the right supplier that matches your volume requirements.',
  },
  {
    question: 'What quality control measures do you implement?',
    answer: 'Our quality control process includes pre-production sample approval, in-line production inspections, pre-shipment inspections, and container loading supervision. We use internationally recognized standards (AQL) and provide detailed inspection reports with photos for every order.',
  },
  {
    question: 'Do you handle shipping and logistics?',
    answer: 'Yes, we provide complete shipping and logistics services including freight forwarding, customs clearance, documentation, and door-to-door delivery. We work with reliable shipping partners to ensure your products arrive safely and on time.',
  },
  {
    question: 'What happens if there are quality issues with my order?',
    answer: 'If quality issues are identified during inspection, we work with the supplier to resolve them before shipment. This may include rework, replacement, or negotiation for compensation. We act as your advocate to ensure you receive products that meet your specifications.',
  },
  {
    question: 'Which countries do you serve?',
    answer: 'We serve clients worldwide, with primary markets in North America, Europe, Australia, and the Middle East. Our team is experienced in handling international sourcing requirements and understands the specific regulations and standards for different markets.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="section-padding bg-gray-50" id="faq">
      <div className="container-custom">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>
            Find answers to common questions about our China sourcing services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 last:mb-0"
            >
              <button
                className="w-full flex items-center justify-between p-5 bg-white rounded-xl shadow-soft hover:shadow-medium transition-shadow text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-5 bg-white rounded-b-xl border-t border-gray-100 -mt-2">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
