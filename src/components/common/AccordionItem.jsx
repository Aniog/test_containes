import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b hairline-divider">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="text-sm font-semibold uppercase tracking-luxe text-velmora-noir">
          {title}
        </span>
        <ChevronDown className={cn('h-4 w-4 text-velmora-espresso transition', open && 'rotate-180')} />
      </button>
      {open ? (
        <div className="pb-5 text-sm leading-7 text-velmora-espresso/80">{children}</div>
      ) : null}
    </div>
  )
}
