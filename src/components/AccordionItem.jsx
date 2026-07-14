import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-velmora-taupe/30">
      <button
        type="button"
        className="flex w-full items-center justify-between py-5 text-left text-sm uppercase tracking-[0.28em] text-velmora-espresso transition hover:text-velmora-goldDeep"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen ? (
        <div className="pb-5 pr-6 text-sm leading-7 text-velmora-cacao/80">
          {children}
        </div>
      ) : null}
    </div>
  )
}

export default AccordionItem
