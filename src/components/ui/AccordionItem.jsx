import { ChevronDown } from 'lucide-react'

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border-b border-[color:var(--color-border)] py-5">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-sm uppercase tracking-[0.24em] text-[var(--color-foreground)]">{title}</span>
        <ChevronDown
          className={`h-4 w-4 text-[var(--color-muted)] transition ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          isOpen ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)]">{children}</p>
        </div>
      </div>
    </div>
  )
}

export default AccordionItem
