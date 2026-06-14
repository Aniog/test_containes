import * as React from "react"
import { cn } from "@/lib/utils"

const AccordionContext = React.createContext({})

function useAccordion() {
  return React.useContext(AccordionContext)
}

const Accordion = React.forwardRef(({ className, type = "single", collapsible = true, children, ...props }, ref) => {
  const [openItems, setOpenItems] = React.useState({})

  const toggle = (value) => {
    setOpenItems((prev) => ({
      ...prev,
      [value]: type === "single" ? !prev[value] : !prev[value],
    }))
  }

  return (
    <AccordionContext.Provider value={{ openItems, toggle, type, collapsible }}>
      <div ref={ref} className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
})
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef(({ className, value, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("border-b border-slate-200", className)} {...props} />
  )
})
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, value, ...props }, ref) => {
  const { openItems, toggle } = useAccordion()
  const isOpen = openItems[value]

  return (
    <h3 className="flex">
      <button
        ref={ref}
        onClick={() => toggle(value)}
        className={cn(
          "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left",
          className
        )}
        {...props}
      >
        {children}
        <svg
          className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </h3>
  )
})
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef(({ className, children, value, ...props }, ref) => {
  const { openItems } = useAccordion()
  const isOpen = openItems[value]

  return (
    <div
      ref={ref}
      className={cn("overflow-hidden text-sm transition-all", isOpen ? "max-h-96" : "max-h-0")}
      {...props}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </div>
  )
})
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
