import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const Accordion = ({ items }) => {
  const [openItem, setOpenItem] = useState(items[0]?.title)

  return (
    <div className="divide-y divide-velmora-mist/20 rounded-3xl border border-velmora-mist/20 bg-white/60">
      {items.map((item) => {
        const isOpen = openItem === item.title

        return (
          <div key={item.title}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
              onClick={() => setOpenItem(isOpen ? null : item.title)}
            >
              <span className="text-sm uppercase tracking-[0.24em] text-velmora-ink">
                {item.title}
              </span>
              <ChevronDown
                className={`h-4 w-4 text-velmora-mist transition ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen ? (
              <div className="px-5 pb-5 text-sm leading-7 text-velmora-rose">
                {item.content}
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
