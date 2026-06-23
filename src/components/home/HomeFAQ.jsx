import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

export const FAQS = [
  {
    q: 'How is your service fee structured?',
    a: 'For most projects we charge a flat service fee per project phase, or a transparent commission on order value. The model is agreed in writing before any work starts. We do not take hidden margins on factory invoices.',
  },
  {
    q: 'Do you have a minimum order quantity (MOQ)?',
    a: 'We do not have a fixed MOQ. We work best with buyers placing orders from a few thousand USD and up. For very small orders we will say so honestly and recommend a different approach if we are not the best fit.',
  },
  {
    q: 'Can you sign an NDA before we share product details?',
    a: 'Yes. We routinely sign mutual NDAs with buyers before reviewing specs, drawings or designs, and we work with factories that respect tooling and IP confidentiality.',
  },
  {
    q: 'Do you only work with factories or also trading companies?',
    a: 'We prioritize direct factories whenever possible. In some categories a specialized trading company is the right choice, and we will tell you clearly when that is the case and why.',
  },
  {
    q: 'What does a quality inspection (QC) report include?',
    a: 'A standard pre-shipment inspection includes packaging check, on-spec verification, function testing where applicable, AQL-based defect sampling, and 100+ photos. You receive a PDF before the final payment is released.',
  },
  {
    q: 'Which shipping incoterms do you support?',
    a: 'EXW, FOB, CIF, CFR and DDP. For DDP we coordinate customs clearance and last-mile delivery to your warehouse or 3PL through vetted forwarders.',
  },
  {
    q: 'How do you handle payments to factories?',
    a: 'You can pay factories directly in most cases, which keeps cash flow transparent. Where consolidation is needed, we use a documented escrow-style flow tied to inspection sign-off.',
  },
  {
    q: 'How fast can we start?',
    a: 'After a 30-minute discovery call and signed NDA, we can typically present a shortlist of suppliers within 5–10 business days, depending on category complexity.',
  },
]

export default function HomeFAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="If your question isn't answered here, send us a note and we'll reply within one business day."
          align="center"
        />

        <div className="mt-12 divide-y divide-line border border-line rounded-2xl bg-white overflow-hidden">
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full text-left px-5 sm:px-6 py-4 flex items-center justify-between gap-4 hover:bg-surface transition"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-brand">{f.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-ink-soft transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 text-ink-soft leading-relaxed text-[15px]">
                    {f.a}
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
