import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const AccordionContext = React.createContext(null)

function useAccordion() {
  const context = React.useContext(AccordionContext)
  if (!context) throw new Error("useAccordion must be used within an Accordion")
  return context
}

const Accordion = ({ children, defaultValue = null, type = "single", className }) => {
  const [open, setOpen] = React.useState(
    type === "single" ? defaultValue : defaultValue || []
  )

  const toggle = (value) => {
    if (type === "single") {
      setOpen(open === value ? null : value)
    } else {
      setOpen((prev) =>
        prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
      )
    }
  }

  return (
    <AccordionContext.Provider value={{ open, toggle }}>
      <div className={cn("divide-y divide-border rounded-xl border border-border bg-white overflow-hidden", className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

const AccordionItem = ({ children, value, className }) => {
  return (
    <div className={cn("", className)} data-value={value}>
      {children}
    </div>
  )
}

const AccordionTrigger = ({ children, value, className }) => {
  const { open, toggle } = useAccordion()
  const isOpen = Array.isArray(open) ? open.includes(value) : open === value

  return (
    <button
      type="button"
      onClick={() => toggle(value)}
      className={cn(
        "flex w-full items-center justify-between px-6 py-4 text-left text-base font-semibold text-foreground transition-colors hover:bg-background/50 focus:outline-none",
        className
      )}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-5 w-5 shrink-0 text-muted transition-transform duration-200",
          isOpen && "rotate-180"
        )}
      />
    </button>
  )
}

const AccordionContent = ({ children, value, className }) => {
  const { open } = useAccordion()
  const isOpen = Array.isArray(open) ? open.includes(value) : open === value

  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-200",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}
    >
      <div className={cn("px-6 pb-5 text-muted", className)}>{children}</div>
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
