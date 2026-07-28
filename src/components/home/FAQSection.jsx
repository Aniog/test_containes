import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What industries do you specialize in?',
    answer: 'We source across a broad range of industries including apparel, electronics, home goods, furniture, industrial equipment, promotional items, and more. If it can be manufactured in China, we can help you find the right supplier.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct in-person factory visits to verify business licenses, assess production capabilities, inspect facilities, and check certifications. We also review past client references and export history when available.',
  },
  {
    question: 'What are your service fees?',
    answer: 'Our fee structure depends on the scope of services required. We offer transparent pricing with no hidden costs. Contact us for a free, no-obligation quote tailored to your specific sourcing needs.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Typical timelines range from 2-6 weeks for supplier identification and verification, followed by 4-12 weeks for production depending on product complexity. We provide regular updates throughout the process.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes, we coordinate freight forwarding, handle export documentation, and manage shipping arrangements. We can arrange sea, air, or express shipping based on your timeline and budget.',
  },
  {
    question: 'What is the minimum order quantity (MOQ)?',
    answer: 'MOQs vary by supplier and product type. We work with our network to find suppliers that match your volume requirements, whether you need small batch production or large-scale manufacturing.',
  },
  {
    question: 'How do you handle quality control?',
    answer: 'We implement a multi-stage QC process including pre-production checks, during-production inspections, and final pre-shipment inspection using internationally recognized sampling standards (AQL).',
  },
  {
    question: 'Can you help with product customization?',
    answer: 'Absolutely. We work with suppliers who offer OEM and ODM services. We help communicate your specifications, manage samples, and ensure the final product matches your requirements.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="section-padding bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Common questions about sourcing from China and working with our team.
        </p>
        <div className="max-w-3xl mx-auto mt-12 space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
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