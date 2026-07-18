import { ChevronDown } from 'lucide-react'

export default function AccordionItem({ title, children, isOpen, onToggle }) {
  return (
    <div className="border-b border-velmora-linen">
      <button
        type="button"
        className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-nav text-velmora-ink"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {title}
        <ChevronDown className={`h-4 w-4 text-velmora-gold transition ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <div className="pb-6 text-sm leading-7 text-velmora-cocoa">{children}</div>}
    </div>
  )
}
