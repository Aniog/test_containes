import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Accordion({ items, defaultOpen = null }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="border-t border-mist">
      {items.map((item, index) => (
        <div key={index} className="border-b border-mist">
          <button
            type="button"
            onClick={() => toggle(index)}
            className="flex w-full items-center justify-between py-4 text-left"
          >
            <span className="font-serif text-lg text-espresso">{item.title}</span>
            <ChevronDown
              className={cn(
                'h-5 w-5 text-taupe transition-transform duration-300',
                openIndex === index && 'rotate-180'
              )}
            />
          </button>
          <div
            className={cn(
              'grid overflow-hidden transition-all duration-300',
              openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            )}
          >
            <div className="overflow-hidden">
              <div className="pb-5 pr-8 text-sm leading-relaxed text-taupe">
                {item.content}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
