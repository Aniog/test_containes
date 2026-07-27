import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

const faqs = [
  {
    q: 'What types of products can you source?',
    a: "We source across most manufacturing categories in China, including electronics, home & garden, industrial parts, textiles, auto parts, health & beauty, and more. If it's made in China, we can likely find a reliable supplier for it.",
  },
  {
    q: 'How do you verify suppliers?',
    a: 'We conduct on-site factory audits that verify business licenses, production capacity, quality management systems, equipment condition, and worker conditions. We also check references and past export records.',
  },
  {
    q: 'What are your fees?',
    a: 'Our pricing depends on the scope of work. We offer flexible models including per-project fees, commission-based pricing, and monthly retainer options. Contact us for a free quote tailored to your needs.',
  },
  {
    q: 'Do I need a large order to work with you?',
    a: "No. We work with buyers of all sizes, from small trial orders to large-volume shipments. There's no minimum order commitment to start working with us.",
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Typical supplier search and verification takes 1–2 weeks. Sample production and evaluation takes another 1–3 weeks depending on the product. Full production timelines vary by product and quantity.',
  },
  {
    q: 'Can you handle shipping and customs?',
    a: 'Yes. We coordinate freight booking (air, sea, or rail), prepare customs documentation, arrange insurance, and manage door-to-door delivery logistics.',
  },
  {
    q: 'What happens if quality fails inspection?',
    a: 'If a pre-shipment inspection reveals quality issues, we document the findings, negotiate with the factory for rework or replacement, and re-inspect before shipment. You decide whether to accept, reject, or request corrections.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="FAQ"
          title="Frequently Asked Questions"
          subtitle="Common questions about our sourcing services and how we work."
          center
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-xl">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-navy-600 font-medium text-sm md:text-base">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-accent-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4">
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
