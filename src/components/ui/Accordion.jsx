import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

function Accordion({ items }) {
  const [openItem, setOpenItem] = useState(items[0]?.id)

  return (
    <div className="divide-y divide-stone-200 border-y border-stone-200">
      {items.map((item) => {
        const isOpen = openItem === item.id

        return (
          <div key={item.id} className="py-5">
            <button
              type="button"
              onClick={() => setOpenItem(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="font-sans-custom text-sm uppercase tracking-[0.3em] text-stone-900">
                {item.label}
              </span>
              <ChevronDown className={cn('h-5 w-5 text-stone-500 transition', isOpen && 'rotate-180')} />
            </button>
            {isOpen ? <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600">{item.content}</p> : null}
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
