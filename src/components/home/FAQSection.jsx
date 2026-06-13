import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How do I know if a Chinese supplier is reliable?',
    a: 'We conduct on-site factory audits, verify business licenses, check trade references, and assess production capacity. Our verification process covers legal compliance, facility conditions, equipment quality, and past export records.',
  },
  {
    q: 'What are your fees?',
    a: 'Our fee structure is transparent and depends on the scope of work. Typically we charge a percentage of the order value or a fixed project fee. We provide a detailed quote upfront with no hidden charges.',
  },
  {
    q: 'What is the minimum order quantity (MOQ)?',
    a: 'MOQs vary by product and supplier. We work with factories that accommodate both small-batch and large-volume orders. We will help you find suppliers whose MOQ matches your needs.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'Yes. We coordinate freight (air, sea, or express), prepare all export documentation, and handle customs clearance from the China side. We can also arrange door-to-door delivery.',
  },
  {
    q: 'How do you ensure product quality?',
    a: 'We implement a multi-stage QC process: raw material checks, in-process inspection during production, pre-shipment inspection, and final quality testing. You receive photo and video evidence at each stage.',
  },
  {
    q: 'Can you help with samples first?',
    a: 'Absolutely. We manage the entire sample process — from requesting samples from shortlisted suppliers to reviewing and providing feedback. We ensure samples match your specifications before mass production.',
  },
  {
    q: 'What industries do you specialize in?',
    a: 'We cover a broad range including electronics, industrial equipment, consumer goods, packaging, textiles, furniture, medical supplies, and automotive parts. If you have a specific product, contact us to discuss.',
  },
  {
    q: 'How do I get started?',
    a: 'Simply fill out our inquiry form or email us with your product requirements. We will schedule a free consultation to understand your needs and provide a tailored sourcing plan and quote.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm tracking-wide uppercase">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Common questions about sourcing from China with our help.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
              >
                <span className="font-medium text-gray-900 text-sm md:text-base">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 md:px-6 pb-5 md:pb-6">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}