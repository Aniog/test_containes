import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What types of products can you source?',
    a: 'We source across virtually all manufacturing categories including apparel, electronics, home goods, industrial equipment, auto parts, health and beauty, packaging, and more. If it is manufactured in China, we can help you find a reliable supplier.',
  },
  {
    q: 'How do you verify suppliers and factories?',
    a: 'We conduct on-site audits that include verification of business licenses, manufacturing facilities, production capacity, quality control systems, certifications, and worker conditions. We provide a detailed audit report with photos and recommendations.',
  },
  {
    q: 'What is the typical cost of your services?',
    a: 'Our fees depend on the scope and complexity of the project. We offer competitive pricing structures including project-based fees and commission models. Contact us for a free, no-obligation quote tailored to your specific needs.',
  },
  {
    q: 'How do you handle quality control?',
    a: 'We implement a multi-stage QC process including raw material inspection, during-production checks, pre-shipment inspection, and final product testing. We use AQL (Acceptable Quality Limit) standards and provide detailed inspection reports.',
  },
  {
    q: 'What is the minimum order quantity (MOQ)?',
    a: 'MOQ varies by product category and supplier. We work with factories that accommodate different order sizes, from small-batch production to full container loads. We will find suppliers that match your volume requirements.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'A typical sourcing cycle takes 4-12 weeks from initial inquiry to first shipment, depending on product complexity, customization requirements, and supplier availability. We provide realistic timelines upfront.',
  },
  {
    q: 'Do you handle shipping and logistics?',
    a: 'Yes, we coordinate all shipping arrangements including freight forwarding, export documentation, customs clearance, and last-mile delivery. We offer sea, air, and express shipping options based on your timeline and budget.',
  },
  {
    q: 'How do you communicate with international clients?',
    a: 'You will be assigned a dedicated English-speaking account manager who serves as your single point of contact. We communicate via email, phone, and video calls, and provide regular written progress reports.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4" id="faq-section-title">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-600">
            Common questions about sourcing from China with our help.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-neutral-100 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-neutral-50 transition-colors"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-neutral-900 pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-neutral-600 leading-relaxed text-sm">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}