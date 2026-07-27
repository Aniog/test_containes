import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

const AccordionContext = React.createContext({})

const Accordion = ({ children, type = 'single', collapsible = true, defaultValue, ...props }) => {
  const [openItem, setOpenItem] = useState(defaultValue || null)

  const toggle = (value) => {
    setOpenItem((current) => (current === value && collapsible ? null : value))
  }

  return (
    <AccordionContext.Provider value={{ openItem, toggle }}>
      <div {...props}>{children}</div>
    </AccordionContext.Provider>
  )
}

const AccordionItem = ({ value, children, className }) => {
  return <div className={cn('border-b border-slate-200', className)}>{children}</div>
}

const AccordionTrigger = ({ children, value, className }) => {
  const { openItem, toggle } = React.useContext(AccordionContext)
  const isOpen = openItem === value

  return (
    <button
      type="button"
      onClick={() => toggle(value)}
      className={cn('flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline', className)}
    >
      {children}
      <ChevronDown className={cn('h-4 w-4 shrink-0 transition-transform duration-200', isOpen && 'rotate-180')} />
    </button>
  )
}

const AccordionContent = ({ children, value, className }) => {
  const { openItem } = React.useContext(AccordionContext)
  const isOpen = openItem === value

  return (
    <div
      className={cn(
        'overflow-hidden text-sm transition-all',
        isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
      )}
    >
      <div className={cn('pb-4 pt-0', className)}>{children}</div>
    </div>
  )
}

Accordion.displayName = 'Accordion'
AccordionItem.displayName = 'AccordionItem'
AccordionTrigger.displayName = 'AccordionTrigger'
AccordionContent.displayName = 'AccordionContent'

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
