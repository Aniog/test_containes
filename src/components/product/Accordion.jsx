import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="border-y border-velmora-sand text-velmora-ink">
      {items.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <div key={item.title} className="border-b border-velmora-sand last:border-b-0">
            <button
              type="button"
              className="flex w-full items-center justify-between bg-transparent px-0 py-5 text-left text-xs font-bold uppercase tracking-nav text-velmora-ink"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              {item.title}
              <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
              <p className="pb-5 text-sm leading-7 text-velmora-clay">
                {item.content}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
