import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className="border-t border-taupeLight">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx
        return (
          <div key={item.title} className="border-b border-taupeLight">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
              aria-expanded={isOpen}
            >
              <span
                className={cn(
                  'text-[11px] md:text-xs tracking-widest2 uppercase font-medium',
                  isOpen ? 'text-gold-dark' : 'text-espresso group-hover:text-gold-dark transition-colors'
                )}
              >
                {item.title}
              </span>
              <span className="text-espresso/70">
                {isOpen ? <Minus size={16} strokeWidth={1.5} /> : <Plus size={16} strokeWidth={1.5} />}
              </span>
            </button>
            <div
              className={cn(
                'grid transition-all duration-500 ease-out',
                isOpen ? 'grid-rows-[1fr] opacity-100 pb-6 md:pb-8' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="overflow-hidden">
                <div className="text-sm md:text-[15px] text-espresso/80 font-light leading-relaxed pr-6">
                  {typeof item.content === 'string' ? (
                    <p>{item.content}</p>
                  ) : (
                    item.content
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
