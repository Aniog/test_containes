import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const ProductAccordion = ({ items }) => {
  const [openItem, setOpenItem] = useState(items[0]?.title)

  return (
    <div className="mt-10 divide-y divide-stone-200 rounded-[1.75rem] border border-stone-200 bg-white px-6">
      {items.map((item) => {
        const isOpen = openItem === item.title

        return (
          <div key={item.title}>
            <button
              className="flex w-full items-center justify-between py-5 text-left text-neutral-950"
              onClick={() => setOpenItem(isOpen ? '' : item.title)}
              type="button"
            >
              <span className="text-sm font-medium uppercase tracking-[0.28em] text-neutral-950">
                {item.title}
              </span>
              <ChevronDown className={`h-5 w-5 text-stone-500 transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen ? (
              <p className="pb-5 text-sm leading-7 text-stone-600">{item.content}</p>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

export default ProductAccordion
