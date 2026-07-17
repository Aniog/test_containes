import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const AccordionItem = ({ title, content, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-velmora-line py-5">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-sm uppercase tracking-[0.28em] text-velmora-ink">
          {title}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-velmora-taupe transition ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] pt-4' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl text-sm leading-7 text-velmora-muted">{content}</p>
        </div>
      </div>
    </div>
  )
}

export default AccordionItem
