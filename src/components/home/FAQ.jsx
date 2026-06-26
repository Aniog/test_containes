import React from 'react'
import { Section, SectionHeader } from '../Section'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'How do you charge for sourcing services?',
    a: 'For most projects we charge a flat service fee or a small percentage of the order value, agreed in writing before we start. Inspections, audits, and shipping are quoted separately. We do not take hidden commissions from suppliers.',
  },
  {
    q: 'What is the minimum order size you can support?',
    a: 'We typically support orders starting from a few hundred US dollars and scale up to full-container shipments. Smaller orders may have higher service fees due to relative effort.',
  },
  {
    q: 'How do you select and verify suppliers?',
    a: 'We screen business licenses, factory background, financials, capacity and references. Then we visit the factory in person, photograph the lines, and document everything in a verification report before recommending them to you.',
  },
  {
    q: 'Can you handle Amazon FBA shipments?',
    a: 'Yes. We prep cartons to FBA requirements (labeling, polybagging, SKU codes), consolidate from multiple suppliers, and ship directly to your designated Amazon warehouse in the US, EU, UK, JP and other markets.',
  },
  {
    q: 'Do you sign an NDA?',
    a: 'Yes. We can sign mutual NDAs with you and the suppliers we engage. We are used to working on private-label and OEM projects where confidentiality matters.',
  },
  {
    q: 'How do payments to suppliers work?',
    a: 'Most factories accept T/T (bank transfer) with a deposit before production and the balance before shipping. For larger orders, L/C can be arranged. We do not require funds to pass through our company unless you specifically prefer that.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="border-b border-slate-200 py-5">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-slate-900">{q}</span>
        <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-700 shrink-0">
          {open ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
        </span>
      </button>
      {open && <p className="mt-3 text-sm text-slate-600 leading-relaxed">{a}</p>}
    </div>
  )
}

export default function FAQ() {
  return (
    <Section id="faq" className="bg-slate-50">
      <SectionHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Practical answers to the questions most buyers ask before working with a China sourcing agent."
      />
      <div className="mt-12 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div>
            {faqs.map((f, idx) => (
              <FAQItem key={idx} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
        <aside className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm h-fit">
          <h3 className="text-lg font-semibold text-slate-900">Still have questions?</h3>
          <p className="mt-2 text-sm text-slate-600">
            Send us a quick message and a project manager will reply within 1 business day.
          </p>
          <a
            href="/contact"
            className="mt-5 inline-flex items-center justify-center w-full rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800"
          >
            Contact our sourcing team
          </a>
        </aside>
      </div>
    </Section>
  )
}
