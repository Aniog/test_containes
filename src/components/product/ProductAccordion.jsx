import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const ProductAccordion = ({ sections }) => {
  const [openSection, setOpenSection] = useState(sections[0]?.title)

  return (
    <div className="divide-y divide-line rounded-[1.75rem] border border-line bg-white shadow-soft">
      {sections.map((section) => {
        const isOpen = openSection === section.title
        return (
          <div key={section.title} className="px-5 py-5 md:px-6">
            <button
              type="button"
              onClick={() => setOpenSection(isOpen ? null : section.title)}
              className="flex w-full items-center justify-between gap-4 border-none bg-transparent px-0 py-0 text-left"
            >
              <span className="text-xs uppercase tracking-[0.28em] text-ink">{section.title}</span>
              <ChevronDown
                className={`h-4 w-4 text-ink transition ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen ? <p className="pt-4 text-sm leading-7 text-muted">{section.content}</p> : null}
          </div>
        )
      })}
    </div>
  )
}

export default ProductAccordion
