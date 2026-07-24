import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="divide-y divide-velmora-champagne border-y border-velmora-champagne">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-luxury text-velmora-espresso"
              aria-expanded={isOpen}
            >
              {item.title}
              <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && <div className="pb-5 text-sm leading-7 text-velmora-ink/75">{item.content}</div>}
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
