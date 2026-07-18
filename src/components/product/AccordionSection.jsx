import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function AccordionSection({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-velvet-800/10">
      <button
        className="flex items-center justify-between w-full py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-xs font-sans font-semibold tracking-widest uppercase text-velvet-800">{title}</span>
        <ChevronDown
          className={`w-4 h-4 text-velvet-400 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-velvet-600 font-sans leading-relaxed">{children}</div>
      </div>
    </div>
  )
}
