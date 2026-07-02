import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ items }) {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <div className="divide-y divide-taupe">
      {items.map((item, idx) => (
        <div key={idx}>
          <button
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            className="w-full flex items-center justify-between py-4 text-left transition-colors hover:text-gold"
          >
            <span className="text-sm tracking-[0.15em] uppercase font-medium">{item.title}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                openIdx === idx ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIdx === idx ? 'max-h-96 pb-4' : 'max-h-0'
            }`}
          >
            <p className="text-sm text-secondary leading-relaxed">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}