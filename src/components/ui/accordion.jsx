import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const AccordionContext = React.createContext({})

const Accordion = ({ children, type = "single", collapsible = true, defaultValue, value, onValueChange, className }) => {
  const [openItems, setOpenItems] = React.useState(() => {
    if (defaultValue) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue]
    }
    return []
  })

  const toggleItem = (itemValue) => {
    const newOpen = openItems.includes(itemValue)
      ? openItems.filter(v => v !== itemValue)
      : collapsible ? [itemValue] : [...openItems, itemValue]
    setOpenItems(newOpen)
    onValueChange?.(newOpen)
  }

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={cn("w-full", className)}>
        {React.Children.map(children, child => 
          React.cloneElement(child, { type, collapsible })
        )}
      </div>
    </AccordionContext.Provider>
  )
}

const AccordionItem = ({ value, children, className }) => {
  return (
    <div className={cn("border-b border-[#e7e5e4]", className)}>
      {children}
    </div>
  )
}

const AccordionTrigger = ({ value, children, className }) => {
  const { openItems, toggleItem } = React.useContext(AccordionContext)
  const isOpen = openItems.includes(value)

  return (
    <button
      onClick={() => toggleItem(value)}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline w-full text-left",
        className
      )}
    >
      {children}
      <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")} />
    </button>
  )
}

const AccordionContent = ({ value, children, className }) => {
  const { openItems } = React.useContext(AccordionContext)
  const isOpen = openItems.includes(value)

  return (
    <div
      className={cn(
        "overflow-hidden text-sm transition-all",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}
    >
      <div className={cn("pb-4 pt-0 text-[#57534e]", className)}>
        {children}
      </div>
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
