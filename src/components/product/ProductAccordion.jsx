import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const ProductAccordion = ({ sections }) => {
  const [open, setOpen] = useState(sections[0]?.title)

  return (
    <div className="border-t border-velmora-espresso/10 text-velmora-ink">
      {sections.map((section) => {
        const isOpen = open === section.title
        return (
          <div key={section.title} className="border-b border-velmora-espresso/10">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? '' : section.title)}
              className="flex w-full items-center justify-between py-5 text-left text-xs font-extrabold uppercase tracking-luxe text-velmora-ink transition hover:text-velmora-bronze focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
              aria-expanded={isOpen}
            >
              {section.title}
              <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && <p className="pb-5 text-sm leading-7 text-velmora-espresso/74">{section.content}</p>}
          </div>
        )
      })}
    </div>
  )
}

export default ProductAccordion
