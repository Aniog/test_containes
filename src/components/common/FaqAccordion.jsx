import { useState } from 'react'
import { FAQS } from '@/data/siteContent'
import Icon from '@/components/ui/Icon'
import { cn } from '@/lib/utils'

export default function FaqAccordion({ items = FAQS }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
      {items.map((item, idx) => {
        const isOpen = open === idx
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : idx)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-ink">{item.q}</span>
              <Icon
                name="ChevronDown"
                className={cn(
                  'h-5 w-5 shrink-0 text-accent transition-transform',
                  isOpen && 'rotate-180',
                )}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm leading-relaxed text-ink-muted sm:px-6">
                {item.a}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
