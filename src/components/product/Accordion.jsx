import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(items[0]?.title)

  return (
    <div className="divide-y divide-velmora-sand border-y border-velmora-sand text-velmora-ink">
      {items.map((item) => {
        const isOpen = open === item.title
        return (
          <section key={item.title}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? '' : item.title)}
              className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink"
              aria-expanded={isOpen}
            >
              {item.title}
              <ChevronDown className={`h-4 w-4 text-velmora-gold transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && <div className="pb-6 text-sm leading-7 text-velmora-clay">{item.content}</div>}
          </section>
        )
      })}
    </div>
  )
}
