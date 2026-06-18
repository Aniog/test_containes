import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

function Accordion({ items }) {
  const [openItem, setOpenItem] = useState(items[0]?.title ?? '')

  return (
    <div className="divide-y divide-stone-300/70 rounded-[2rem] border border-stone-300/70 bg-stone-50">
      {items.map((item) => {
        const isOpen = openItem === item.title

        return (
          <div key={item.title}>
            <button
              type="button"
              className="flex w-full items-center justify-between px-6 py-5 text-left text-stone-900"
              onClick={() => setOpenItem(isOpen ? '' : item.title)}
            >
              <span className="text-sm font-medium uppercase tracking-[0.3em] text-stone-700">
                {item.title}
              </span>
              <ChevronDown
                className={`h-5 w-5 text-stone-500 transition ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen ? (
              <div className="px-6 pb-6 text-sm leading-7 text-stone-600">{item.content}</div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
