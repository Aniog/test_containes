import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const sections = [
  { key: 'description', label: 'Description' },
  { key: 'materialsCare', label: 'Materials & Care' },
  { key: 'shippingReturns', label: 'Shipping & Returns' },
]

export default function ProductAccordions({ product }) {
  const [openKey, setOpenKey] = useState('description')

  return (
    <div className="rounded-[30px] border border-velmora-ink/10 bg-white/70 shadow-card">
      {sections.map((section, index) => {
        const isOpen = openKey === section.key

        return (
          <div
            key={section.key}
            className={index !== sections.length - 1 ? 'border-b border-velmora-ink/10' : ''}
          >
            <button
              type="button"
              onClick={() => setOpenKey(isOpen ? '' : section.key)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-xs uppercase tracking-luxe text-velmora-ink">
                {section.label}
              </span>
              <ChevronDown
                className={`h-4 w-4 text-velmora-cocoa transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen ? (
              <div className="px-6 pb-6 text-sm leading-7 text-velmora-cocoa">
                {product[section.key]}
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
