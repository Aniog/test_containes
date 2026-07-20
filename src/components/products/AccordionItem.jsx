import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-velmora-sand/70">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between bg-transparent py-5 text-left text-sm font-semibold uppercase tracking-ui text-velmora-ink transition hover:text-velmora-bronze"
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="pb-5 text-sm leading-7 text-velmora-bronze">{children}</div>}
    </div>
  )
}
