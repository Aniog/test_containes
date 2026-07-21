import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const sections = [
  { id: 'description', title: 'Description' },
  { id: 'materials', title: 'Materials & Care' },
  { id: 'shipping', title: 'Shipping & Returns' },
]

export default function ProductAccordion({ product }) {
  const [open, setOpen] = useState('description')

  const content = {
    description: (
      <p className="text-ink/70 text-sm leading-relaxed">{product.description}</p>
    ),
    materials: (
      <div className="text-ink/70 text-sm leading-relaxed space-y-2">
        <p><strong className="text-ink/80">Material:</strong> {product.material}</p>
        <p><strong className="text-ink/80">Care:</strong> {product.care}</p>
      </div>
    ),
    shipping: (
      <div className="text-ink/70 text-sm leading-relaxed space-y-2">
        <p>Free worldwide shipping on orders over $75. Standard shipping takes 5–8 business days. Express shipping available at checkout.</p>
        <p>We offer a 30-day return policy for unworn items in original packaging. For more details, visit our Shipping & Returns page.</p>
      </div>
    ),
  }

  return (
    <div className="border-t border-velvet-200">
      {sections.map((section) => (
        <div key={section.id} className="border-b border-velvet-200">
          <button
            onClick={() => setOpen(open === section.id ? null : section.id)}
            className="w-full flex items-center justify-between py-4 text-left"
          >
            <span className="text-[11px] uppercase tracking-[0.15em] text-ink font-medium">
              {section.title}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-ink/50 transition-transform duration-300 ${
                open === section.id ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open === section.id ? 'max-h-96 pb-4' : 'max-h-0'
            }`}
          >
            {content[section.id]}
          </div>
        </div>
      ))}
    </div>
  )
}