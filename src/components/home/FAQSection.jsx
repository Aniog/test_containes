import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const FAQS = [
  {
    q: 'How do you charge for your sourcing services?',
    a: 'For most projects we work on a transparent service fee — either a fixed monthly retainer or a percentage of the order value, agreed before we start. We do not take hidden commissions from suppliers.',
  },
  {
    q: 'Do you act for the buyer or the factory?',
    a: 'We work exclusively for the overseas buyer. Our income comes from you, not from the factories, so our incentives stay aligned with finding the right supplier and the right price.',
  },
  {
    q: 'What is the minimum order quantity (MOQ) you work with?',
    a: 'There is no fixed MOQ on our side. We have helped clients with first orders from a few hundred units up to multiple containers. The achievable MOQ depends on the product and the factory.',
  },
  {
    q: 'Can you visit factories on-site before we place an order?',
    a: 'Yes. On-site verification visits are part of our standard service for any new factory. We deliver a written report with photos, machinery overview, capacity notes, and risk flags.',
  },
  {
    q: 'How do quality inspections work?',
    a: 'We perform during-production checks (DUPRO) and pre-shipment inspections (PSI) against your approved sample and an AQL standard, typically AQL 2.5. You receive a detailed report with photos and video before payment is released.',
  },
  {
    q: 'Which countries do you ship to?',
    a: 'We coordinate shipments globally — most clients are based in North America, the EU, the UK, Australia, and the Middle East. We work with vetted forwarders for sea, air, and rail freight.',
  },
  {
    q: 'How quickly can you reply to an inquiry?',
    a: 'We aim to respond to all inquiries within one business day (GMT+8) with a clear next step or a list of qualifying questions.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Yes. We are happy to sign mutual NDAs before sharing detailed product designs, BOMs, or supplier information.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="py-16 md:py-24 bg-surface-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">FAQ</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-brand-navy">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-ink-700">
            Don't see your question? Send us your project details and we'll reply with a tailored
            answer within one business day.
          </p>
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-xl border border-ink-200 bg-white divide-y divide-ink-200 overflow-hidden">
            {FAQS.map((faq, idx) => {
              const isOpen = open === idx
              return (
                <div key={idx}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-surface-muted transition"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-medium text-brand-navy">{faq.q}</span>
                    <span className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${isOpen ? 'bg-brand-blue text-white' : 'bg-surface-muted text-ink-700'}`}>
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 -mt-1 text-sm text-ink-700 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
