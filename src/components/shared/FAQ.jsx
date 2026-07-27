import { useState } from 'react'
import SectionHeading from '@/components/shared/SectionHeading'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is a China sourcing agent?',
    answer: 'A China sourcing agent is a professional intermediary based in China who helps overseas buyers find reliable suppliers, negotiate prices, verify factories, inspect quality, and coordinate shipping. We act as your local team on the ground.',
  },
  {
    question: 'How much do your services cost?',
    answer: 'Our pricing depends on the scope of work. Typically, we charge a service fee based on order value (usually 5-10%) or a fixed project fee. We provide a detailed quote before starting any work — no hidden costs.',
  },
  {
    question: 'What is the minimum order quantity (MOQ)?',
    answer: 'MOQ depends on the product and supplier. We work with factories that accommodate various order sizes. For most products, MOQs range from 100 to 1,000 units. We can negotiate lower MOQs for first orders.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct on-site factory audits checking business licenses, production capacity, equipment, worker conditions, quality systems, and export experience. We provide a detailed audit report with photos and recommendations.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Initial supplier shortlisting takes 3-5 business days. Sample production typically takes 7-15 days. The full process from inquiry to first shipment usually takes 4-8 weeks depending on product complexity.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes. We coordinate the entire logistics chain including freight booking, export documentation, customs clearance, and delivery tracking. We work with trusted freight forwarders for sea, air, and express shipping.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Common questions from buyers considering China sourcing."
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-surface/50 transition-colors border-none cursor-pointer"
              >
                <span className="text-base font-medium text-text-primary pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-text-muted flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-text-secondary leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
