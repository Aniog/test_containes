import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

function AccordionList({ items }) {
  const [openLabel, setOpenLabel] = useState(items[0]?.label)

  return (
    <div className="divide-y divide-velmora-sand/30 rounded-3xl border border-velmora-sand/35 bg-white shadow-soft">
      {items.map((item) => {
        const isOpen = openLabel === item.label

        return (
          <div key={item.label} className="px-5 py-4">
            <button
              className="flex w-full items-center justify-between gap-4 text-left"
              onClick={() => setOpenLabel(isOpen ? '' : item.label)}
              type="button"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-velmora-ink">
                {item.label}
              </span>
              <ChevronDown className={`h-4 w-4 text-velmora-aubergine transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen ? (
              <p className="mt-4 max-w-3xl text-sm leading-7 text-velmora-aubergine/85">{item.content}</p>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

export default AccordionList
