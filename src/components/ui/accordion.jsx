import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Accordion({ items, defaultOpenId = null, className }) {
  const [openId, setOpenId] = useState(defaultOpenId)

  return (
    <div className={cn('border-t border-line', className)}>
      {items.map((item) => {
        const open = openId === item.id
        return (
          <div key={item.id} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpenId(open ? null : item.id)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-sans text-xs font-semibold uppercase tracking-luxe text-ink">
                {item.title}
              </span>
              {open ? (
                <Minus className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
              ) : (
                <Plus className="h-4 w-4 shrink-0 text-mocha" strokeWidth={1.5} />
              )}
            </button>
            <div
              className={cn(
                'grid transition-all duration-500 ease-luxe',
                open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="overflow-hidden">
                <div className="pb-6 text-sm leading-relaxed text-mocha">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
