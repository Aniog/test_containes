import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const ProductAccordion = ({ sections }) => {
  const [open, setOpen] = useState(sections[0]?.title)

  return (
    <div className="mt-10 border-t border-velmora-line text-velmora-ink">
      {sections.map((section) => {
        const isOpen = open === section.title
        return (
          <div key={section.title} className="border-b border-velmora-line">
            <button
              className="flex w-full items-center justify-between bg-transparent px-0 py-5 text-left font-sans text-xs font-bold uppercase tracking-widest text-velmora-ink hover:text-velmora-gold-deep"
              onClick={() => setOpen(isOpen ? '' : section.title)}
              aria-expanded={isOpen}
            >
              {section.title}
              <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <p className="pb-6 font-sans text-sm leading-7 text-velmora-taupe">{section.content}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProductAccordion
