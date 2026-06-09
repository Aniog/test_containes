import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import SectionHeading from '@/components/site/SectionHeading'

export default function FaqSection({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions buyers often ask before starting"
          description="If you are not sure whether your project is a fit, send the inquiry anyway and include the product details you already have."
          align="center"
        />

        <div className="mt-10 space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <article key={item.question} className="rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="text-lg font-semibold text-slate-950">{item.question}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-slate-500 transition ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen ? (
                  <div className="border-t border-slate-200 px-6 py-5 text-sm leading-7 text-slate-600 md:text-base">
                    {item.answer}
                  </div>
                ) : null}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
