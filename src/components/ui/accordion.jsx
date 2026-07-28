import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const AccordionContext = React.createContext(null)

function useAccordion() {
  const context = React.useContext(AccordionContext)
  if (!context) throw new Error("Accordion components must be used within an Accordion")
  return context
}

const Accordion = ({ type = "single", collapsible = false, defaultValue, value, onValueChange, children, className }) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue || (type === "single" ? "" : []))
  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue

  const toggle = React.useCallback((itemValue) => {
    let newValue
    if (type === "single") {
      if (currentValue === itemValue) {
        newValue = collapsible ? "" : itemValue
      } else {
        newValue = itemValue
      }
    } else {
      const values = Array.isArray(currentValue) ? currentValue : []
      newValue = values.includes(itemValue)
        ? values.filter((v) => v !== itemValue)
        : [...values, itemValue]
    }
    if (!isControlled) setInternalValue(newValue)
    onValueChange?.(newValue)
  }, [currentValue, type, collapsible, isControlled, onValueChange])

  return (
    <AccordionContext.Provider value={{ value: currentValue, toggle, type }}>
      <div className={cn("space-y-2", className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

const AccordionItem = ({ value, children, className }) => {
  return (
    <div className={cn("border border-gray-200 rounded-lg bg-white overflow-hidden", className)}>
      {children}
    </div>
  )
}

const AccordionTrigger = ({ value, children, className }) => {
  const { value: selectedValue, toggle, type } = useAccordion()
  const isOpen = type === "single" ? selectedValue === value : selectedValue.includes(value)

  return (
    <button
      type="button"
      onClick={() => toggle(value)}
      className={cn(
        "flex w-full items-center justify-between px-5 py-4 text-left font-medium text-gray-900 hover:bg-gray-50 transition-colors",
        className
      )}
    >
      {children}
      <ChevronDown className={cn("h-5 w-5 text-gray-500 transition-transform duration-200", isOpen && "rotate-180")} />
    </button>
  )
}

const AccordionContent = ({ value, children, className }) => {
  const { value: selectedValue, type } = useAccordion()
  const isOpen = type === "single" ? selectedValue === value : selectedValue.includes(value)

  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-200",
        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      )}
    >
      <div className={cn("px-5 pb-4 text-gray-600 text-sm leading-relaxed", className)}>{children}</div>
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
