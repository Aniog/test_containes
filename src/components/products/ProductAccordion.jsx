import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const ProductAccordion = ({ items }) => {
  const [openItem, setOpenItem] = useState(items[0]?.title)

  return (
    <div className="divide-y divide-stone-200/80 border-y border-stone-200/80">
      {items.map((item) => {
        const isOpen = openItem === item.title

        return (
          <div key={item.title} className="py-4">
            <button
              type="button"
              onClick={() => setOpenItem(isOpen ? null : item.title)}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="text-sm font-medium uppercase tracking-[0.28em] text-brand-text">
                {item.title}
              </span>
              <ChevronDown className={`h-5 w-5 text-stone-500 transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pt-4' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <p className="max-w-2xl text-sm leading-7 text-stone-600">{item.content}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProductAccordion
