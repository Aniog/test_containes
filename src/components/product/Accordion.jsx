import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="accordion-header w-full text-left"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="text-velmora-text-light leading-relaxed pt-2 text-sm">
          {children}
        </div>
      </div>
    </div>
  )
}
