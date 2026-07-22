import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const Accordion = ({ items }) => {
  const [open, setOpen] = useState(items[0]?.title)

  return (
    <div className="divide-y divide-velmora-line border-y border-velmora-line text-velmora-ink">
      {items.map((item) => {
        const isOpen = open === item.title
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? '' : item.title)}
              className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-[0.28em] text-velmora-ink"
              aria-expanded={isOpen}
            >
              {item.title}
              <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`}>
              <p className="overflow-hidden text-sm leading-7 text-velmora-taupe">{item.content}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
