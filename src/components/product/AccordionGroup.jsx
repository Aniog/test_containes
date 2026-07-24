import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const AccordionGroup = ({ items }) => {
  const [activeItem, setActiveItem] = useState(items[0]?.title)

  return (
    <div className="divide-y divide-velvet/10 rounded-[28px] border border-velvet/10 bg-white text-velvet shadow-soft">
      {items.map((item) => {
        const isOpen = activeItem === item.title

        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setActiveItem(isOpen ? '' : item.title)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-xs uppercase tracking-eyebrow text-velvet/75">{item.title}</span>
              <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen ? (
              <div className="px-5 pb-5 text-sm leading-7 text-velvet/70">{item.content}</div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

export default AccordionGroup
