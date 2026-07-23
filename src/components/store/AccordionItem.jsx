import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-velmora-mist/30 py-5 text-velmora-noir">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="text-sm font-medium uppercase tracking-[0.18em] text-velmora-noir">
          {title}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-velmora-rosewood transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen ? (
        <div className="pt-4 text-sm leading-7 text-velmora-noir/72">{children}</div>
      ) : null}
    </div>
  )
}

export default AccordionItem
