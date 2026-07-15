import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const Accordion = ({ children, defaultValue, type = "single", collapsible = true }) => {
  const [open, setOpen] = React.useState(defaultValue || null)
  const toggle = (value) => {
    if (type === "single") {
      setOpen(open === value ? (collapsible ? null : open) : value)
    }
  }
  return (
    <AccordionContext.Provider value={{ open, toggle }}>
      <div className="w-full">{children}</div>
    </AccordionContext.Provider>
  )
}

const AccordionContext = React.createContext({})

const AccordionItem = React.forwardRef(({ className, value, children, ...props }, ref) => {
  const { open } = React.useContext(AccordionContext)
  const isOpen = open === value
  return (
    <div ref={ref} className={cn("border-b border-[#E2D9CF]", className)} {...props}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? React.cloneElement(child, { value, isOpen }) : child
      )}
    </div>
  )
})
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, value, isOpen, ...props }, ref) => {
  const { toggle } = React.useContext(AccordionContext)
  return (
    <button
      ref={ref}
      type="button"
      onClick={() => toggle(value)}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left w-full",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className={cn("h-4 w-4 shrink-0 text-[#8A7E72] transition-transform duration-200", isOpen && "rotate-180")} />
    </button>
  )
})
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef(({ className, children, isOpen, ...props }, ref) => {
  const contentRef = React.useRef(null)
  const [height, setHeight] = React.useState(0)

  React.useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    }
  }, [children])

  return (
    <div
      ref={ref}
      className="overflow-hidden transition-all duration-300 ease-in-out"
      style={{ maxHeight: isOpen ? height : 0, opacity: isOpen ? 1 : 0 }}
      {...props}
    >
      <div ref={contentRef} className={cn("pb-4 pt-0 text-sm text-[#5C534A]", className)}>
        {children}
      </div>
    </div>
  )
})
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
