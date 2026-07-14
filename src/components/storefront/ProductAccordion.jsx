import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function ProductAccordion({ items }) {
  const [openItem, setOpenItem] = useState(items[0]?.title ?? '')

  return (
    <div className="divide-y divide-stone-200 rounded-3xl border border-stone-200 bg-white">
      {items.map((item) => {
        const isOpen = openItem === item.title
        return (
          <div key={item.title}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-sm uppercase tracking-[0.22em] text-stone-900 sm:px-6"
              onClick={() => setOpenItem(isOpen ? '' : item.title)}
            >
              <span>{item.title}</span>
              <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen ? (
              <div className="px-5 pb-5 text-sm leading-7 text-stone-600 sm:px-6">
                {item.content}
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
