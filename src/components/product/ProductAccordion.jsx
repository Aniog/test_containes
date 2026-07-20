import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const accordionItems = [
  { title: 'Description', id: 'description' },
  { title: 'Materials & Care', id: 'care' },
  { title: 'Shipping & Returns', id: 'shipping' },
]

export default function ProductAccordion({ details, care, shipping }) {
  const [open, setOpen] = useState(null)

  const content = {
    description: details,
    care: care,
    shipping: shipping,
  }

  return (
    <div className="border-t border-warm-border mt-8">
      {accordionItems.map((item) => (
        <div key={item.id} className="border-b border-warm-border">
          <button
            onClick={() => setOpen(open === item.id ? null : item.id)}
            className="w-full flex items-center justify-between py-4 text-sm uppercase tracking-[0.15em] text-[#1A1A1A] hover:text-gold transition-colors"
          >
            {item.title}
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                open === item.id ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open === item.id ? 'max-h-48 pb-4' : 'max-h-0'
            }`}
          >
            <p className="text-sm text-muted-text leading-relaxed">
              {content[item.id]}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}