import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function ProductAccordion({ title, items }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-velvet-800">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-super-wide uppercase text-velvet-200 font-medium">{title}</span>
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
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="text-velvet-400 text-sm leading-relaxed flex gap-2">
              <span className="text-gold-500/60 mt-0.5">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}