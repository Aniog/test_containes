import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="border-t border-warm">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.title} className="border-b border-warm">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="w-full flex items-center justify-between py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-xs uppercase tracking-[0.14em] font-semibold text-espresso">
                {item.title}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-espresso transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96 pb-5' : 'max-h-0'
              }`}
            >
              <p className="text-sm text-stone leading-relaxed">{item.content}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
