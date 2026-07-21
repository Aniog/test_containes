import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-hairline">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-serif text-lg md:text-xl text-ink">{title}</span>
        <span className="text-ink">
          {open ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
        </span>
      </button>
      <div
        className={cn(
          'grid transition-all duration-400 ease-luxe',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-6 text-sm md:text-base text-stone leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  )
}
