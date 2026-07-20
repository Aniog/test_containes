import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between py-5 text-left"
            >
              <span className="font-serif text-lg uppercase tracking-widest2 text-ink">
                {item.title}
              </span>
              {isOpen ? (
                <Minus className="h-4 w-4 text-gold" strokeWidth={1.5} />
              ) : (
                <Plus className="h-4 w-4 text-ink" strokeWidth={1.5} />
              )}
            </button>
            <div
              className={cn(
                'grid transition-all duration-300',
                isOpen ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'
              )}
            >
              <div className="overflow-hidden">
                <div className="text-sm leading-relaxed text-stone">
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
