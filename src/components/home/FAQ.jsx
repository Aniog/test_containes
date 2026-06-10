import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What is a China sourcing agent and why do I need one?',
    a: 'A sourcing agent is your on-the-ground representative in China. We find suppliers, verify factories, negotiate prices, inspect quality, and coordinate shipping — saving you time, money, and risk compared to doing it remotely.',
  },
  {
    q: 'How much does your service cost?',
    a: 'Our pricing depends on the scope of work. Typical models include a percentage of order value (5–8%), fixed project fees, or monthly retainers. We provide a transparent quote before any work begins — no hidden charges.',
  },
  {
    q: 'What is your minimum order requirement?',
    a: "We don't impose our own MOQ. However, Chinese factories typically have minimum orders ranging from $2,000 to $10,000 depending on the product. We'll help you find suppliers that match your volume needs.",

  },
  {
    q: 'How do you verify that a factory is legitimate?',
    a: 'We conduct on-site audits checking business licenses, production equipment, worker conditions, quality systems, export history, and client references. You receive a detailed verification report with photos.',
  },
  {
    q: "Can you help with products I've already found a supplier for?",

    a: "Yes. We offer standalone services like factory audits, quality inspections, and shipping coordination — even if you've already identified your supplier independently.",

  },
  {
    q: 'How long does the sourcing process take?',
    a: 'Typically 2–4 weeks from requirement submission to confirmed supplier, depending on product complexity. Factory verification adds 3–5 business days. Production timelines vary by product.',
  },
  {
    q: 'Which regions in China do you cover?',
    a: 'We have teams in Guangzhou, Shenzhen, Yiwu, Ningbo, and Shanghai — covering the major manufacturing hubs for electronics, textiles, furniture, consumer goods, and industrial products.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed">
            Common questions from buyers considering a China sourcing agent.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer"
              >
                <span className="font-medium text-neutral-800 text-sm pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === idx && (
                <div className="px-5 pb-5 pt-0">
                  <p className="text-neutral-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
