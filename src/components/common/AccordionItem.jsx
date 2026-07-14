import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-velmora-line">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-medium uppercase tracking-[0.24em] text-velmora-ink"
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-5 w-5 text-velmora-muted transition duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open ? (
        <div className="pb-5 pr-8 text-sm leading-7 text-velmora-muted">{children}</div>
      ) : null}
    </div>
  )
}

export default AccordionItem
