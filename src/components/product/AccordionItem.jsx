import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-velmora-sand/70 py-5">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="text-sm uppercase tracking-[0.32em] text-velmora-ink">
          {title}
        </span>
        <ChevronDown
          className={cn(
            'h-4 w-4 text-velmora-ink/60 transition-transform duration-300',
            open && 'rotate-180',
          )}
        />
      </button>
      <div className={cn('grid transition-all duration-300', open ? 'grid-rows-[1fr] pt-4' : 'grid-rows-[0fr]')}>
        <div className="overflow-hidden text-sm leading-7 text-velmora-ink/70">
          {children}
        </div>
      </div>
    </div>
  )
}

export default AccordionItem
