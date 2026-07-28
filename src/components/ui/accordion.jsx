import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const AccordionContext = React.createContext({})

const Accordion = ({ children, type = "single", collapsible = false, ...props }) => {
  const [openItems, setOpenItems] = React.useState([])

  const toggleItem = (value) => {
    setOpenItems((current) => {
      if (type === "single") {
        return collapsible && current.includes(value) ? [] : [value]
      }
      return current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]
    })
  }

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div {...props}>{children}</div>
    </AccordionContext.Provider>
  )
}

const AccordionItemContext = React.createContext({})

const AccordionItem = ({ value, children, className, ...props }) => {
  const { openItems } = React.useContext(AccordionContext)
  const isOpen = openItems.includes(value)

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div className={cn("border-b border-slate-200", className)} {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
}

const AccordionTrigger = ({ children, className, ...props }) => {
  const { toggleItem } = React.useContext(AccordionContext)
  const { value, isOpen } = React.useContext(AccordionItemContext)

  return (
    <button
      type="button"
      onClick={() => toggleItem(value)}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")}
      />
    </button>
  )
}

const AccordionContent = ({ children, className, ...props }) => {
  const { isOpen } = React.useContext(AccordionItemContext)

  return (
    <div
      className={cn(
        "overflow-hidden text-sm transition-all",
        isOpen ? "max-h-96" : "max-h-0"
      )}
      {...props}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
