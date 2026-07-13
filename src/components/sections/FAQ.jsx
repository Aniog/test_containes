import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQS } from '@/data/content'
import { Section, SectionHeader } from '@/components/ui/Section'
import { cn } from '@/lib/utils'

export default function FAQ({ items = FAQS }) {
  const [open, setOpen] = useState(0)

  return (
    <Section id="faq" className="bg-slate-50">
      <SectionHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Clear answers to the questions buyers ask before working with a China sourcing agent."
      />
      <div className="mx-auto mt-12 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
        {items.map((item, i) => {
          const isOpen = open === i
          return (
            <div key={item.q}>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <span className="text-base font-semibold text-slate-900">
                  {item.q}
                </span>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 shrink-0 text-brand-700 transition-transform',
                    isOpen && 'rotate-180',
                  )}
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-5 text-slate-600">{item.a}</div>
              )}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
