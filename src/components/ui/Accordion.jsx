import * as React from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

export function Accordion({ type = 'single', collapsible = false, defaultValue, children }) {
  const [openItems, setOpenItems] = React.useState(() =>
    defaultValue ? (Array.isArray(defaultValue) ? defaultValue : [defaultValue]) : []
  )

  const toggle = (value) => {
    setOpenItems((current) => {
      if (type === 'single') {
        if (collapsible && current.includes(value)) return []
        return [value]
      }
      if (current.includes(value)) return current.filter((v) => v !== value)
      return [...current, value]
    })
  }

  return (
    <div className="divide-y divide-border border-t border-border">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          isOpen: openItems.includes(child.props.value),
          onToggle: () => toggle(child.props.value),
        })
      )}
    </div>
  )
}

export function AccordionItem({ children, value, isOpen, onToggle }) {
  return (
    <div className="py-0">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { isOpen, onToggle })
      )}
    </div>
  )
}

export function AccordionTrigger({ children, isOpen, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-foreground transition-colors hover:text-accent"
    >
      {children}
      <ChevronDown
        className={cn('h-4 w-4 text-muted-foreground transition-transform duration-200', isOpen && 'rotate-180')}
      />
    </button>
  )
}

export function AccordionContent({ children, isOpen }) {
  return (
    <div
      className={cn(
        'overflow-hidden text-sm text-muted-foreground transition-all duration-200',
        isOpen ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 opacity-0'
      )}
    >
      {children}
    </div>
  )
}
