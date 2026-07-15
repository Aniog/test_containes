import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Accordion({ items, defaultOpen = [] }) {
  const [open, setOpen] = useState(new Set(defaultOpen))

  const toggle = (index) => {
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  return (
    <div className="border-t border-vel-border">
      {items.map((item, index) => (
        <div key={index} className="border-b border-vel-border">
          <button
            type="button"
            onClick={() => toggle(index)}
            className="flex w-full items-center justify-between py-4 text-left"
          >
            <span className="text-sm font-medium uppercase tracking-wide text-vel-base">
              {item.title}
            </span>
            <ChevronDown
              className={cn(
                'h-4 w-4 text-vel-muted transition-transform duration-300',
                open.has(index) && 'rotate-180'
              )}
            />
          </button>
          <div
            className={cn(
              'grid overflow-hidden text-sm text-vel-muted transition-all duration-300',
              open.has(index) ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'
            )}
          >
            <div className="min-h-0">
              <div className="leading-relaxed">{item.content}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
