import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-velmora-taupe-light/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-super-wide uppercase text-velmora-base">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-velmora-muted" />
        ) : (
          <ChevronDown className="w-4 h-4 text-velmora-muted" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-velmora-muted leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}
