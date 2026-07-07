import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Accordion({ items, defaultOpen = null }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className="border-t border-velmora-sand">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={index} className="border-b border-velmora-sand">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between py-4 text-left group"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg text-velmora-dark">{item.title}</span>
              <ChevronDown
                size={18}
                className={cn(
                  'text-velmora-muted transition-transform duration-300',
                  isOpen && 'rotate-180'
                )}
              />
            </button>
            <div
              className={cn(
                'overflow-hidden transition-all duration-300 ease-in-out',
                isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
              )}
            >
              <div className="text-sm text-velmora-stone leading-relaxed font-sans">
                {item.content}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
