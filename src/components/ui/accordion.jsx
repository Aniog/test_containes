import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const AccordionContext = React.createContext(null)

const Accordion = ({ children, defaultValue, type = "single", className }) => {
  const [openItems, setOpenItems] = React.useState(
    defaultValue ? (Array.isArray(defaultValue) ? defaultValue : [defaultValue]) : []
  )

  const toggle = React.useCallback((value) => {
    if (type === "single") {
      setOpenItems((prev) => (prev.includes(value) ? [] : [value]))
    } else {
      setOpenItems((prev) =>
        prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
      )
    }
  }, [type])

  return (
    <AccordionContext.Provider value={{ openItems, toggle }}>
      <div className={cn("divide-y divide-[#E8E0D5]", className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

const useAccordion = () => {
  const context = React.useContext(AccordionContext)
  if (!context) throw new Error("AccordionItem must be used within Accordion")
  return context
}

const AccordionItem = ({ children, value, className }) => {
  void value
  return <div className={cn("", className)}>{children}</div>
}

const AccordionTrigger = ({ children, value, className }) => {
  const { openItems, toggle } = useAccordion()
  const isOpen = openItems.includes(value)

  return (
    <button
      onClick={() => toggle(value)}
      className={cn(
        "flex w-full items-center justify-between py-4 text-left text-sm font-medium uppercase tracking-[0.1em] text-[#1C1A17] transition-colors hover:text-[#BFA15A]",
        className
      )}
    >
      {children}
      <ChevronDown
        className={cn("h-4 w-4 text-[#8C8276] transition-transform duration-300", isOpen && "rotate-180")}
      />
    </button>
  )
}

const AccordionContent = ({ children, value, className }) => {
  void className
  const { openItems } = useAccordion()
  const isOpen = openItems.includes(value)
  const ref = React.useRef(null)

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden text-sm leading-relaxed text-[#8C8276] transition-all duration-300",
        isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
      )}
    >
      {children}
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
