import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="divide-y divide-velvet-border">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between py-4 text-left font-sans text-sm font-medium text-velvet-text hover:text-velvet-gold transition-colors"
          >
            {item.title}
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? 'max-h-96 pb-4' : 'max-h-0'
            }`}
          >
            <p className="text-sm text-velvet-muted font-sans leading-relaxed">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}