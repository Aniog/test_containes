import { ChevronDown } from 'lucide-react'

export default function ProductAccordion({ items, openItem, onToggle }) {
  return (
    <div className="border-y border-champagne">
      {items.map((item) => {
        const isOpen = openItem === item.id

        return (
          <div key={item.id} className="border-b border-champagne last:border-b-0">
            <button
              type="button"
              onClick={() => onToggle(item.id)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="text-sm font-medium uppercase tracking-[0.18em] text-espresso">
                {item.label}
              </span>
              <ChevronDown
                className={`h-5 w-5 text-mocha transition duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen ? (
              <div className="pb-5 pr-8 text-sm leading-7 text-mocha">{item.content}</div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
