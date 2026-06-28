import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function AccordionItem({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-stone-200 last:border-b-0">
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm uppercase tracking-[0.22em] text-stone-900"
      >
        <span>{title}</span>
        <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen ? (
        <div className="pb-5 text-sm leading-7 text-stone-600">{children}</div>
      ) : null}
    </div>
  )
}
