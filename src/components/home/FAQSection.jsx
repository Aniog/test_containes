import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How do you find suppliers for my product?',
    a: 'We start by understanding your product specifications, quality standards, and target price. Then we search our database of 5,000+ vetted factories, contact potential matches, and shortlist 3-5 suppliers that best fit your requirements. You receive detailed profiles with factory photos and capabilities.',
  },
  {
    q: 'What does a factory verification include?',
    a: 'Our on-site factory audit covers business license verification, production capacity assessment, quality management system review, worker conditions, and compliance with relevant standards. You receive a comprehensive report with photos and our recommendation.',
  },
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our pricing depends on the scope of work. We offer flexible models including project-based fees and commission structures. Basic sourcing inquiries are free — contact us for a detailed quote based on your specific needs.',
  },
  {
    q: 'Do you handle small orders?',
    a: 'Yes. We work with clients of all sizes, from startups with small trial orders to large enterprises with high-volume production. We help negotiate MOQs that work for your business stage.',
  },
  {
    q: 'How do you ensure product quality?',
    a: 'We implement a multi-step quality control process: pre-production sample approval, during-production inspections, and pre-shipment final inspection. All inspections follow your specifications and AQL standards, with detailed photo reports.',
  },
  {
    q: 'What happens if there is a quality issue?',
    a: 'If we find quality issues during inspection, we immediately notify you with a detailed report and photos. We work with the factory to resolve the issue — whether that means rework, replacement, or finding an alternative supplier. Our goal is to prevent defective goods from shipping.',
  },
  {
    q: 'Can you help with shipping and customs?',
    a: 'Yes. We coordinate freight booking (air, sea, or rail), prepare customs documentation, and manage door-to-door delivery. We work with reliable freight forwarders to ensure smooth logistics.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Initial supplier matching typically takes 5-7 business days. Factory verification takes another 3-5 days. The full process from inquiry to sample delivery varies by product but usually takes 2-4 weeks for the sourcing phase.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-amber font-semibold text-sm uppercase tracking-wider mb-2">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-lg">
            Common questions about our China sourcing services.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-slate-900 font-semibold text-sm md:text-base pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-5">
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
