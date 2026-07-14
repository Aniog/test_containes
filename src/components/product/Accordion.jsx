import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="border-y border-velmora-sand">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.title} className="border-b border-velmora-sand last:border-b-0">
            <button type="button" onClick={() => setOpenIndex(isOpen ? -1 : index)} className="flex w-full items-center justify-between py-5 text-left text-sm font-bold uppercase tracking-label text-velmora-ink">
              {item.title}
              <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && <p className="pb-5 text-sm leading-7 text-velmora-cocoa/78">{item.content}</p>}
          </div>
        )
      })}
    </div>
  )
}
