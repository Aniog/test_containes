import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const AccordionItem = ({ value, children, className, ...props }) => (
  <div className={cn("border-b border-borderwarm", className)} {...props}>
    {children}
  </div>
)

const AccordionTrigger = ({ children, onClick, isOpen, className, ...props }) => (
  <button
    className={cn(
      "flex w-full items-center justify-between py-4 font-sans text-sm uppercase tracking-cta text-charcoal hover:text-gold transition-colors duration-300",
      className
    )}
    onClick={onClick}
    {...props}
  >
    {children}
    <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", isOpen && "rotate-180")} />
  </button>
)

const AccordionContent = ({ isOpen, children, className, ...props }) => (
  <div
    className={cn(
      "overflow-hidden transition-all duration-300",
      isOpen ? "max-h-96 pb-4" : "max-h-0",
      className
    )}
    {...props}
  >
    <div className="text-sm font-sans text-warmgray leading-relaxed">
      {children}
    </div>
  </div>
)

const Accordion = ({ items, className, ...props }) => {
  const [openItems, setOpenItems] = React.useState({})

  const toggle = (value) => {
    setOpenItems(prev => ({ ...prev, [value]: !prev[value] }))
  }

  return (
    <div className={cn("w-full", className)} {...props}>
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger onClick={() => toggle(item.value)} isOpen={openItems[item.value]}>
            {item.title}
          </AccordionTrigger>
          <AccordionContent isOpen={openItems[item.value]}>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
