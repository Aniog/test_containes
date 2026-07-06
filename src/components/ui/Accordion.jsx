import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-t border-divider">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-sans text-xs tracking-widest uppercase font-semibold text-charcoal group-hover:text-champagne transition-colors duration-300">
          {title}
        </span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className={`text-warm-stone transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-350 ease-out ${open ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
      >
        <div className="font-sans text-sm text-warm-stone leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}
