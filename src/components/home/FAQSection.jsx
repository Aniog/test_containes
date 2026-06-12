import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How do you charge for sourcing services?',
    a: 'We work on a transparent service-fee basis, agreed before the project starts. Depending on scope, this can be a flat project fee, a percentage of order value, or a monthly retainer for repeat buyers. We do not take commission from suppliers.',
  },
  {
    q: 'What is your minimum order size?',
    a: 'There is no strict minimum, but we usually work best on orders of around USD 5,000 and above. For smaller trial orders we can still help, but the service fee may be a higher share of the order value.',
  },
  {
    q: 'Can you sign an NDA?',
    a: 'Yes. We routinely sign mutual NDAs before sharing product designs, pricing or supplier information. We can use your template or provide ours.',
  },
  {
    q: 'Do you only source from Alibaba?',
    a: 'No. We use Alibaba and Made-in-China as starting points but most of our suppliers come from offline channels — trade fairs, factory clusters, our internal network and field visits.',
  },
  {
    q: 'Can you handle shipping and customs?',
    a: 'Yes. We coordinate FOB, CIF and DDP shipping by sea, air and rail, work with established freight forwarders, and provide all export documents. For DDP shipments we partner with customs agents in your destination country.',
  },
  {
    q: 'Can I visit factories with you?',
    a: 'Absolutely. Many clients fly to China once a project is underway. We can plan factory visits, meetings, translation and logistics for you.',
  },
  {
    q: 'How quickly can you reply to my inquiry?',
    a: 'We aim to reply to every new inquiry within one business day with a clear assessment of feasibility, approach and indicative pricing.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState(0)

  return (
    <section className="bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.18em] font-semibold text-brand-blue">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-brand-navy">
              Questions buyers usually ask
            </h2>
            <p className="mt-4 text-base text-brand-muted leading-relaxed">
              Don&apos;t see your question here? Send it through the inquiry form and
              we&apos;ll reply with a straight answer.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-brand-border rounded-xl border border-brand-border bg-white">
              {faqs.map((f, i) => {
                const isOpen = open === i
                return (
                  <div key={f.q}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base font-semibold text-brand-navy">{f.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-brand-blue flex-shrink-0 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 md:px-6 pb-5 -mt-1 text-sm text-brand-muted leading-relaxed">
                        {f.a}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
