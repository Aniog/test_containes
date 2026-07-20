import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const AccordionContext = React.createContext(null)

const Accordion = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("divide-y divide-dark-100", className)} {...props}>
      {children}
    </div>
  )
})
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef(({ className, children, defaultOpen, ...props }, ref) => {
  const [open, setOpen] = React.useState(defaultOpen || false)
  return (
    <AccordionContext.Provider value={{ open, setOpen }}>
      <div ref={ref} className={cn("py-4", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
})
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => {
  const { open, setOpen } = React.useContext(AccordionContext)
  return (
    <button
      ref={ref}
      onClick={() => setOpen(!open)}
      className={cn(
        "flex w-full items-center justify-between py-2 text-left text-sm font-medium text-dark-900 tracking-wider uppercase transition-colors hover:text-gold-600",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className={cn(
        "h-4 w-4 transition-transform duration-200",
        open && "rotate-180"
      )} />
    </button>
  )
})
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => {
  const { open } = React.useContext(AccordionContext)
  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden transition-all duration-300",
        open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}
      {...props}
    >
      <div className={cn("pb-2 pt-2 text-sm text-dark-500 leading-relaxed", className)}>
        {children}
      </div>
    </div>
  )
})
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }