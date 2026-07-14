import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

function Accordion({ title, content, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-cream-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-xs tracking-[0.15em] uppercase font-medium text-warm-900 group-hover:text-gold-600 transition-colors">
          {title}
        </span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className={`text-warm-800/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-40 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-warm-800/60 leading-relaxed">{content}</p>
      </div>
    </div>
  )
}

export default function ProductAccordions({ product }) {
  return (
    <div className="mt-10 border-t border-cream-300">
      <Accordion title="Description" content={product.description} defaultOpen={true} />
      <Accordion title="Materials & Care" content={`${product.materials} ${product.care}`} />
      <Accordion title="Shipping & Returns" content={product.shipping} />
    </div>
  )
}
