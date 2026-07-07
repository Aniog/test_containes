import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function ProductAccordion({ items }) {
  const [openItem, setOpenItem] = useState(items[0]?.title ?? '')

  return (
    <div className="border-t border-mist/70">
      {items.map((item) => {
        const isOpen = openItem === item.title

        return (
          <div key={item.title} className="border-b border-mist/70 py-5">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 bg-transparent p-0 text-left"
              onClick={() => setOpenItem(isOpen ? '' : item.title)}
            >
              <span className="font-sans text-sm font-semibold uppercase tracking-widest text-espresso">
                {item.title}
              </span>
              <ChevronDown className={`h-4 w-4 text-espresso transition duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen ? <p className="pt-4 text-sm leading-7 text-espresso/80">{item.content}</p> : null}
          </div>
        )
      })}
    </div>
  )
}
