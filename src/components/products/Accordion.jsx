import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(items[0]?.title)

  return (
    <div className="border-t border-velmora-mist">
      {items.map((item) => {
        const isOpen = open === item.title
        return (
          <div key={item.title} className="border-b border-velmora-mist">
            <button
              type="button"
              className="flex w-full items-center justify-between bg-transparent py-5 text-left text-xs font-semibold uppercase tracking-luxury text-velmora-espresso"
              onClick={() => setOpen(isOpen ? '' : item.title)}
            >
              {item.title}
              <ChevronDown className={cn('h-4 w-4 transition', isOpen && 'rotate-180')} />
            </button>
            {isOpen && <div className="pb-6 text-sm leading-7 text-velmora-taupe">{item.content}</div>}
          </div>
        )
      })}
    </div>
  )
}
