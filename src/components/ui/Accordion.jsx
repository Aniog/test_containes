import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../lib/utils'

export default function Accordion({ items }) {
  return (
    <div className="divide-y divide-parchment border-y border-parchment">
      {items.map((item, index) => (
        <AccordionItem key={item.title} item={item} defaultOpen={index === 0} />
      ))}
    </div>
  )
}

function AccordionItem({ item, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="py-1">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 px-1 py-5 text-left"
      >
        <span className="text-sm uppercase tracking-[0.22em] text-ink">
          {item.title}
        </span>
        <ChevronDown
          className={cn('h-4 w-4 text-stone transition-transform duration-300', open && 'rotate-180')}
        />
      </button>
      <div className={cn('grid transition-all duration-300', open ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]')}>
        <div className="overflow-hidden pr-8 text-sm leading-7 text-stone">
          {item.content}
        </div>
      </div>
    </div>
  )
}
