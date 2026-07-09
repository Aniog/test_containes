import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const accordionItems = (product) => [
  {
    title: 'Description',
    content: product.description,
  },
  {
    title: 'Materials & Care',
    content: product.materialsCare,
  },
  {
    title: 'Shipping & Returns',
    content: product.shippingReturns,
  },
]

const ProductAccordions = ({ product }) => {
  const [openItem, setOpenItem] = useState('Description')

  return (
    <div className="mt-10 rounded-[2rem] border border-stone-200 bg-stone-50 px-6 py-2 shadow-xl shadow-stone-900/5 sm:px-8">
      {accordionItems(product).map((item) => {
        const isOpen = openItem === item.title

        return (
          <div key={item.title} className="border-b border-stone-200 last:border-b-0">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              onClick={() => setOpenItem(isOpen ? '' : item.title)}
            >
              <span className="font-medium uppercase tracking-[0.22em] text-stone-900">
                {item.title}
              </span>
              <ChevronDown
                className={`h-5 w-5 text-stone-500 transition ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen ? (
              <div className="pb-5 text-sm leading-7 text-stone-600">
                {item.content}
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

export default ProductAccordions
