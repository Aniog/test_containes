import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="border-t border-velmora-border">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.title} className="border-b border-velmora-border">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-velmora-text-dark">
                {item.title}
              </span>
              {isOpen ? <Minus size={16} /> : <Plus size={16} />}
            </button>
            {isOpen && (
              <div className="pb-5 text-sm leading-relaxed text-velmora-text-muted">
                {item.content}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
