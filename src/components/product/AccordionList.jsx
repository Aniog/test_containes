import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

function AccordionList({ items }) {
  const [openItem, setOpenItem] = useState(items[0]?.title)

  return (
    <div className="divide-y divide-velmora-ink/10 rounded-[2rem] border border-velmora-ink/10 bg-velmora-pearl shadow-card">
      {items.map((item) => {
        const open = openItem === item.title

        return (
          <div key={item.title} className="px-6 py-4">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-2 text-left"
              onClick={() => setOpenItem(open ? '' : item.title)}
            >
              <span className="text-sm uppercase tracking-[0.24em] text-velmora-ink">{item.title}</span>
              <ChevronDown className={`h-4 w-4 text-velmora-truffle transition ${open ? 'rotate-180' : ''}`} />
            </button>
            {open ? (
              <div className="pb-2 pt-3 text-sm leading-7 text-velmora-truffle">
                {Array.isArray(item.content) ? (
                  <ul className="space-y-2">
                    {item.content.map((line) => (
                      <li key={line}>• {line}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.content}</p>
                )}
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

export default AccordionList
