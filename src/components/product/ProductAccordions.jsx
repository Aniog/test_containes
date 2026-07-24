import { ChevronDown } from 'lucide-react'

const ProductAccordions = ({ sections, openSection, onToggle }) => (
  <div className="divide-y divide-stone-200/10 rounded-[2rem] border border-stone-200/10 bg-stone-900/40">
    {sections.map((section) => {
      const isOpen = openSection === section.id

      return (
        <div key={section.id} className="px-6 py-5">
          <button
            type="button"
            onClick={() => onToggle(section.id)}
            className="flex w-full items-center justify-between gap-4 text-left"
          >
            <span className="text-xs uppercase tracking-[0.28em] text-stone-200">
              {section.label}
            </span>
            <ChevronDown
              className={[
                'h-4 w-4 text-stone-400 transition duration-300',
                isOpen ? 'rotate-180' : '',
              ].join(' ')}
            />
          </button>
          {isOpen ? (
            <p className="pt-4 text-sm leading-7 text-stone-300">{section.content}</p>
          ) : null}
        </div>
      )
    })}
  </div>
)

export default ProductAccordions
