import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const AccordionContext = React.createContext({})

const Accordion = React.forwardRef(({ type = "single", collapsible = true, children, defaultValue, value, onValueChange, ...props }, ref) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue || "")
  const activeValue = value !== undefined ? value : internalValue

  const handleValueChange = (newValue) => {
    if (onValueChange) onValueChange(newValue)
    if (value === undefined) setInternalValue(newValue)
  }

  return React.createElement(
    AccordionContext.Provider,
    { value: { type, collapsible, activeValue, handleValueChange } },
    React.createElement("div", { ref, ...props }, children)
  )
})
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef(({ children, value, ...props }, ref) => {
  return React.createElement("div", { ref, "data-value": value, ...props }, children)
})
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ children, value, className, ...props }, ref) => {
  const context = React.useContext(AccordionContext)
  const isActive = context.activeValue === value

  const handleClick = () => {
    if (isActive && context.collapsible) {
      context.handleValueChange("")
    } else {
      context.handleValueChange(value)
    }
  }

  return React.createElement(
    "button",
    {
      ref,
      onClick: handleClick,
      className: cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline w-full text-left",
        className
      ),
      ...props,
    },
    children,
    React.createElement(ChevronDown, {
      className: cn("h-4 w-4 shrink-0 transition-transform duration-200", isActive && "rotate-180"),
    })
  )
})
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef(({ children, value, className, ...props }, ref) => {
  const context = React.useContext(AccordionContext)
  const isActive = context.activeValue === value

  return React.createElement(
    React.Fragment,
    null,
    isActive && React.createElement(
      "div",
      {
        ref,
        className: cn("overflow-hidden text-sm transition-all", className),
        ...props,
      },
      React.createElement("div", { className: "pb-4 pt-0" }, children)
    )
  )
})
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
