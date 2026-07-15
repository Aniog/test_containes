import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Accordion({ items }) {
  const [openItem, setOpenItem] = useState(items[0]?.id)

  return (
    <div className="divide-y divide-velmora-sand border-y border-velmora-sand">
      {items.map((item) => {
        const isOpen = openItem === item.id

        return (
          <div key={item.id}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm uppercase tracking-[0.18em] text-velmora-ink"
              onClick={() => setOpenItem(isOpen ? null : item.id)}
            >
              <span>{item.label}</span>
              <ChevronDown className={cn('h-4 w-4 transition', isOpen && 'rotate-180')} />
            </button>
            <div className={cn('grid transition-all duration-300', isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]')}>
              <div className="overflow-hidden">
                <p className="max-w-2xl text-sm leading-7 text-velmora-taupe">{item.content}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
