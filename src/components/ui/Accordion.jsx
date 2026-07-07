import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Accordion({ items, defaultOpen = [] }) {
  const [open, setOpen] = useState(new Set(defaultOpen))

  const toggle = (index) => {
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  return (
    <div className="border-t border-line">
      {items.map((item, index) => {
        const isOpen = open.has(index)
        return (
          <div key={index} className="border-b border-line">
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <span className="font-serif text-lg text-ink">{item.title}</span>
              <span className="text-stone">
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>
            <div
              className={cn(
                'grid overflow-hidden transition-all duration-300 ease-out',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="min-h-0">
                <div className="pb-5 text-sm leading-relaxed text-stone">
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
