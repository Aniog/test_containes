import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const ProductAccordion = ({ items }) => {
  const [openItem, setOpenItem] = useState(items[0]?.title ?? '')

  return (
    <div className="border-t border-velmora-line/80">
      {items.map((item) => {
        const isOpen = openItem === item.title

        return (
          <div key={item.title} className="border-b border-velmora-line/80 py-4">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left"
              onClick={() => setOpenItem(isOpen ? '' : item.title)}
            >
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-velmora-ink">
                {item.title}
              </span>
              <ChevronDown className={`h-5 w-5 text-velmora-stone transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen ? <p className="mt-4 max-w-2xl text-sm leading-7 text-velmora-stone">{item.content}</p> : null}
          </div>
        )
      })}
    </div>
  )
}

export default ProductAccordion
