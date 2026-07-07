import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-t border-cream/10 last:border-b">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 text-left group"
      >
        <span className="font-sans text-sm uppercase tracking-widest text-cream font-medium">
          {title}
        </span>
        <ChevronDown
          size={18}
          className={cn(
            'text-warm-gray transition-transform duration-300 group-hover:text-cream',
            open && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'grid transition-all duration-300 ease-out',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-5 text-warm-gray text-sm leading-relaxed font-sans">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Accordions({ items }) {
  return (
    <div>
      {items.map((item) => (
        <Accordion key={item.title} title={item.title} defaultOpen={item.defaultOpen}>
          {item.content}
        </Accordion>
      ))}
    </div>
  )
}
