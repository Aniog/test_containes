import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const Accordion = ({ items }) => {
  const [openItem, setOpenItem] = useState(items[0]?.title ?? null)

  return (
    <div className="divide-y divide-velmora-line border-y border-velmora-line">
      {items.map((item) => {
        const isOpen = openItem === item.title

        return (
          <div key={item.title} className="py-4">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-1 text-left"
              onClick={() => setOpenItem(isOpen ? null : item.title)}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-ink">
                {item.title}
              </span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-velmora-mist transition duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? 'mt-4 grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl text-sm leading-7 text-velmora-mist">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
