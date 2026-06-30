import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What types of products do you source?',
    a: 'We source across a wide range of categories including electronics, home & garden, apparel, industrial equipment, packaging, health & beauty, and more. If you have a specific product in mind, contact us and we will assess feasibility.',
  },
  {
    q: 'How do you verify suppliers?',
    a: 'We conduct on-site factory audits to check business licenses, production capacity, quality management systems, certifications, and working conditions. We also review trade references and past export records.',
  },
  {
    q: 'What is your pricing structure?',
    a: 'Our pricing depends on the scope of work. We offer both project-based and retainer models. Contact us for a free, no-obligation quote tailored to your specific sourcing needs.',
  },
  {
    q: 'How do you handle quality control?',
    a: 'We implement multi-stage quality control including raw material checks, during-production inspections, pre-shipment inspections, and third-party lab testing when required. Detailed inspection reports are provided for each stage.',
  },
  {
    q: 'What is the minimum order quantity (MOQ)?',
    a: 'MOQ varies by product and supplier. We work with factories that accommodate both small-batch orders for startups and large-volume production for established businesses. We will find options that match your requirements.',
  },
  {
    q: 'How do you protect my product designs?',
    a: 'We require all suppliers we work with to sign Non-Disclosure Agreements (NDAs). We also recommend registering intellectual property in China and can assist with the process.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Timelines vary by product complexity. Typically, supplier identification takes 1-2 weeks, sample development 2-4 weeks, and production 4-8 weeks. We provide detailed timelines during the initial consultation.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'Yes, we coordinate freight, consolidation, customs documentation, and door-to-door delivery. We work with major freight forwarders and can handle both air and sea freight.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          Common questions about our China sourcing services.
        </p>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-5 lg:p-6 text-left bg-white hover:bg-navy-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-sm lg:text-base font-medium text-navy-900 pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 lg:px-6 pb-5 lg:pb-6">
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}