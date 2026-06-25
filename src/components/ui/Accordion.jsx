import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Accordion({ items = [], className = '' }) {
  const [open, setOpen] = useState(0)
  return (
    <div className={cn('divide-y divide-sand border-t border-b border-sand', className)}>
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg text-ink">{item.title}</span>
              <span className="text-ink">
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            <div
              className={cn(
                'grid transition-all duration-300 ease-out',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pr-8 text-sm leading-relaxed text-taupe">{item.content}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
