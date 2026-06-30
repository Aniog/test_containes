import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function AccordionSection({ title, children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-t border-brand-200/60">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-sm text-brand-700 hover:text-brand-900 transition-colors font-sans tracking-wide"
      >
        {title}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-brand-500 leading-relaxed font-sans">
          {children}
        </div>
      </div>
    </div>
  )
}