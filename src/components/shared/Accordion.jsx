import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

function Accordion({ items }) {
  const [openItem, setOpenItem] = useState(items[0]?.title || '')

  return (
    <div className="divide-y divide-pearl border-y border-pearl">
      {items.map((item) => {
        const isOpen = openItem === item.title

        return (
          <div key={item.title} className="py-5">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left text-sm uppercase tracking-[0.24em] text-velvet"
              onClick={() => setOpenItem(isOpen ? '' : item.title)}
            >
              <span>{item.title}</span>
              <ChevronDown className={cn('h-4 w-4 transition-transform duration-300 ease-premium', isOpen && 'rotate-180')} />
            </button>
            <div
              className={cn(
                'grid transition-[grid-template-rows,opacity] duration-300 ease-premium',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">
                <p className="pt-4 text-sm leading-7 text-smoke">{item.content}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
