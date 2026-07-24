import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="divide-y divide-sand border-t border-sand">
      {items.map((item, i) => {
        const open = openIndex === i
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : i)}
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={open}
            >
              <span className="font-serif text-xl text-charcoal">{item.title}</span>
              <span className="text-gold">
                {open ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
              </span>
            </button>
            <div
              className={cn(
                'grid transition-all duration-300 ease-out',
                open ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'
              )}
            >
              <div className="overflow-hidden">
                <div className="text-sm text-stone leading-relaxed pr-8">{item.content}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
