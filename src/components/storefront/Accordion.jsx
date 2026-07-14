import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

function Accordion({ items }) {
  const [openItem, setOpenItem] = useState(items[0]?.title)

  return (
    <div className="divide-y divide-stone-200/10 border-y border-stone-200/10">
      {items.map((item) => {
        const isOpen = openItem === item.title

        return (
          <div key={item.title} className="py-5">
            <button
              type="button"
              onClick={() => setOpenItem(isOpen ? null : item.title)}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-stone-400">{item.title}</span>
              <ChevronDown className={`h-5 w-5 text-stone-400 transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen ? <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-300">{item.content}</p> : null}
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
