import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

function Accordion({ items }) {
  const [open, setOpen] = useState(items[0]?.title)

  return (
    <div className="border-y border-velmora-line text-velmora-ink">
      {items.map((item) => {
        const isOpen = open === item.title
        return (
          <div key={item.title} className="border-b border-velmora-line last:border-b-0">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? '' : item.title)}
              className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-ui text-velmora-ink"
            >
              {item.title}
              <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <p className="pb-5 text-sm leading-7 text-velmora-cocoa">{item.content}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
