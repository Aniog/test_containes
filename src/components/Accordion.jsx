import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="border-t border-espresso-200/50">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.title} className="border-b border-espresso-200/50">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-xs uppercase tracking-widest2 text-espresso-800">
                {item.title}
              </span>
              {isOpen ? (
                <Minus className="w-4 h-4 text-espresso-700" />
              ) : (
                <Plus className="w-4 h-4 text-espresso-700" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96 pb-6' : 'max-h-0'
              }`}
            >
              <p className="text-sm text-espresso-700 leading-relaxed pr-8">{item.content}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
