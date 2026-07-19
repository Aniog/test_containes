import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="border-t border-stone">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={index} className="border-b border-stone">
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between py-4 text-left group"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg text-espresso">
                {item.title}
              </span>
              <span className="text-taupe group-hover:text-gold transition-colors">
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96 pb-5' : 'max-h-0'
              }`}
            >
              <p className="text-taupe leading-relaxed text-sm md:text-base">
                {item.content}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
