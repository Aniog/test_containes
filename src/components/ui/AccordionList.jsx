import React from 'react'
import { ChevronDown } from 'lucide-react'

export default function AccordionList({ items }) {
  const [openItem, setOpenItem] = React.useState(items[0]?.title || '')

  return (
    <div className="divide-y divide-stone-200 border-y border-stone-200">
      {items.map((item) => {
        const isOpen = openItem === item.title

        return (
          <div key={item.title}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm uppercase tracking-[0.24em] text-stone-900"
              onClick={() => setOpenItem(isOpen ? '' : item.title)}
            >
              <span>{item.title}</span>
              <ChevronDown
                className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen ? (
              <div className="pb-5 pr-8 text-sm leading-7 text-stone-600">
                {item.content}
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
