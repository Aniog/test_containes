import { ChevronDown } from 'lucide-react'

export default function ProductAccordion({ items, openItem, onToggle }) {
  return (
    <div className="divide-y divide-velmora-line rounded-[2rem] border border-velmora-line bg-velmora-panel">
      {items.map((item) => {
        const isOpen = openItem === item.id

        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => onToggle(item.id)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-xs uppercase tracking-[0.28em] text-velmora-cocoa">
                {item.label}
              </span>
              <ChevronDown
                className={`h-4 w-4 text-velmora-stone transition ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen ? (
              <div className="px-6 pb-6 text-sm leading-7 text-velmora-stone">
                {item.content}
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
