import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Accordion({ items, defaultOpen = [] }) {
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
    <div className="border-t border-velmora-hairline">
      {items.map((item, index) => {
        const isOpen = open.has(index)
        return (
          <div key={index} className="border-b border-velmora-hairline">
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between py-4 text-left"
            >
              <span className="font-serif text-base md:text-lg text-velmora-dark">
                {item.title}
              </span>
              {isOpen ? (
                <Minus size={16} className="text-velmora-muted" strokeWidth={1.5} />
              ) : (
                <Plus size={16} className="text-velmora-muted" strokeWidth={1.5} />
              )}
            </button>
            <div
              className={cn(
                'grid transition-all duration-300 ease-out',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="overflow-hidden">
                <div className="pb-5 text-sm leading-relaxed text-velmora-muted">
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
