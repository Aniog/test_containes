import React, { useState, useId } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const AccordionItem = React.forwardRef(function AccordionItem(
  { question, answer, defaultOpen = false, className },
  ref
) {
  const [open, setOpen] = useState(defaultOpen)
  const id = useId()
  return (
    <div
      ref={ref}
      className={cn(
        'border-b border-line last:border-b-0',
        className
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        id={`${id}-trigger`}
        className="flex w-full items-center justify-between gap-6 py-6 text-left text-ink transition-colors hover:text-accent-strong"
      >
        <span className="font-display text-lg md:text-xl text-balance">{question}</span>
        <ChevronDown
          className={cn(
            'h-5 w-5 shrink-0 text-muted transition-transform duration-300',
            open && 'rotate-180 text-accent'
          )}
        />
      </button>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        className={cn(
          'grid overflow-hidden transition-all duration-300 ease-out',
          open ? 'grid-rows-[1fr] pb-6 opacity-100' : 'grid-rows-[0fr] opacity-0'
        )}
      >
        <div className="min-h-0">
          <p className="text-[15px] leading-relaxed text-muted text-balance">{answer}</p>
        </div>
      </div>
    </div>
  )
})

const Accordion = React.forwardRef(function Accordion(
  { items = [], className, itemClassName },
  ref
) {
  return (
    <div ref={ref} className={cn('border-t border-line', className)}>
      {items.map((item, idx) => (
        <AccordionItem
          key={item.question || idx}
          question={item.question}
          answer={item.answer}
          defaultOpen={item.defaultOpen}
          className={itemClassName}
        />
      ))}
    </div>
  )
})

export { Accordion, AccordionItem }
export default Accordion
