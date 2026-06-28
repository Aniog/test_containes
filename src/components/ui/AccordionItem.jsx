import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-velmora-line py-5">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="text-sm uppercase tracking-product text-velmora-ink">{title}</span>
        <ChevronDown
          className={cn('h-4 w-4 text-velmora-taupe transition duration-300', open && 'rotate-180')}
        />
      </button>
      {open && <div className="pt-4 text-sm leading-7 text-velmora-taupe">{children}</div>}
    </div>
  )
}
