import { ChevronDown } from 'lucide-react'

const ProductAccordion = ({ sections, openSection, setOpenSection }) => (
  <div className="mt-10 divide-y divide-stone-200 border-y border-stone-200 bg-white">
    {sections.map((section) => {
      const isOpen = openSection === section.id

      return (
        <div key={section.id}>
          <button
            className="flex w-full items-center justify-between gap-4 py-5 text-left"
            type="button"
            onClick={() => setOpenSection(isOpen ? null : section.id)}
          >
            <span className="text-sm uppercase tracking-[0.28em] text-stone-800">
              {section.label}
            </span>
            <ChevronDown
              className={`h-4 w-4 text-stone-500 transition duration-300 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
          {isOpen ? (
            <p className="pb-5 pr-6 text-sm leading-7 text-stone-600">
              {section.content}
            </p>
          ) : null}
        </div>
      )
    })}
  </div>
)

export default ProductAccordion
