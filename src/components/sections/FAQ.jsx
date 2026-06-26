import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'How do you charge for sourcing services?',
    a: 'For most projects we charge a transparent flat sourcing fee per project or a percentage of order value, agreed upfront. QC inspections and shipping are quoted separately based on scope. We do not take hidden commissions from suppliers.',
  },
  {
    q: 'What is the minimum order value you work with?',
    a: 'We focus on serious B2B buyers. For most categories we recommend a total order value from USD 3,000 and up, but small first orders are fine if you plan to scale.',
  },
  {
    q: 'Do you sign an NDA?',
    a: 'Yes. For new product designs or confidential briefs we sign a mutual NDA before sharing details with suppliers, and we also work with factories that are used to handling private designs.',
  },
  {
    q: 'Can you work with my existing supplier?',
    a: 'Yes. We can run a factory verification, manage QC inspections, follow production and handle shipping for suppliers you already use.',
  },
  {
    q: 'Do you handle shipping to my country?',
    a: 'We coordinate sea, air and rail freight from China to most major destinations and can arrange FOB, CIF or DDP depending on what works best for your operation.',
  },
  {
    q: 'How long does a first order usually take?',
    a: 'A typical first order takes 6–10 weeks from brief to delivery: 1–2 weeks supplier shortlisting and samples, 4–6 weeks production, then inspection and shipping. Complex custom products can take longer.',
  },
  {
    q: 'What languages does your team speak?',
    a: 'Our client-facing project managers work in English. Internally with suppliers we work in Mandarin Chinese.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="border-b border-slate-200 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-blue-700">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-10 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {FAQS.map((item, idx) => {
            const isOpen = open === idx
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-slate-900">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-slate-500 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 md:px-6">
                    <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                      {item.a}
                    </p>
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
