import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Accordion({ items, className }) {
  const [open, setOpen] = useState(0)

  return (
    <div className={cn('border-t border-sand', className)}>
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.title} className="border-b border-sand">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-charcoal">
                {item.title}
              </span>
              <span className="text-gold">
                {isOpen ? <Minus width={16} height={16} strokeWidth={1.5} /> : <Plus width={16} height={16} strokeWidth={1.5} />}
              </span>
            </button>
            <div
              className={cn(
                'grid transition-all duration-300 ease-out',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pr-8 text-sm leading-relaxed text-muted font-light">
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
