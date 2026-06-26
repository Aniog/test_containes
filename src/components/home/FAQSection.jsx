import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

const faqs = [
  {
    question: 'How do you find and verify suppliers?',
    answer: 'We source suppliers from our pre-vetted network, industry exhibitions, and verified databases. Every recommended supplier undergoes an on-site factory audit where we verify their business license, production capacity, quality management system, and relevant certifications.',
  },
  {
    question: 'What does your quality inspection cover?',
    answer: 'Our inspections follow AQL (Acceptable Quality Level) standards. We offer pre-production inspections (checking raw materials), during-production inspections (monitoring quality on the line), and pre-shipment inspections (final check before shipping). We check appearance, dimensions, functionality, packaging, and labeling.',
  },
  {
    question: 'How much does your sourcing service cost?',
    answer: 'Our pricing depends on the scope of work. We offer transparent, project-based pricing with no hidden fees. Basic sourcing and supplier matching starts at a competitive rate, while full-service packages including QC and shipping coordination are priced accordingly. Contact us for a free quote tailored to your needs.',
  },
  {
    question: 'What is the minimum order quantity (MOQ)?',
    answer: 'MOQ varies by product and supplier. We work with factories that offer flexible MOQs suitable for both small businesses and large enterprises. We always discuss MOQ requirements upfront and find suppliers that match your order volume.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Typical timeline: supplier sourcing and quoting takes 5-7 business days, factory verification takes 3-5 business days, sample development takes 7-15 days, and production lead time depends on the product (usually 15-45 days). We provide a detailed timeline at the start of each project.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes. We coordinate sea freight, air freight, and express shipping. We handle booking, documentation, and work with freight forwarders to ensure smooth customs clearance. We can arrange door-to-door delivery to most countries.',
  },
  {
    question: 'What if the quality does not meet my expectations?',
    answer: 'If pre-shipment inspection reveals quality issues, we work with the factory to resolve them before shipping. If problems are found after delivery, we assist with claims and remediation. Our goal is to catch issues before they reach you.',
  },
  {
    question: 'Can you help with product development or customization?',
    answer: 'Yes. We can help with product design refinement, material selection, prototyping, and OEM/ODM manufacturing. We coordinate between you and the factory to ensure your specifications are accurately implemented.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24 bg-section-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="FAQ"
          title="Frequently Asked Questions"
          description="Common questions about our sourcing services, answered clearly."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-border-gray overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-section-bg/50 transition-colors"
              >
                <span className="text-base font-semibold text-navy pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-text flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-muted-text text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
