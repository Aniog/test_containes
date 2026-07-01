import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(items[0]?.title || null)

  return (
    <div className="border-t border-velmora-border">
      {items.map((item) => {
        const isOpen = open === item.title
        return (
          <div key={item.title} className="border-b border-velmora-border">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : item.title)}
              className="flex w-full items-center justify-between py-4 text-left"
            >
              <span className="font-sans text-sm font-semibold uppercase tracking-widest text-velmora-espresso">
                {item.title}
              </span>
              <ChevronDown
                size={18}
                className={cn(
                  'pointer-events-none text-velmora-taupe transition-transform duration-300',
                  isOpen && 'rotate-180'
                )}
              />
            </button>
            <div
              className={cn(
                'overflow-hidden transition-all duration-300',
                isOpen ? 'max-h-96 pb-5' : 'max-h-0'
              )}
            >
              <p className="text-sm leading-relaxed text-velmora-taupe">
                {item.content}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
