import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function AccordionItem({ title, content, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-velmora-line/30 py-5">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-sm uppercase tracking-[0.24em] text-velmora-espresso">
          {title}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-velmora-gold transition duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open ? (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-velmora-espresso/72 sm:text-base">
          {content}
        </p>
      ) : null}
    </div>
  )
}
