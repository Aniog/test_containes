import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'How do you charge?',
    a: 'We typically charge a flat monthly retainer or a percentage of order value (usually 5–8%), agreed upfront. We do not take hidden commissions from suppliers — that would create a conflict of interest.',
  },
  {
    q: 'Do you have a minimum order quantity?',
    a: "We don't set our own MOQ, but each factory has its own. For small first orders we help find suppliers that accept lower trial volumes, or consolidate with our existing buyers when possible.",
  },
  {
    q: 'Can you work with my existing supplier?',
    a: 'Yes. We often start with QC inspections or production follow-up on factories you already use, then expand to sourcing new SKUs once trust is built.',
  },
  {
    q: 'How do quality inspections work?',
    a: 'We follow international AQL sampling standards (ISO 2859-1). Inspectors check workmanship, function, packaging, labeling and quantity, then deliver a written report with photos within 24 hours.',
  },
  {
    q: 'Do you handle shipping and customs?',
    a: 'Yes. We coordinate consolidation, export documentation and book sea, air or rail freight with vetted forwarders. We can ship FOB, CIF or DDP depending on your preference.',
  },
  {
    q: 'Which payment terms do you support?',
    a: 'We invoice in USD or EUR by bank transfer. Factory payments are typically 30% deposit / 70% before shipment, but terms vary by supplier and order size — we negotiate on your behalf.',
  },
  {
    q: 'What products do you not source?',
    a: 'We do not source firearms, restricted chemicals, counterfeit goods or anything infringing IP. For heavily regulated categories (medical, food contact, children\'s products) we will tell you upfront whether we can help.',
  },
  {
    q: 'How long until I see supplier options?',
    a: 'Usually 5–10 business days from a clear brief, including initial quotes from 3–5 shortlisted factories. Complex or custom products may take longer.',
  },
]

export default function FAQ({ kicker = 'FAQ', title = 'Frequently asked questions' }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">{kicker}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Don't see your question? <a href="/contact" className="font-medium text-blue-700 hover:text-blue-800">Reach out</a> and we'll answer directly.
            </p>
          </div>

          <div className="lg:col-span-8">
            <ul className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
              {FAQS.map((item, i) => {
                const isOpen = openIndex === i
                return (
                  <li key={item.q}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
                    >
                      <span className="text-base font-semibold text-slate-900 md:text-lg">{item.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-slate-500 transition ${isOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-sm leading-relaxed text-slate-600 md:px-6 md:pb-6 md:text-base">
                        {item.a}
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
