import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'

const sections = [
  { key: 'description', title: 'Description' },
  { key: 'care', title: 'Materials & Care' },
  { key: 'shipping', title: 'Shipping & Returns' },
]

export default function ProductAccordionList({ product }) {
  const [openSection, setOpenSection] = useState('description')

  return (
    <div className="border-t border-velmora-mist">
      {sections.map((section) => {
        const isOpen = openSection === section.key
        return (
          <div className="border-b border-velmora-mist" key={section.key}>
            <button
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              onClick={() => setOpenSection(isOpen ? '' : section.key)}
              type="button"
            >
              <span className="text-sm uppercase tracking-product text-velmora-ink">
                {section.title}
              </span>
              {isOpen ? (
                <Minus className="h-4 w-4 text-velmora-gold" />
              ) : (
                <Plus className="h-4 w-4 text-velmora-gold" />
              )}
            </button>
            {isOpen ? (
              <p className="pb-5 text-sm leading-7 text-velmora-taupe">
                {product[section.key === 'description' ? 'longDescription' : section.key]}
              </p>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
