import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Accordion({ items }) {
  const [open, setOpen] = useState(items[0]?.id || null)

  return (
    <div className="border-t border-cream-300">
      {items.map((item) => {
        const isOpen = open === item.id
        return (
          <div key={item.id} className="border-b border-cream-300">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between py-4 text-left font-sans text-sm font-medium tracking-wide text-espresso-900 transition-colors hover:text-gold"
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              {isOpen ? <Minus size={16} /> : <Plus size={16} />}
            </button>
            <div
              className={cn(
                'grid overflow-hidden transition-all duration-300',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="min-h-0">
                <div className="pb-5 text-sm leading-relaxed text-espresso-600">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
