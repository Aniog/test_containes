import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '@/data/site'
import { cn } from '@/lib/utils'

export default function FaqList({ items = faqs }) {
  const [open, setOpen] = useState(items[0]?.id || null)

  return (
    <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {items.map((item) => {
        const isOpen = open === item.id
        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-ink">{item.q}</span>
              <ChevronDown
                className={cn(
                  'h-5 w-5 shrink-0 text-amber transition-transform',
                  isOpen && 'rotate-180'
                )}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-sm leading-relaxed text-muted">
                {item.a}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
