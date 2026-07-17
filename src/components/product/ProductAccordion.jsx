import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const ProductAccordion = ({ sections }) => {
  const [open, setOpen] = useState(sections[0]?.title)

  return (
    <div className="rounded-[2rem] border border-velvet-200/70 bg-cream-100 shadow-editorial">
      {sections.map((section, index) => (
        <div key={section.title} className={index === 0 ? '' : 'border-t border-velvet-200/70'}>
          <button
            type="button"
            onClick={() => setOpen(open === section.title ? '' : section.title)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-velvet-950">
              {section.title}
            </span>
            <ChevronDown
              className={`h-5 w-5 text-velvet-700 transition ${open === section.title ? 'rotate-180' : ''}`}
              strokeWidth={1.5}
            />
          </button>
          {open === section.title ? (
            <div className="px-6 pb-6 text-sm leading-7 text-velvet-700">{section.content}</div>
          ) : null}
        </div>
      ))}
    </div>
  )
}

export default ProductAccordion
