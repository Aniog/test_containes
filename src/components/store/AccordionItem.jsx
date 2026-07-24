import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-velmora-line/80 py-5">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left text-sm uppercase tracking-[0.24em] text-velmora-ivory transition hover:text-velmora-gold"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen ? (
        <div className="pt-4 text-sm leading-7 text-velmora-taupe">{children}</div>
      ) : null}
    </div>
  )
}

export default AccordionItem
