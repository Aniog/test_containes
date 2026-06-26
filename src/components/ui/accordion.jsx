import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const Accordion = ({ children, className, ...props }) => {
  return (
    <div className={cn("divide-y divide-[#E2E8F0]", className)} {...props}>
      {children}
    </div>
  )
}

const AccordionItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props}>
    {children}
  </div>
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, isOpen, onClick, ...props }, ref) => (
  <button
    ref={ref}
    onClick={onClick}
    className={cn(
      "flex w-full items-center justify-between py-5 text-left text-base font-medium text-[#0A2540] hover:text-[#2563EB] transition-colors",
      className
    )}
    {...props}
  >
    <span>{children}</span>
    <ChevronDown
      className={cn(
        "h-5 w-5 shrink-0 text-[#64748B] transition-transform duration-200",
        isOpen && "rotate-180"
      )}
    />
  </button>
))
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef(({ className, children, isOpen, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "overflow-hidden text-sm text-[#475569] transition-all",
      isOpen ? "max-h-96 pb-5" : "max-h-0"
    )}
    {...props}
  >
    <div className={className}>{children}</div>
  </div>
))
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
