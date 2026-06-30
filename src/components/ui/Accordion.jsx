import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="border-t border-velmora-hairline">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={index} className="border-b border-velmora-hairline">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between py-4 text-left group"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg md:text-xl text-velmora-deep">
                {item.title}
              </span>
              <span className="text-velmora-taupe group-hover:text-velmora-gold transition-colors">
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="text-velmora-taupe leading-relaxed text-sm md:text-base">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
