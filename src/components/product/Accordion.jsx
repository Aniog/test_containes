import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(items[0]?.title)
  return (
    <div className="divide-y divide-velmora-sand/70 border-y border-velmora-sand/70">
      {items.map((item) => {
        const expanded = open === item.title
        return (
          <div key={item.title}>
            <button type="button" className="velmora-focus flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-widest text-velmora-espresso" onClick={() => setOpen(expanded ? null : item.title)}>
              {item.title}
              <ChevronDown className={`h-4 w-4 transition ${expanded ? 'rotate-180' : ''}`} />
            </button>
            {expanded && <p className="pb-6 text-sm leading-7 text-velmora-smoke">{item.content}</p>}
          </div>
        )
      })}
    </div>
  )
}
