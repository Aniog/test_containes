import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function AccordionGroup({ items }) {
  const [openItem, setOpenItem] = useState(items[0]?.title ?? '')

  return (
    <div className="rounded-[2rem] border border-velmora-mist/70 bg-white/80 p-3 shadow-soft">
      {items.map((item, index) => {
        const open = openItem === item.title

        return (
          <div key={item.title} className={index > 0 ? 'border-t border-velmora-mist/60' : ''}>
            <button
              type="button"
              onClick={() => setOpenItem(open ? '' : item.title)}
              className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-velmora-ink">
                {item.title}
              </span>
              <ChevronDown
                className={`h-4 w-4 text-velmora-muted transition ${open ? 'rotate-180' : ''}`}
              />
            </button>
            {open ? (
              <div className="px-4 pb-5 text-sm leading-7 text-velmora-muted">{item.content}</div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
