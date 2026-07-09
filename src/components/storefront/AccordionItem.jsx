import { ChevronDown } from 'lucide-react'

const AccordionItem = ({ title, isOpen, onToggle, children }) => (
  <div className="border-b border-champagne/35">
    <button
      type="button"
      onClick={onToggle}
      className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm uppercase tracking-[0.24em] text-espresso transition hover:text-gold"
      aria-expanded={isOpen}
    >
      <span>{title}</span>
      <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`}>
      <div className="overflow-hidden text-sm leading-7 text-ink-soft">{children}</div>
    </div>
  </div>
)

export default AccordionItem
