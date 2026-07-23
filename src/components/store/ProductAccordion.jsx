import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const ProductAccordion = ({ items }) => {
  const [openId, setOpenId] = useState(items[0]?.id ?? null)

  return (
    <div className="rounded-[28px] border border-velmora-sand/70 bg-white/70 shadow-velmora-soft">
      {items.map((item, index) => {
        const isOpen = openId === item.id
        return (
          <div key={item.id} className={index > 0 ? 'border-t border-velmora-sand/70' : ''}>
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-velmora-ink">
                {item.title}
              </span>
              <ChevronDown
                className={`h-5 w-5 text-velmora-mocha transition duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                strokeWidth={1.7}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-7 text-velmora-mocha sm:px-6 sm:text-base">
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
