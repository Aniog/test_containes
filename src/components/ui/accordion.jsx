import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const AccordionContext = React.createContext(null)

function useAccordion() {
  const context = React.useContext(AccordionContext)
  if (!context) throw new Error("Accordion parts must be inside <Accordion>")
  return context
}

function Accordion({ children, type = "single", collapsible = true, defaultValue, className }) {
  const [openItems, setOpenItems] = React.useState(
    defaultValue ? (Array.isArray(defaultValue) ? defaultValue : [defaultValue]) : []
  )

  const toggle = React.useCallback(
    (value) => {
      setOpenItems((prev) => {
        if (type === "single") {
          if (prev.includes(value) && collapsible) return []
          return [value]
        }
        if (prev.includes(value)) return prev.filter((v) => v !== value)
        return [...prev, value]
      })
    },
    [type, collapsible]
  )

  return (
    <AccordionContext.Provider value={{ openItems, toggle }}>
      <div className={cn("w-full", className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

function AccordionItem({ children, value, className }) {
  return (
    <div className={cn("border-b border-hairline", className)}>
      {children}
    </div>
  )
}

function AccordionTrigger({ children, value, className }) {
  const { openItems, toggle } = useAccordion()
  const isOpen = openItems.includes(value)
  return (
    <button
      onClick={() => toggle(value)}
      className={cn(
        "flex w-full items-center justify-between py-4 text-left text-sm font-medium text-primary transition-all hover:text-accent",
        className
      )}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 text-secondary transition-transform duration-300",
          isOpen && "rotate-180"
        )}
      />
    </button>
  )
}

function AccordionContent({ children, value, className }) {
  const { openItems } = useAccordion()
  const isOpen = openItems.includes(value)
  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-300",
        isOpen ? "max-h-96 pb-4" : "max-h-0"
      )}
    >
      <div className={cn("text-sm leading-relaxed text-secondary", className)}>
        {children}
      </div>
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
