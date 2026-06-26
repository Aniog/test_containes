import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How do you charge for your sourcing services?',
    a: 'We typically charge a flat service fee or a transparent percentage of order value, agreed up front. Specific inspections and audits are quoted as fixed prices. We do not take commissions from suppliers.',
  },
  {
    q: 'What is the minimum order value you can support?',
    a: 'There is no fixed minimum. We work on first-order projects starting from a few thousand US dollars, as well as on larger ongoing programs. Some services such as standalone inspections can be booked independently.',
  },
  {
    q: 'Can you sign an NDA before I share my product?',
    a: 'Yes. We routinely sign NDAs with new clients before discussing product details, especially for new product development and private-label projects.',
  },
  {
    q: 'Do you only work with factories you already know?',
    a: 'No. For each project we identify suppliers that match your specific product and quality level. Existing relationships help us move faster, but we always shortlist based on the best fit for the buyer.',
  },
  {
    q: 'Do you handle shipping and customs in my country?',
    a: 'We coordinate export-side logistics — consolidation, export packing, customs clearance in China and freight booking. For import customs, we work with your nominated broker, or recommend a partner if you do not have one.',
  },
  {
    q: 'How quickly can you start a new project?',
    a: 'Typically within 2–3 business days of receiving your requirements. Initial supplier shortlists are usually delivered within 5–10 business days, depending on the product category.',
  },
]

export default function HomeFAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">FAQ</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Short answers to questions we hear most often from new buyers.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={faq.q}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50 transition"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-slate-900">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-500 flex-shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 -mt-1">
                    <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
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
