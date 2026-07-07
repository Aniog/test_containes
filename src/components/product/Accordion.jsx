import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Accordion({ items }) {
  const [open, setOpen] = useState(items[0]?.title || null)

  return (
    <div className="border-t border-[#E2DDD5]">
      {items.map((item) => {
        const isOpen = open === item.title
        return (
          <div key={item.title} className="border-b border-[#E2DDD5]">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : item.title)}
              className="flex w-full items-center justify-between py-4 text-left"
            >
              <span className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-[#1A1614]">
                {item.title}
              </span>
              {isOpen ? (
                <Minus size={16} strokeWidth={1.5} className="text-[#6B625B]" />
              ) : (
                <Plus size={16} strokeWidth={1.5} className="text-[#6B625B]" />
              )}
            </button>
            <div
              className={cn(
                'overflow-hidden transition-all duration-300',
                isOpen ? 'max-h-96 pb-5' : 'max-h-0'
              )}
            >
              <p className="font-sans text-sm font-light leading-relaxed text-[#6B625B]">
                {item.content}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
