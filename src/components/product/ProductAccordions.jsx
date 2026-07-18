import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const accordionItems = [
  { key: 'details', label: 'Description', field: 'details' },
  { key: 'care', label: 'Materials & Care', field: 'care' },
  { key: 'shipping', label: 'Shipping & Returns', field: 'shipping' },
]

export function ProductAccordions({ product }) {
  const [openItem, setOpenItem] = useState('details')

  return (
    <div className="rounded-[2rem] border border-velmora-line bg-white/70 shadow-soft">
      {accordionItems.map((item, index) => {
        const open = openItem === item.key

        return (
          <div key={item.key} className={index < accordionItems.length - 1 ? 'border-b border-velmora-line' : ''}>
            <button
              type="button"
              onClick={() => setOpenItem(open ? '' : item.key)}
              className="flex w-full items-center justify-between px-6 py-5 text-left sm:px-8"
            >
              <span className="text-xs uppercase tracking-[0.28em] text-velmora-espresso">{item.label}</span>
              <ChevronDown className={`h-4 w-4 text-velmora-truffle transition ${open ? 'rotate-180' : ''}`} />
            </button>
            {open && (
              <div className="px-6 pb-6 text-sm leading-7 text-velmora-truffle sm:px-8">
                {product[item.field]}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
