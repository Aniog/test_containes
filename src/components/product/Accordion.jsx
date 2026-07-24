import { useState } from 'react'
import { ChevronDown, Minus, Plus, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-sand">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-[12px] uppercase tracking-[0.2em] font-medium">
          {title}
        </span>
        <ChevronDown
          width={16}
          height={16}
          className={cn(
            'text-stone transition-transform duration-300',
            open && 'rotate-180',
          )}
        />
      </button>
      <div
        className={cn(
          'grid transition-all duration-400 ease-luxury',
          open ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <div className="text-sm text-ink/80 leading-relaxed space-y-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
