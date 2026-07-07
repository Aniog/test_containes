import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="border-t border-espresso/10">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.title} className="border-b border-espresso/10">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-base md:text-lg text-espresso">
                {item.title}
              </span>
              <ChevronDown
                size={18}
                strokeWidth={1.5}
                className={`text-gold transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-sm text-charcoal/80 font-sans font-light leading-relaxed">
                {item.content}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
