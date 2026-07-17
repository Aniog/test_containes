import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(items[0]?.title)

  return (
    <div className="divide-y divide-velmora-gold/25 border-y border-velmora-gold/25 text-velmora-ink">
      {items.map((item) => {
        const isOpen = open === item.title
        return (
          <div key={item.title}>
            <button
              type="button"
              className="flex w-full items-center justify-between py-5 text-left text-sm font-extrabold uppercase tracking-[0.2em] text-velmora-ink transition hover:text-velmora-gold"
              onClick={() => setOpen(isOpen ? '' : item.title)}
              aria-expanded={isOpen}
            >
              {item.title}
              <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden text-sm leading-7 text-velmora-taupe">{item.content}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
