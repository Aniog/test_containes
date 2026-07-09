import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-velmora-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-[0.12em] uppercase font-medium">{title}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-velmora-taupe leading-relaxed pr-4">{children}</div>
      </div>
    </div>
  )
}
