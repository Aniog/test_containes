import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function ProductAccordions({ product }) {
  const sections = [
    { title: 'Description', text: product.details },
    { title: 'Materials & Care', text: '18K gold plated over a durable base with hypoallergenic finishing. Store dry, avoid perfume, and polish gently with a soft cloth.' },
    { title: 'Shipping & Returns', text: 'Free worldwide shipping on every order. If it is not quite right, return unworn pieces within 30 days.' },
  ]
  const [open, setOpen] = useState('Description')

  return (
    <div className="mt-10 border-t border-velmora-mist text-velmora-espresso">
      {sections.map((section) => (
        <div key={section.title} className="border-b border-velmora-mist">
          <button type="button" onClick={() => setOpen(open === section.title ? '' : section.title)} className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-[0.2em] text-velmora-espresso">
            {section.title}
            <ChevronDown className={`h-4 w-4 transition ${open === section.title ? 'rotate-180' : ''}`} />
          </button>
          {open === section.title && <p className="pb-6 text-sm leading-7 text-velmora-cocoa/82">{section.text}</p>}
        </div>
      ))}
    </div>
  )
}
