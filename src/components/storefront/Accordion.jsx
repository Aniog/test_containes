import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(items[0]?.title || '')

  return (
    <div className="divide-y divide-velmora-mist border-y border-velmora-mist text-velmora-ink">
      {items.map((item) => {
        const isOpen = open === item.title

        return (
          <section key={item.title}>
            <button
              type="button"
              className="flex w-full items-center justify-between py-5 text-left font-sans text-xs font-semibold uppercase tracking-jewel text-velmora-ink transition-colors hover:text-velmora-bronze"
              onClick={() => setOpen(isOpen ? '' : item.title)}
              aria-expanded={isOpen}
            >
              {item.title}
              <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
              <div className="pb-6 font-sans text-sm leading-7 text-velmora-espresso">
                {item.content}
              </div>
            )}
          </section>
        )
      })}
    </div>
  )
}
