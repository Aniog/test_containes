import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading.jsx'
import { FAQS } from '@/data/content.js'
import { Link } from 'react-router-dom'

export default function HomeFaq() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section-pad bg-white" id="faq">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions from buyers"
              description="If your question is not here, send us a message and we will reply within one business day."
            />
            <Link to="/contact" className="mt-6 inline-flex text-sm font-semibold text-brand-accent hover:text-brand-accent-dark">
              Contact our team →
            </Link>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
              {FAQS.map((f, i) => {
                const isOpen = open === i
                return (
                  <div key={f.q}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base font-semibold text-brand-ink">{f.q}</span>
                      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-mist text-brand-ink">
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-sm leading-relaxed text-slate-600">
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
