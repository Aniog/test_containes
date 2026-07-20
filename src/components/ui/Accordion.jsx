import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Accordion({ items, className }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className={cn('border-t border-velmora-taupe/60', className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            className="border-b border-velmora-taupe/60"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg">{item.title}</span>
              <span className="text-velmora-stone">
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            <div
              className={cn(
                'grid overflow-hidden transition-all duration-500',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="min-h-0">
                <div className="pb-5 text-sm leading-relaxed text-velmora-stone">
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
