import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const ProductAccordion = ({ items }) => {
  const [openItem, setOpenItem] = useState(items[0]?.title)

  return (
    <div className="divide-y divide-stone-300/70 rounded-[2rem] border border-stone-300/70 bg-stone-100/70 px-5 text-stone-900">
      {items.map((item) => {
        const isOpen = openItem === item.title

        return (
          <div key={item.title} className="py-5">
            <button
              type="button"
              onClick={() => setOpenItem(isOpen ? null : item.title)}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="text-xs uppercase tracking-[0.35em] text-stone-700">{item.title}</span>
              <ChevronDown className={`h-4 w-4 text-stone-700 transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen ? (
              <p className="pt-4 text-sm leading-7 text-stone-600">{item.content}</p>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

export default ProductAccordion
