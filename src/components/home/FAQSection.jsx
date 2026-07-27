import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What does a China sourcing agent do?',
    answer: 'A sourcing agent acts as your local representative in China. We find suppliers, verify factories, inspect product quality, follow production progress, and coordinate shipping — so you do not have to manage these tasks remotely or rely solely on online platforms.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'We visit factories in person, check business licenses and registration documents, assess production capacity and equipment, review quality management systems, and verify export experience. We also check references from other international buyers when available.',
  },
  {
    question: 'What are your quality inspection standards?',
    answer: 'We follow AQL (Acceptable Quality Level) standards, which are internationally recognized inspection protocols. We conduct pre-production inspections, during-production checks, and pre-shipment final inspections. Each inspection includes detailed photo reports with measurable results.',
  },
  {
    question: 'How much does your sourcing service cost?',
    answer: 'Our pricing depends on the scope of work — product category, order size, and services needed. We provide free initial consultations and transparent quotes with no hidden fees. Contact us for a free sourcing quote tailored to your project.',
  },
  {
    question: 'Can you source any type of product?',
    answer: 'We source across a wide range of categories including electronics, textiles, hardware, home goods, packaging, auto parts, and more. If a product is manufactured in China, we can help find a reliable supplier for it. Contact us with your specific requirements.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes. We coordinate logistics from factory to port, handle export documentation, work with freight forwarders for sea and air shipments, and assist with customs paperwork. We can arrange FCL, LCL, and air freight depending on your order size and urgency.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Timelines vary by product and order complexity. Supplier search and verification typically takes 1-2 weeks. Sampling takes 2-4 weeks. Production timelines depend on order size. We provide estimated timelines at the start of each project and keep you updated throughout.',
  },
  {
    question: 'What if I already have a supplier but need quality inspections?',
    answer: 'We work with existing supplier relationships too. You can engage us specifically for quality inspections, production follow-up, or shipping coordination without changing your current supplier. Our inspection services are available as standalone engagements.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600">
            Common questions about our China sourcing services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left border-0 bg-transparent"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-medium text-slate-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-slate-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
