import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How much do your sourcing services cost?',
    answer: 'We offer flexible pricing models depending on your project size and complexity. For simple supplier sourcing, we charge a flat fee. For ongoing projects, we work on a commission basis tied to order value. Contact us for a free quote tailored to your needs.',
  },
  {
    question: 'How long does it take to find a suitable supplier?',
    answer: 'For standard products, we typically deliver an initial shortlist of 3-5 verified suppliers within 48 hours. For specialized or custom products, the timeline may extend to 5-7 business days to ensure we find the right match.',
  },
  {
    question: 'Do you charge any upfront fees?',
    answer: 'No. We do not charge any upfront fees for initial consultations or supplier shortlists. Our fees are structured around successful sourcing outcomes, so our interests are aligned with yours.',
  },
  {
    question: 'Can you help with product development and customization?',
    answer: 'Yes. We work with OEM and ODM manufacturers and can assist with prototyping, custom packaging design, private labeling, and product modifications. Our project managers coordinate directly with factory engineers.',
  },
  {
    question: 'What quality standards do your inspections follow?',
    answer: 'Our inspectors follow internationally recognized AQL (Acceptable Quality Limit) sampling standards. We conduct pre-production, during-production, pre-shipment, and container-loading inspections based on your requirements.',
  },
  {
    question: 'Which countries do you ship to?',
    answer: 'We coordinate shipping to over 35 countries across North America, Europe, Australia, Southeast Asia, and the Middle East. We handle sea freight, air freight, and express courier depending on your timeline and budget.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about working with SSourcing China.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-navy pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
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
