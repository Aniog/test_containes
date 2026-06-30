import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function AccordionItem({ title, content, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-velmora-line py-5">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-sm uppercase tracking-[0.28em] text-velmora-espresso">
          {title}
        </span>
        <ChevronDown
          className={cn(
            'h-4 w-4 text-velmora-ink/60 transition-transform',
            isOpen && 'rotate-180',
          )}
        />
      </button>
      {isOpen ? (
        <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-ink/72">
          {content}
        </p>
      ) : null}
    </div>
  )
}
