import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(items[0]?.title)

  return (
    <div className="border-y border-velmora-mist text-velmora-espresso">
      {items.map((item) => {
        const isOpen = open === item.title
        return (
          <div key={item.title} className="border-b border-velmora-mist last:border-b-0">
            <button type="button" onClick={() => setOpen(isOpen ? '' : item.title)} className="velmora-focus flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso">
              {item.title}
              <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180 text-velmora-goldDeep' : 'text-velmora-taupe'}`} aria-hidden="true" />
            </button>
            {isOpen && <div className="pb-5 text-sm leading-7 text-velmora-charcoal">{item.content}</div>}
          </div>
        )
      })}
    </div>
  )
}
