import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

function ProductAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="divide-y divide-mist border-y border-mist">
      {items.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="text-sm font-medium uppercase tracking-editorial text-ink">
                {item.title}
              </span>
              <ChevronDown
                className={`h-4 w-4 text-truffle transition-transform duration-300 ease-editorial ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen ? <p className="pb-5 text-sm leading-7 text-truffle">{item.content}</p> : null}
          </div>
        )
      })}
    </div>
  )
}

export default ProductAccordion
