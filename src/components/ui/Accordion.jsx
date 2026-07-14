import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-xl md:text-2xl text-ink">
                {item.title}
              </span>
              <span className="text-ink">
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            <div
              className={cn(
                'grid transition-all duration-400',
                isOpen ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]',
              )}
            >
              <div className="overflow-hidden">
                <div className="text-sm text-cocoa leading-relaxed space-y-3 pr-8">
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
