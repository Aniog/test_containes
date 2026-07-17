import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Accordion({ items, defaultOpen = [] }) {
  const [open, setOpen] = useState(new Set(defaultOpen))

  const toggle = (id) => {
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div className="border-t border-stone-200">
      {items.map((item) => {
        const isOpen = open.has(item.id)
        return (
          <div key={item.id} className="border-b border-stone-200">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-sans text-sm font-medium uppercase tracking-widest text-velmora-base">
                {item.title}
              </span>
              <ChevronDown
                size={18}
                className={cn(
                  'text-velmora-text-secondary transition-transform duration-300',
                  isOpen && 'rotate-180'
                )}
              />
            </button>
            <div
              className={cn(
                'grid overflow-hidden transition-all duration-300 ease-out',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="min-h-0">
                <div className="pb-5 text-velmora-text-secondary font-sans text-sm leading-relaxed">
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
