import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="border-t border-velmora-hairline">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.title} className="border-b border-velmora-hairline">
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="w-full flex items-center justify-between py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-sans text-xs uppercase tracking-[0.16em] text-velmora-ink font-medium">
                {item.title}
              </span>
              <ChevronDown
                size={18}
                className={`text-velmora-ink-muted transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96 pb-5' : 'max-h-0'
              }`}
            >
              <p className="font-sans text-sm text-velmora-ink-muted leading-relaxed">
                {item.content}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
