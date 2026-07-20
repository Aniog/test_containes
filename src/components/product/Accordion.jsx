import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ items }) {
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
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="font-sans text-xs uppercase tracking-[0.15em] font-semibold text-velmora-text">
                {item.title}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-velmora-muted transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96 pb-5' : 'max-h-0'
              }`}
            >
              <div className="text-sm text-velmora-muted leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
