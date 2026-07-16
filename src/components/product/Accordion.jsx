import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="divide-y divide-midnight-200/60">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex items-center justify-between w-full py-4 text-left font-sans text-sm uppercase tracking-wider text-midnight-800 hover:text-midnight-950 transition-colors"
          >
            {item.title}
            <ChevronDown
              className={`w-4 h-4 text-midnight-400 transition-transform duration-300 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? 'max-h-96 pb-4' : 'max-h-0'
            }`}
          >
            <p className="text-sm text-midnight-600 font-sans leading-relaxed">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}