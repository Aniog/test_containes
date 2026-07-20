import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const AccordionContext = React.createContext({})

const Accordion = ({ children, defaultValue, className }) => {
  const [open, setOpen] = useState(defaultValue || null)
  return (
    <AccordionContext.Provider value={{ open, setOpen }}>
      <div className={cn('divide-y divide-brand-line', className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

const AccordionItem = ({ value, children, className }) => {
  const { open, setOpen } = React.useContext(AccordionContext)
  const isOpen = open === value
  return (
    <div className={cn('', className)}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { isOpen, onToggle: () => setOpen(isOpen ? null : value) })
      )}
    </div>
  )
}

const AccordionTrigger = ({ isOpen, onToggle, children, className }) => (
  <button
    onClick={onToggle}
    className={cn('flex w-full items-center justify-between py-4 text-left font-medium text-brand-ink', className)}
  >
    <span className="font-serif text-lg">{children}</span>
    <ChevronDown className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-180')} />
  </button>
)

const AccordionContent = ({ isOpen, children, className }) => (
  <div
    className={cn(
      'overflow-hidden text-sm text-brand-muted transition-all',
      isOpen ? 'max-h-40 opacity-100 pb-4' : 'max-h-0 opacity-0'
    )}
  >
    <div className={cn(className)}>{children}</div>
  </div>
)

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
