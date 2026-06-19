import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div className="divide-y divide-brand-border">
      {items.map((item, i) => (
        <div key={item.title}>
          <button
            onClick={() => toggle(i)}
            className="w-full flex items-center justify-between py-4 text-left text-sm tracking-widest uppercase text-brand-charcoal hover:text-brand-gold transition-colors"
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
            <p className="text-sm text-brand-stone leading-relaxed">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}