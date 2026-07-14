import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const ProductAccordions = ({ product }) => {
  const sections = [
    { id: 'description', label: 'Description', content: product.description },
    { id: 'materials', label: 'Materials & Care', content: product.materialsCare },
    { id: 'shipping', label: 'Shipping & Returns', content: product.shippingReturns },
  ]
  const [openSection, setOpenSection] = useState('description')

  return (
    <div className="mt-10 rounded-[2rem] border border-mist bg-white shadow-soft">
      {sections.map((section, index) => {
        const isOpen = openSection === section.id

        return (
          <div key={section.id} className={index !== sections.length - 1 ? 'border-b border-mist' : ''}>
            <button
              type="button"
              onClick={() => setOpenSection(isOpen ? '' : section.id)}
              className="flex w-full items-center justify-between px-6 py-5 text-left"
            >
              <span className="text-xs uppercase tracking-brand text-ink">{section.label}</span>
              <ChevronDown className={`h-5 w-5 text-ink transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen ? <div className="px-6 pb-6 text-sm leading-7 text-ink/72">{section.content}</div> : null}
          </div>
        )
      })}
    </div>
  )
}

export default ProductAccordions
