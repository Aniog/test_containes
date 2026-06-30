import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-brand-border">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm uppercase tracking-[0.28em] text-brand-ink transition hover:text-brand-gold-deep"
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen ? (
        <div className="pb-5 text-base leading-7 text-brand-muted">{children}</div>
      ) : null}
    </div>
  )
}

export default AccordionItem
