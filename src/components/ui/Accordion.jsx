import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const AccordionItem = ({ title, content }) => {
  const [open, setOpen] = useState(title === 'Description')

  return (
    <div className="border-b border-[var(--color-border-subtle)] py-5">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="text-sm uppercase tracking-[0.28em] text-[var(--color-text-primary)]">
          {title}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-[var(--color-accent)] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] pt-4' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl text-sm leading-7 text-[var(--color-text-secondary)]">
            {content}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AccordionItem
