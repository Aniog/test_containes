import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(items[0]?.title)

  return (
    <div className="divide-y divide-velmora-champagne/30 border-y border-velmora-champagne/30 text-velmora-ink">
      {items.map((item) => {
        const isOpen = open === item.title

        return (
          <div key={item.title}>
            <button
              type="button"
              className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-luxury text-velmora-ink"
              onClick={() => setOpen(isOpen ? '' : item.title)}
              aria-expanded={isOpen}
            >
              {item.title}
              <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && <div className="pb-6 text-sm leading-7 text-velmora-stone">{item.content}</div>}
          </div>
        )
      })}
    </div>
  )
}
