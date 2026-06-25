import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const FAQS = [
  {
    q: 'Are you a sourcing agent or a trading company?',
    a: 'We are a sourcing agent. We do not own the factories and we do not mark up product prices in secret. Our income comes from a clearly disclosed service fee that you approve before we start. This means our incentives are aligned with the buyer.',
  },
  {
    q: 'How much do your sourcing services cost?',
    a: 'For most projects we charge either a flat service fee for one-off sourcing assignments, or a percentage of the order value (typically 5-8%) for ongoing supply management. We send a written proposal with the full scope and price before any work begins.',
  },
  {
    q: 'What is the minimum order quantity (MOQ) you can support?',
    a: 'We work best with orders above roughly USD 3,000-5,000 in product value, since lower volumes often do not justify the freight and service cost. For very small trial orders or sample runs, we can usually still help on an hourly basis.',
  },
  {
    q: 'Can you sign an NDA before I share my product idea?',
    a: 'Yes. We routinely sign mutual non-disclosure agreements before discussing designs, drawings or sensitive business information. We also limit how product details are shared with suppliers to protect your IP.',
  },
  {
    q: 'How do you verify that a factory is real and capable?',
    a: 'We check the business license on the Chinese national registry, visit the workshop in person, photograph the production lines, confirm machinery and staff count, and ask for past export records. The full audit is delivered to you as a written report.',
  },
  {
    q: 'Do you handle shipping, customs and door-to-door delivery?',
    a: 'Yes. We work with established freight forwarders and can arrange sea freight (FCL/LCL), air freight, and rail. We can quote FOB, CIF, or DDP and manage consolidation, export customs, and final delivery in your country.',
  },
  {
    q: 'Which industries are you strongest in?',
    a: 'Consumer goods: home and kitchen, electronics accessories, apparel and bags, furniture, hardware and tools, beauty packaging, and small machinery. We can support other categories, but we will be honest if a project falls outside our experience.',
  },
  {
    q: 'How long does a typical sourcing project take?',
    a: 'From first inquiry to first shipment, most clients need 6-14 weeks depending on product complexity, sample rounds, and production lead time. We give a realistic timeline before you commit.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E63946]">FAQ</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#0B2545]">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Practical answers to the questions buyers ask us most often.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {FAQS.map((item, idx) => {
            const isOpen = open === idx
            return (
              <div key={item.q} className="rounded-xl border border-slate-200 bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 lg:px-6 py-4 lg:py-5"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-[#0B2545]">{item.q}</span>
                  <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full shrink-0 transition ${isOpen ? 'bg-[#E63946] text-white' : 'bg-slate-100 text-[#0B2545]'}`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 lg:px-6 pb-5 lg:pb-6 -mt-1 text-sm text-slate-600 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
