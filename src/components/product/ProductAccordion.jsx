import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const ProductAccordion = ({ items }) => {
  const [openId, setOpenId] = useState(items[0]?.id)

  return (
    <div className="rounded-[2rem] border border-velmora-line bg-white/60 shadow-soft">
      {items.map((item, index) => {
        const open = openId === item.id

        return (
          <div key={item.id} className={index < items.length - 1 ? 'border-b border-velmora-line' : ''}>
            <button
              type="button"
              onClick={() => setOpenId(open ? null : item.id)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-sm uppercase tracking-[0.28em] text-velmora-ink sm:px-6"
            >
              <span>{item.title}</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
            </button>
            <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-7 text-velmora-muted sm:px-6 sm:pb-6">
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
