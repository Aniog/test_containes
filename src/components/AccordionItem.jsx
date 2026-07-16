import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-velmora-sand/60 text-velmora-ink">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between bg-transparent py-5 text-left text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink"
        aria-expanded={open}
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="pb-5 text-sm leading-7 text-velmora-espresso/75">{children}</div>}
    </div>
  )
}
