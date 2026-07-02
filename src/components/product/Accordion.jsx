import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-velvet-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-xs tracking-widest-plus uppercase text-deep font-medium">
          {title}
        </span>
        <ChevronDown
          size={14}
          className={`text-velvet-400 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-velvet-600 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}