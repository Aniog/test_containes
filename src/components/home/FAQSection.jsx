import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { faqs } from "@/data/content"
import Section from "@/components/ui/Section"

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0)
  return (
    <Section background="light" id="faq">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-500">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy-600 tracking-tight">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Quick answers to the questions we hear most often from new buyers.
            For anything else, just ask in the contact form.
          </p>
        </div>

        <div className="lg:col-span-8">
          <ul className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-card overflow-hidden">
            {faqs.map((f, idx) => {
              const isOpen = openIdx === idx
              return (
                <li key={f.q}>
                  <button
                    type="button"
                    className="w-full text-left flex items-start justify-between gap-4 px-6 py-5 hover:bg-slate-50"
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-navy-600">
                      {f.q}
                    </span>
                    <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-slate-100 text-navy-600">
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 -mt-1">
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Section>
  )
}
