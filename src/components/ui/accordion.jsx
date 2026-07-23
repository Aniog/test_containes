import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const Accordion = ({ children, className }) => (
  <div className={cn("space-y-2", className)}>{children}</div>
)

const AccordionItem = ({ children, className }) => (
  <div className={cn("border-b border-velmora-gold/20", className)}>{children}</div>
)

const AccordionTrigger = ({ children, className, isOpen, onClick }) => (
  <button
    onClick={onClick}
    className={cn(
      "flex w-full items-center justify-between py-4 text-sm font-medium uppercase tracking-widest transition-all hover:text-velmora-gold",
      className
    )}
  >
    {children}
    <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")} />
  </button>
)

const AccordionContent = ({ children, className, isOpen }) => (
  <div
    className={cn(
      "overflow-hidden text-sm transition-all duration-300 ease-in-out",
      isOpen ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"
    )}
  >
    <div className={cn("text-velmora-charcoal/70 leading-relaxed font-sans", className)}>{children}</div>
  </div>
)

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
