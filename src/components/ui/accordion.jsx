import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const AccordionContext = React.createContext(null)

function Accordion({ children, defaultOpen, type = "single", className }) {
  const [open, setOpen] = React.useState(
    type === "single" ? (defaultOpen ?? null) : (defaultOpen ?? [])
  )

  const toggle = (id) => {
    if (type === "single") {
      setOpen((current) => (current === id ? null : id))
    } else {
      setOpen((current) =>
        current.includes(id) ? current.filter((i) => i !== id) : [...current, id]
      )
    }
  }

  const isOpen = (id) => (type === "single" ? open === id : open.includes(id))

  return (
    <AccordionContext.Provider value={{ toggle, isOpen }}>
      <div className={cn("divide-y divide-sand border-y border-sand", className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

function AccordionItem({ children, value, className }) {
  const ctx = React.useContext(AccordionContext)
  const open = ctx?.isOpen(value)

  return (
    <div className={cn("", className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { value, open })
          : child
      )}
    </div>
  )
}

const AccordionTrigger = React.forwardRef(({ children, className, value, open, ...props }, ref) => {
  const ctx = React.useContext(AccordionContext)
  return (
    <button
      type="button"
      ref={ref}
      onClick={() => ctx?.toggle(value)}
      className={cn(
        "flex w-full items-center justify-between py-4 text-left font-serif text-base text-espresso transition-colors hover:text-gold",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn("h-4 w-4 text-taupe transition-transform duration-300", open && "rotate-180")}
      />
    </button>
  )
})
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef(({ children, className, open, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden transition-all duration-300",
        open ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
      )}
      {...props}
    >
      <div className={cn("text-sm font-sans leading-relaxed text-taupe", className)}>
        {children}
      </div>
    </div>
  )
})
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
