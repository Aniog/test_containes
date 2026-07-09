import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function ProductAccordion({ items }) {
  const [openItem, setOpenItem] = useState(items[0]?.title)

  return (
    <div className="divide-y divide-velmora-sand/60 rounded-[1.75rem] border border-velmora-sand/70 bg-velmora-cream shadow-velmora">
      {items.map((item) => {
        const isOpen = openItem === item.title

        return (
          <div key={item.title}>
            <button
              type="button"
              className="flex w-full items-center justify-between px-5 py-4 text-left text-sm uppercase tracking-[0.26em] text-velmora-ink"
              onClick={() => setOpenItem(isOpen ? '' : item.title)}
            >
              <span>{item.title}</span>
              <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen ? (
              <div className="px-5 pb-5 text-sm leading-7 text-velmora-cocoa/80">{item.content}</div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
