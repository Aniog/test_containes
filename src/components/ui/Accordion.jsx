import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="border-t border-stone/60">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.title} className="border-b border-stone/60">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <span className="font-serif text-xl md:text-2xl text-charcoal tracking-wide">
                {item.title}
              </span>
              <span className="text-gold">
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            <div
              className={cn(
                'grid transition-all duration-300',
                isOpen ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'
              )}
            >
              <div className="overflow-hidden">
                <p className="text-muted leading-relaxed pr-8">{item.content}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
