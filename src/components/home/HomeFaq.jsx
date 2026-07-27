import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { faqs } from '@/data/site'
import { cn } from '@/lib/utils'

export default function HomeFaq() {
  const [open, setOpen] = useState(faqs[0]?.id ?? null)

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions buyers ask before they start"
          description="Straight answers about how we work, what we charge, and what to expect."
          align="center"
        />

        <div className="mt-12 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-sm">
          {faqs.map((f) => {
            const isOpen = open === f.id
            return (
              <div key={f.id}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : f.id)}
                  className="flex w-full items-center justify-between gap-4 px-5 md:px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-brand-ink">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-brand-blue transition-transform',
                      isOpen && 'rotate-180',
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 md:px-6 pb-5 -mt-1 text-sm leading-relaxed text-brand-muted">
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
