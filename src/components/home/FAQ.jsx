import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What are your service fees?',
    answer: 'We offer flexible pricing models including fixed fee project-based sourcing starting at 99, and commission-based plans (3-7%) for ongoing production management. Contact us for a custom quote.'
  },
  {
    question: 'Do you have a Minimum Order Value (MOV)?',
    answer: 'While we work with businesses of all sizes, our services are most cost-effective for orders over ,000 USD. However, we can help smaller startups and Amazon sellers with lower volumes depending on the product category.'
  },
  {
    question: 'How do you verify if a factory is legitimate?',
    answer: 'Our on-the-ground team performs multi-step verification: checking business licenses, export permits, tax records, and conducting physical factory visits to inspect production lines and employee conditions.'
  },
  {
    question: 'Can you handle shipping and customs clearance?',
    answer: 'Yes, we coordinate the entire logistics chain. This includes consolidation of goods from multiple suppliers, warehousing, preparation of export documents, and arranging sea/air/express freight to your door or FBA warehouse.'
  },
  {
    question: 'Do you provide quality inspection reports?',
    answer: 'Absolutely. After every inspection, we provide a comprehensive PDF report with high-resolution photos, videos, and a detailed checklist verification of your products, packaging, and quantities.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-bold text-slate-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-5 bg-slate-50 border-t border-slate-200 text-slate-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
