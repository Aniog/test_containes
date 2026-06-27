import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Accordion({ items = [], defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)
  return (
    <div className="border-t border-velmora-line">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={item.title} className="border-b border-velmora-line">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-velmora-ink">
                {item.title}
              </span>
              <span className="text-velmora-gold">
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>
            <div
              className={cn(
                'grid transition-all duration-300 ease-out',
                isOpen ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]',
              )}
            >
              <div className="overflow-hidden">
                <div className="text-sm leading-relaxed text-velmora-stone">
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
