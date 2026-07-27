import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const Accordion = ({ children, defaultValue, className }) => {
  const [open, setOpen] = React.useState(defaultValue || [])
  const toggle = (value) => {
    setOpen((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }
  return (
    <div className={cn("space-y-2", className)}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { open, toggle })
      )}
    </div>
  )
}

const AccordionItem = ({ value, children, open, toggle }) => {
  const isOpen = open?.includes(value)
  return (
    <div className="rounded-lg border bg-card text-card-foreground overflow-hidden">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { value, isOpen, toggle })
      )}
    </div>
  )
}

const AccordionTrigger = ({ children, value, isOpen, toggle, className }) => (
  <button
    type="button"
    onClick={() => toggle(value)}
    className={cn(
      "flex w-full items-center justify-between p-4 text-left font-medium transition-all hover:bg-muted/50",
      className
    )}
  >
    {children}
    <ChevronDown
      className={cn("h-4 w-4 shrink-0 text-muted-foreground transition-transform", isOpen && "rotate-180")}
    />
  </button>
)

const AccordionContent = ({ children, isOpen, className }) => (
  <div
    className={cn(
      "overflow-hidden transition-all",
      isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
    )}
  >
    <div className={cn("p-4 pt-0 text-muted-foreground", className)}>{children}</div>
  </div>
)

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
