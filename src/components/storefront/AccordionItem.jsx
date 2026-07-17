import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function AccordionItem({ title, content, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-brand-line">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center justify-between py-5 text-left text-sm uppercase tracking-[0.22em] text-brand-ink"
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-4 w-4 transition duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid overflow-hidden text-sm leading-7 text-brand-mist transition-all duration-300 ${
          open ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">{content}</div>
      </div>
    </div>
  )
}
