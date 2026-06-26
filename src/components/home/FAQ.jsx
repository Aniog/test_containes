import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How do you find and verify suppliers?',
    a: 'We search our database of 500+ pre-vetted suppliers and also conduct new searches based on your requirements. Every supplier goes through our verification process, which includes checking business licenses, visiting the factory in person, reviewing quality certifications, and assessing production capacity.',
  },
  {
    q: 'What does your quality inspection service cover?',
    a: 'We offer three types of inspections: pre-production (checking raw materials and components), during-production (monitoring the manufacturing process), and pre-shipment (final check before goods leave the factory). Each inspection follows a detailed checklist based on your product specifications.',
  },
  {
    q: 'How much does your sourcing service cost?',
    a: 'Our pricing depends on the scope of work. We offer flexible models including per-project fees, monthly retainers, and commission-based arrangements. Contact us for a free quote tailored to your specific needs.',
  },
  {
    q: 'Can you help with small order quantities?',
    a: 'Yes. While MOQs vary by product and supplier, we work with factories that accommodate smaller orders, especially for startups and new product launches. We will be upfront about what is feasible for your order size.',
  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Typically, supplier sourcing takes 5-10 business days. Factory verification adds another 3-7 days. The full process from inquiry to shipment depends on product complexity and order size, but we keep you informed at every stage.',
  },
  {
    q: 'Do you handle customs and import documentation?',
    a: 'Yes. We coordinate shipping logistics including freight booking, customs documentation, and compliance requirements. We work with experienced freight forwarders to ensure smooth delivery to your destination.',
  },
  {
    q: 'What happens if there is a quality problem after delivery?',
    a: 'We document all inspections with photos and reports. If a quality issue arises that was not caught during inspection, we work with you and the supplier to resolve it, including negotiating replacements, refunds, or rework as appropriate.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          <p className="text-slate-600 text-lg">
            Common questions about our sourcing services.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-primary font-semibold text-sm md:text-base pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
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
