import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className="border-t border-hairline">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={item.title} className="border-b border-hairline">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-xl text-ink">{item.title}</span>
              <span className="text-ink">
                {isOpen ? (
                  <Minus className="w-4 h-4" strokeWidth={1.5} />
                ) : (
                  <Plus className="w-4 h-4" strokeWidth={1.5} />
                )}
              </span>
            </button>
            <div
              className={cn(
                'grid transition-all duration-400 ease-out',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-6 text-sm text-ink/75 leading-relaxed max-w-2xl">
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
