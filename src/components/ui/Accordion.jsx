import { useState } from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

export function Accordion({ items, className }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className={cn('divide-y divide-velmora-light', className)}>
      {items.map((item, index) => (
        <div key={index} className="py-4">
          <button
            onClick={() => toggle(index)}
            className="flex w-full items-center justify-between text-left group"
          >
            <span className="font-serif text-lg tracking-wide text-velmora-charcoal">
              {item.title}
            </span>
            <ChevronDown
              className={cn(
                'h-4 w-4 text-velmora-gray transition-transform duration-300',
                openIndex === index && 'rotate-180'
              )}
            />
          </button>
          <div
            className={cn(
              'overflow-hidden transition-all duration-300',
              openIndex === index ? 'max-h-96 pt-3' : 'max-h-0'
            )}
          >
            <div className="text-sm leading-relaxed text-velmora-gray">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
