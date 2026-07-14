import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const Accordion = ({ items }) => {
  const [open, setOpen] = useState(items[0]?.title)

  return (
    <div className="divide-y divide-velmora-linen border-y border-velmora-linen text-velmora-ink">
      {items.map((item) => {
        const isOpen = open === item.title
        return (
          <div key={item.title}>
            <button
              type="button"
              className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-velmora text-velmora-ink"
              onClick={() => setOpen(isOpen ? '' : item.title)}
              aria-expanded={isOpen}
            >
              {item.title}
              <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`${isOpen ? 'grid grid-rows-[1fr]' : 'grid grid-rows-[0fr]'} transition-all duration-300`}>
              <div className="overflow-hidden">
                <p className="pb-5 text-sm leading-7 text-velmora-clay">{item.content}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
