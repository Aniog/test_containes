import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function AccordionItem({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-line/80 py-5">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-sm font-medium uppercase tracking-button text-ink">{title}</span>
        <ChevronDown className={`h-5 w-5 text-muted transition ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pt-4' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden text-sm leading-7 text-muted">{children}</div>
      </div>
    </div>
  )
}
