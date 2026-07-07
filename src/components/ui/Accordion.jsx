import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className="divide-y divide-sand border-y border-sand">
      {items.map((item, i) => {
        const open = openIndex === i
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : i)}
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={open}
            >
              <span className="font-serif text-lg uppercase tracking-[0.12em] text-ink">
                {item.title}
              </span>
              <span className="text-ink">
                {open ? (
                  <Minus className="h-4 w-4" strokeWidth={1.5} />
                ) : (
                  <Plus className="h-4 w-4" strokeWidth={1.5} />
                )}
              </span>
            </button>
            <div
              className={cn(
                'grid transition-all duration-400',
                open ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'
              )}
            >
              <div className="overflow-hidden">
                <p className="text-sm leading-relaxed text-ink-soft">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
