import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Accordion({ items, defaultOpen = null }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className="border-t border-champagne">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.title} className="border-b border-champagne">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between py-4 text-left transition-colors hover:text-gold"
            >
              <span className="font-serif text-lg tracking-wide text-espresso">{item.title}</span>
              <ChevronDown
                className={cn(
                  'h-5 w-5 text-taupe transition-transform duration-300',
                  isOpen && 'rotate-180'
                )}
              />
            </button>
            <div
              className={cn(
                'grid transition-all duration-300 ease-lux',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="overflow-hidden">
                <div className="pb-5 pr-8 text-sm leading-relaxed text-taupe">{item.content}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
