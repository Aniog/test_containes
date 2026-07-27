import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    q: 'What does a China sourcing agent do?',
    a: 'A sourcing agent acts as your local representative in China. We help you find suppliers, verify factories, conduct quality inspections, follow production progress, and coordinate shipping — so you can source with confidence without traveling to China.',
  },
  {
    q: 'How do you verify a factory?',
    a: 'We conduct on-site factory audits that include checking business licenses, verifying production capacity, reviewing quality management systems, inspecting facilities and equipment, and evaluating the factory\'s track record with other clients.',
  },
  {
    q: 'What types of products can you source?',
    a: 'We source across a wide range of categories including electronics, textiles, hardware, home & garden products, packaging, automotive parts, and more. If your product is manufactured in China, we can help you find a reliable supplier for it.',
  },
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our pricing depends on the scope of work — supplier search, factory audit, quality inspection, production follow-up, and shipping coordination can be bundled or selected individually. Contact us for a free quote tailored to your project.',
  },
  {
    q: 'Can you help with small orders or samples?',
    a: 'Yes. We can help with sample procurement, small trial orders, and initial supplier evaluation. Many of our clients start with samples before committing to larger production runs.',
  },
  {
    q: 'What happens if quality does not meet specifications?',
    a: 'If our pre-shipment inspection finds quality issues, we document the problems, negotiate with the factory for corrections or re-production, and keep you informed throughout the resolution process. Our goal is to ensure you receive products that meet your agreed specifications.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'Yes. We coordinate freight booking (sea, air, or rail), prepare customs documentation, arrange insurance, and manage logistics from the factory to your destination port or warehouse.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Timelines vary by product and project scope. Supplier search typically takes 1–2 weeks, factory verification 3–5 days, and sample development 2–4 weeks. We provide a detailed timeline estimate when you submit your requirements.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-16 md:py-24 bg-neutral-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-mid">
            Common questions about our China sourcing services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-base font-semibold text-primary pr-4">
                  {faq.q}
                </span>
                {openIndex === index
                  ? <ChevronUp className="w-5 h-5 text-accent shrink-0" />
                  : <ChevronDown className="w-5 h-5 text-neutral-mid shrink-0" />
                }
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-neutral-mid text-sm leading-relaxed border-t border-neutral-light">
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
