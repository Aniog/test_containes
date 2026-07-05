import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Accordion({ items, defaultOpenIndex = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex)
  return (
    <div className="border-t border-hairline">
      {items.map((item, idx) => {
        const open = openIndex === idx
        return (
          <div key={item.title} className="border-b border-hairline">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : idx)}
              aria-expanded={open}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <span className="text-[11px] uppercase tracking-widest2 font-medium text-espresso">
                {item.title}
              </span>
              {open ? (
                <Minus className="w-4 h-4 text-espresso" strokeWidth={1.4} />
              ) : (
                <Plus className="w-4 h-4 text-espresso" strokeWidth={1.4} />
              )}
            </button>
            <div
              className={cn(
                'grid transition-all duration-500 ease-out',
                open ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">
                {typeof item.content === 'string' ? (
                  <p className="text-sm text-espresso-soft leading-relaxed max-w-2xl">
                    {item.content}
                  </p>
                ) : (
                  item.content
                )}
                {item.bullets && (
                  <ul className="mt-3 space-y-2 text-sm text-espresso-soft">
                    {item.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 h-1 w-1 rounded-full bg-gold flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
