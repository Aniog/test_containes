import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function AccordionItem({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-velmora-champagne/80 text-velmora-ink">
      <button
        type="button"
        className="flex w-full items-center justify-between py-5 text-left font-sans text-xs font-semibold uppercase tracking-[0.22em] text-velmora-ink transition hover:text-velmora-bronze"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <div className="pb-6 font-sans text-sm leading-7 text-velmora-cocoa">{children}</div>}
    </div>
  )
}
