import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-velvet-200">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-4 text-left font-sans text-sm font-medium text-obsidian-700 uppercase tracking-widest hover:text-velvet-500 transition-colors"
      >
        {title}
        <ChevronDown
          size={16}
          className={cn('transition-transform duration-300 text-velvet-400', open && 'rotate-180')}
        />
      </button>
      <div className={cn('overflow-hidden transition-all duration-300', open ? 'max-h-96 pb-4' : 'max-h-0')}>
        <div className="text-sm text-obsidian-500 leading-relaxed font-sans">
          {children}
        </div>
      </div>
    </div>
  )
}
