import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

function AccordionPanel({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-t border-warm-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-sm font-medium text-[#1a1a1a] hover:text-gold transition-colors duration-300"
      >
        <span className="text-[11px] tracking-[0.12em] uppercase">{title}</span>
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
        <p className="text-sm text-taupe leading-relaxed">{children}</p>
      </div>
    </div>
  )
}

export default function ProductAccordion({ details }) {
  return (
    <div className="border-b border-warm-border">
      <AccordionPanel title="Description">
        {details.description}
      </AccordionPanel>
      <AccordionPanel title="Materials & Care">
        <div className="space-y-3">
          <div>
            <strong className="text-[#1a1a1a] text-xs uppercase tracking-wider">Materials</strong>
            <p className="mt-1">{details.materials}</p>
          </div>
          <div>
            <strong className="text-[#1a1a1a] text-xs uppercase tracking-wider">Care</strong>
            <p className="mt-1">{details.care}</p>
          </div>
        </div>
      </AccordionPanel>
      <AccordionPanel title="Shipping & Returns">
        <div className="space-y-3">
          <div>
            <strong className="text-[#1a1a1a] text-xs uppercase tracking-wider">Shipping</strong>
            <p className="mt-1">{details.shipping}</p>
          </div>
          <div>
            <strong className="text-[#1a1a1a] text-xs uppercase tracking-wider">Returns</strong>
            <p className="mt-1">{details.returns}</p>
          </div>
        </div>
      </AccordionPanel>
    </div>
  )
}