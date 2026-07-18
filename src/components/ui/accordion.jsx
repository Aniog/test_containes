import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const Accordion = ({ children, className }) => {
  return <div className={cn("divide-y divide-[#EDE8E0]", className)}>{children}</div>
}

const AccordionItem = ({ children, value, className }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  
  return (
    <div className={cn("border-b border-[#EDE8E0]", className)}>
      {React.Children.map(children, child => 
        React.isValidElement(child) 
          ? React.cloneElement(child, { isOpen, setIsOpen })
          : child
      )}
    </div>
  )
}

const AccordionTrigger = ({ children, isOpen, setIsOpen, className }) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        "flex w-full items-center justify-between py-4 text-left text-sm font-medium text-[#2C2825] hover:text-[#A68B5B] transition-colors",
        className
      )}
    >
      {children}
      <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")} />
    </button>
  )
}

const AccordionContent = ({ children, isOpen, className }) => {
  if (!isOpen) return null
  return (
    <div className={cn("pb-4 text-sm text-[#5C5651] leading-relaxed", className)}>
      {children}
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
