import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="divide-y divide-velmora-champagne/25 border-y border-velmora-champagne/25 text-velmora-cocoa">
      {items.map((item, index) => (
        <div key={item.title}>
          <button
            type="button"
            onClick={() => setOpen(open === index ? -1 : index)}
            className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-[0.22em] text-velmora-cocoa"
          >
            {item.title}
            <ChevronDown className={`h-4 w-4 transition ${open === index ? 'rotate-180' : ''}`} />
          </button>
          {open === index && <p className="pb-6 text-sm leading-7 text-velmora-taupe">{item.content}</p>}
        </div>
      ))}
    </div>
  )
}
