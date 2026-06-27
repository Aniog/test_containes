import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Accordion({ items, className }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className={cn('divide-y divide-stone-deep/10 border-y border-stone-deep/10', className)}>
      {items.map((item, i) => {
        const open = openIndex === i
        return (
          <div key={item.title}>
            <button
              onClick={() => setOpenIndex(open ? -1 : i)}
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={open}
            >
              <span className="font-serif text-lg uppercase tracking-[0.12em] text-stone-deep">
                {item.title}
              </span>
              <span className="text-gold-deep">
                {open ? (
                  <Minus className="h-4 w-4" strokeWidth={1.5} />
                ) : (
                  <Plus className="h-4 w-4" strokeWidth={1.5} />
                )}
              </span>
            </button>
            <div
              className={cn(
                'grid transition-all duration-300 ease-out',
                open ? 'grid-rows-[1fr] pb-6 opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">
                <div className="text-sm leading-relaxed text-stone-muted">
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
