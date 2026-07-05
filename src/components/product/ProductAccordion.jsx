import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

function ProductAccordion({ items }) {
  const [openKey, setOpenKey] = useState(items[0]?.key ?? '')

  return (
    <div className="rounded-[28px] border border-line bg-pearl">
      {items.map((item, index) => {
        const isOpen = openKey === item.key

        return (
          <div key={item.key} className={index !== items.length - 1 ? 'border-b border-line' : ''}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
              onClick={() => setOpenKey(isOpen ? '' : item.key)}
            >
              <span className="text-sm uppercase tracking-[0.2em] text-ink">{item.label}</span>
              <ChevronDown
                className={`h-4 w-4 text-truffle transition duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={[
                'grid overflow-hidden transition-all duration-300',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
              ].join(' ')}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-7 text-truffle md:px-6 md:pb-6">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProductAccordion
