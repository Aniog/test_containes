import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function AccordionGroup({ items }) {
  const [openKey, setOpenKey] = useState(items[0]?.title ?? '')

  return (
    <div className="rounded-[2rem] border border-velmora-line/70 bg-velmora-paper shadow-velmora-card">
      {items.map((item, index) => {
        const isOpen = openKey === item.title

        return (
          <div key={item.title} className={index < items.length - 1 ? 'border-b border-velmora-line/70' : ''}>
            <button
              type="button"
              onClick={() => setOpenKey(isOpen ? '' : item.title)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-velmora-ink sm:px-6"
            >
              <span className="text-xs uppercase tracking-editorial text-velmora-ink">{item.title}</span>
              <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden px-5 pb-5 text-sm leading-7 text-velmora-muted sm:px-6">
                {item.content}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
