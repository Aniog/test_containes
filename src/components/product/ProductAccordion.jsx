import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const accordionItems = [
  { key: 'description', label: 'Description' },
  { key: 'materials', label: 'Materials & Care' },
  { key: 'shipping', label: 'Shipping & Returns' },
]

export default function ProductAccordion({ product }) {
  const [open, setOpen] = useState('description')

  const toggle = (key) => {
    setOpen(open === key ? null : key)
  }

  const content = {
    description: product.description,
    materials: (
      <div className="space-y-3">
        <div>
          <h4 className="text-xs tracking-wider uppercase font-sans font-medium text-velmora-700 mb-1">Materials</h4>
          <p className="text-sm text-velmora-600 font-sans leading-relaxed">{product.details}</p>
        </div>
        <div>
          <h4 className="text-xs tracking-wider uppercase font-sans font-medium text-velmora-700 mb-1">Care</h4>
          <p className="text-sm text-velmora-600 font-sans leading-relaxed">{product.care}</p>
        </div>
      </div>
    ),
    shipping: (
      <div className="space-y-3">
        <div>
          <h4 className="text-xs tracking-wider uppercase font-sans font-medium text-velmora-700 mb-1">Shipping</h4>
          <p className="text-sm text-velmora-600 font-sans leading-relaxed">{product.shipping}</p>
        </div>
        <div>
          <h4 className="text-xs tracking-wider uppercase font-sans font-medium text-velmora-700 mb-1">Returns</h4>
          <p className="text-sm text-velmora-600 font-sans leading-relaxed">{product.returns}</p>
        </div>
      </div>
    ),
  }

  return (
    <div className="divide-y divide-velmora-200">
      {accordionItems.map((item) => (
        <div key={item.key}>
          <button
            onClick={() => toggle(item.key)}
            className="w-full flex items-center justify-between py-4 text-left transition-colors hover:text-velmora-700"
          >
            <span className="text-xs tracking-widest uppercase font-sans font-medium text-velmora-800">
              {item.label}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-velmora-400 transition-transform duration-300 ${
                open === item.key ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open === item.key ? 'max-h-96 pb-4' : 'max-h-0'
            }`}
          >
            <div className="text-sm text-velmora-600 font-sans leading-relaxed">
              {content[item.key]}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}