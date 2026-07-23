import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="divide-y divide-velmora-line border-y border-velmora-line text-velmora-ink">
      {items.map((item, index) => {
        const open = openIndex === index
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : index)}
              className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink"
              aria-expanded={open}
            >
              {item.title}
              <ChevronDown className={`h-4 w-4 transition ${open ? 'rotate-180 text-velmora-gold' : ''}`} />
            </button>
            <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden text-sm leading-7 text-velmora-taupe">{item.content}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
