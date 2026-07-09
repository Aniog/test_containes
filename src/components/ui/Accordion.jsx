import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className="border-t border-sand">
      {items.map((item, i) => {
        const open = openIndex === i
        return (
          <div key={item.title} className="border-b border-sand">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : i)}
              className="w-full flex items-center justify-between py-5 text-left"
              aria-expanded={open}
            >
              <span className="font-serif text-lg md:text-xl text-ink tracking-wide">
                {item.title}
              </span>
              <span className="text-ink">
                {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            <div
              className={cn(
                'grid transition-all duration-500 ease-out',
                open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-6 text-sm md:text-base text-stone leading-relaxed max-w-2xl">
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
