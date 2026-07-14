import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="border-t border-champagne/50">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.title} className="border-b border-champagne/50">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg md:text-xl text-ink">{item.title}</span>
              <span className="text-charcoal">
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            <div
              className={cn(
                'grid transition-all duration-300',
                isOpen ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'
              )}
            >
              <div className="overflow-hidden">
                <p className="text-muted leading-relaxed max-w-2xl">{item.content}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
