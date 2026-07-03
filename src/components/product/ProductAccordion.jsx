import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ProductAccordion({ sections, defaultOpen = 'description' }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-t border-ink-900/15">
      {sections.map((s) => {
        const isOpen = open === s.id
        return (
          <div key={s.id} className="border-b border-ink-900/15">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : s.id)}
              className="w-full flex items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-[12px] uppercase tracking-[0.22em] text-ink-900 font-medium">
                {s.title}
              </span>
              {isOpen ? (
                <Minus className="w-4 h-4 text-ink-700" strokeWidth={1.4} />
              ) : (
                <Plus className="w-4 h-4 text-ink-700" strokeWidth={1.4} />
              )}
            </button>
            <div
              className={cn(
                'grid transition-[grid-template-rows] duration-500 ease-out',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
              )}
            >
              <div className="overflow-hidden">
                <div className="pb-6 text-[14px] leading-[1.75] text-ink-600 max-w-[640px]">
                  {typeof s.content === 'string' ? <p>{s.content}</p> : s.content}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
