import * as React from "react"
import { cn } from "@/lib/utils"

const AccordionContext = React.createContext(null)

function Accordion({ type = "single", collapsible = true, defaultValue, value, onValueChange, children, className }) {
  const [internalValue, setInternalValue] = React.useState(defaultValue || "")
  const activeValue = value ?? internalValue

  const handleValueChange = (newValue) => {
    onValueChange?.(newValue)
    if (value === undefined) {
      setInternalValue(newValue)
    }
  }

  return (
    <AccordionContext.Provider value={{ type, collapsible, activeValue, handleValueChange }}>
      <div className={cn("w-full", className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

function AccordionItem({ value, children, className }) {
  return (
    <div data-value={value} className={cn("border-b border-brand-border", className)}>
      {children}
    </div>
  )
}

function AccordionTrigger({ value, children, className }) {
  const { activeValue, handleValueChange, collapsible } = React.useContext(AccordionContext)
  const isOpen = activeValue === value

  return (
    <button
      type="button"
      onClick={() => {
        if (isOpen && collapsible) {
          handleValueChange("")
        } else {
          handleValueChange(value)
        }
      }}
      className={cn(
        "flex w-full items-center justify-between py-4 text-left font-serif text-lg text-brand-text transition-colors hover:text-brand-gold",
        className
      )}
    >
      {children}
      <svg
        className={cn("h-4 w-4 shrink-0 transition-transform duration-300", isOpen ? "rotate-180" : "rotate-0")}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}

function AccordionContent({ value, children, className }) {
  const { activeValue } = React.useContext(AccordionContext)
  const isOpen = activeValue === value

  return (
    <div
      className={cn(
        "overflow-hidden text-sm text-brand-muted transition-all duration-300",
        isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
      )}
    >
      <div className={cn("pb-4", className)}>{children}</div>
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }