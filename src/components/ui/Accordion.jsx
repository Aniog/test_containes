import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils.js'

export default function Accordion({ items, defaultOpen = null }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-t border-taupe/40">
      {items.map((item) => {
        const isOpen = open === item.id
        return (
          <div key={item.id} className="border-b border-taupe/40">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-sans text-sm font-medium uppercase tracking-widest text-ink">
                {item.title}
              </span>
              <ChevronDown
                size={18}
                className={cn(
                  'text-stone transition-transform duration-300',
                  isOpen && 'rotate-180'
                )}
              />
            </button>
            <div
              className={cn(
                'overflow-hidden transition-all duration-300',
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              )}
            >
              <div className="pb-5 pr-8 text-sm leading-relaxed text-stone">
                {item.content}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
