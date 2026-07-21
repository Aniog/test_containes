import { ChevronDown } from 'lucide-react'

export default function AccordionItem({ title, children, open, onToggle }) {
  return (
    <div className="border-b border-velmora-espresso/10">
      <button
        type="button"
        className="flex w-full items-center justify-between py-5 text-left font-sansBody text-xs font-bold uppercase tracking-nav text-velmora-obsidian transition-colors hover:text-velmora-bronze"
        onClick={onToggle}
        aria-expanded={open}
      >
        {title}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
          strokeWidth={1.5}
        />
      </button>
      {open && (
        <div className="pb-5 font-sansBody text-sm leading-7 text-velmora-muted">
          {children}
        </div>
      )}
    </div>
  )
}
