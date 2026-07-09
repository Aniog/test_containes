import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const ProductAccordion = ({ items }) => {
  const [openItem, setOpenItem] = useState(items[0]?.title)

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openItem === item.title

        return (
          <div
            key={item.title}
            className="rounded-[1.75rem] border border-truffle/10 bg-white px-5"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              onClick={() => setOpenItem(isOpen ? '' : item.title)}
            >
              <span className="text-sm uppercase tracking-[0.2em] text-velvet">
                {item.title}
              </span>
              <ChevronDown
                className={`h-5 w-5 text-truffle transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen ? (
              <div className="pb-5 text-sm leading-7 text-truffle">{item.content}</div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

export default ProductAccordion
