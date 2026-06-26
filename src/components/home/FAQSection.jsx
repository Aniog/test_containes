import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What types of products can you source from China?',
    a: 'We source across a wide range of categories including electronics, home goods, industrial equipment, apparel, beauty products, automotive parts, and more. Our supplier network spans 500+ verified factories across major manufacturing regions in China.',
  },
  {
    q: 'How do you verify suppliers and factories?',
    a: 'We conduct on-site factory audits, verify business licenses and certifications, check production capacity, review quality management systems, and assess past export history. Every supplier in our network passes a multi-step verification process.',
  },
  {
    q: 'What are your fees and pricing structure?',
    a: 'We offer transparent pricing based on the scope of services. Initial supplier sourcing and quotes are free. For ongoing services like QC inspections and production monitoring, we charge a competitive percentage of the order value or a flat fee, depending on the project.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Initial supplier shortlisting typically takes 3-5 business days. Samples can be arranged within 1-2 weeks. Production timelines depend on the product and quantity, but we always provide realistic schedules upfront and keep you updated throughout.',
  },
  {
    q: 'Can you handle small or trial orders?',
    a: 'Yes. We work with businesses of all sizes, from first-time importers placing trial orders to established brands managing large-scale production runs. We can negotiate flexible MOQs with our supplier network.',
  },
  {
    q: 'Do you handle shipping and customs documentation?',
    a: 'Yes. We coordinate sea freight, air freight, and express shipping. We prepare export documentation, handle customs clearance on the China side, and can coordinate with your local customs broker for import clearance.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-20 md:py-28 bg-surface-alt">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">FAQ</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-heading font-extrabold text-text">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-start justify-between gap-4 p-5 text-left"
              >
                <span className="font-heading font-semibold text-sm text-text">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-text-muted shrink-0 mt-0.5 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 -mt-1">
                  <p className="text-text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
