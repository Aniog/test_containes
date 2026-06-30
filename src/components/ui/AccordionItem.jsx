import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils.js'

export default function AccordionItem({
  content,
  defaultOpen = false,
  title,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-white/10 py-5">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={() => setIsOpen((currentValue) => !currentValue)}
      >
        <span className="text-sm uppercase tracking-[0.24em] text-stone-100">{title}</span>
        <ChevronDown className={cn('h-4 w-4 text-stone-400 transition-transform duration-300', isOpen && 'rotate-180')} />
      </button>
      {isOpen ? <p className="pt-4 text-sm leading-7 text-stone-300">{content}</p> : null}
    </div>
  )
}
