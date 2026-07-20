import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-velmora-line py-5">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="text-sm font-medium uppercase tracking-eyebrow text-velmora-ink">
          {title}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-velmora-muted transition duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen ? <div className="pt-4 text-sm leading-7 text-velmora-muted">{children}</div> : null}
    </div>
  )
}

export default AccordionItem
