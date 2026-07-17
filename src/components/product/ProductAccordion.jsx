import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function ProductAccordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-velmora-oat">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between py-5 text-left font-sans text-xs font-semibold uppercase tracking-[0.24em] text-velmora-cocoa"
        aria-expanded={open}
      >
        {title}
        <ChevronDown className={`h-4 w-4 text-velmora-gold transition ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden font-sans text-sm leading-7 text-velmora-taupe">{children}</div>
      </div>
    </div>
  )
}
