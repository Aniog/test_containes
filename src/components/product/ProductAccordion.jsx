import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const SECTIONS = [
  { key: 'description', title: 'Description' },
  { key: 'materials', title: 'Materials & Care' },
  { key: 'shipping', title: 'Shipping & Returns' },
]

export default function ProductAccordion({ product }) {
  const [open, setOpen] = useState('description')

  const toggle = (key) => setOpen(open === key ? null : key)

  const content = {
    description: product.description,
    materials: (
      <>
        <p className="mb-3">{product.materials}</p>
        <p>{product.care}</p>
      </>
    ),
    shipping: (
      <>
        <p className="mb-3">
          Free worldwide shipping on orders over $75. Standard delivery is 5–8
          business days; express options available at checkout.
        </p>
        <p>
          Not quite right? Return or exchange any unworn piece within 30 days
          for a full refund.
        </p>
      </>
    ),
  }

  return (
    <div className="border-t border-warm-gray">
      {SECTIONS.map((section) => {
        const isOpen = open === section.key
        return (
          <div key={section.key} className="border-b border-warm-gray">
            <button
              type="button"
              onClick={() => toggle(section.key)}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="text-xs font-sans uppercase tracking-ui text-espresso font-medium">
                {section.title}
              </span>
              <span className="text-espresso">
                {isOpen ? (
                  <Minus size={14} strokeWidth={1.5} />
                ) : (
                  <Plus size={14} strokeWidth={1.5} />
                )}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96 pb-5' : 'max-h-0'
              }`}
            >
              <div className="text-sm font-light text-taupe leading-relaxed">
                {content[section.key]}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
