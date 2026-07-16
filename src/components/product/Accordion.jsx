import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(items[0]?.title)

  return (
    <div className="divide-y divide-velmora-line border-y border-velmora-line text-velmora-espresso">
      {items.map((item) => {
        const isOpen = open === item.title
        return (
          <section key={item.title}>
            <button className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-refined text-velmora-espresso" onClick={() => setOpen(isOpen ? '' : item.title)}>
              {item.title}
              <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && <p className="pb-6 text-sm leading-7 text-velmora-taupe">{item.content}</p>}
          </section>
        )
      })}
    </div>
  )
}
