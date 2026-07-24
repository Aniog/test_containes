import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="border-t border-line">
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div key={it.title} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-xl uppercase tracking-widest3 text-ink">
                {it.title}
              </span>
              <span className="text-ink">
                {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
              </span>
            </button>
            <div
              className={cn(
                'grid transition-all duration-300',
                isOpen ? 'grid-rows-[1fr] pb-6 opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl text-sm leading-relaxed text-charcoal">{it.content}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
