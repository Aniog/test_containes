import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-velvet-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-[0.1em] uppercase font-semibold text-velvet-800">{title}</span>
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
        <div className="text-sm text-velvet-600 leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

export default function ProductAccordion({ product }) {
  return (
    <div className="border-t border-velvet-100">
      <AccordionItem title="Description" defaultOpen>
        <p>{product.description}</p>
      </AccordionItem>
      <AccordionItem title="Materials & Care">
        <div className="space-y-2">
          <p><strong className="text-velvet-800">Materials:</strong> {product.materials}</p>
          <p><strong className="text-velvet-800">Care:</strong> {product.care}</p>
        </div>
      </AccordionItem>
      <AccordionItem title="Shipping & Returns">
        <p>{product.shipping}</p>
      </AccordionItem>
    </div>
  )
}
