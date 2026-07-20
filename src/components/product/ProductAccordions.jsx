import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function ProductAccordions({ product }) {
  const [open, setOpen] = useState('Description')
  const panels = [
    { title: 'Description', body: product.detail },
    { title: 'Materials & Care', body: `${product.material}. ${product.care}` },
    {
      title: 'Shipping & Returns',
      body: 'Enjoy free worldwide shipping on orders over $75, easy 30-day returns, and gift-ready packaging with every Velmora order.',
    },
  ]

  return (
    <div className="mt-10 divide-y divide-velmora-ink/10 border-y border-velmora-ink/10 text-velmora-ink">
      {panels.map((panel) => {
        const isOpen = open === panel.title
        return (
          <div key={panel.title}>
            <button
              type="button"
              className="flex w-full items-center justify-between bg-transparent py-5 text-left text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink"
              onClick={() => setOpen(isOpen ? '' : panel.title)}
              aria-expanded={isOpen}
            >
              {panel.title}
              <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && <p className="pb-6 text-sm leading-7 text-velmora-cocoa/78">{panel.body}</p>}
          </div>
        )
      })}
    </div>
  )
}
