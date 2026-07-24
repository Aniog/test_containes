import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const AccordionContext = React.createContext(null)

function Accordion({ children, type = "single", collapsible = true, defaultValue, className }) {
  const [open, setOpen] = React.useState(() =>
    type === "single" ? defaultValue || null : defaultValue || []
  )

  const toggle = React.useCallback((value) => {
    if (type === "single") {
      setOpen((prev) => (collapsible && prev === value ? null : value))
    } else {
      setOpen((prev) =>
        prev.includes(value)
          ? prev.filter((v) => v !== value)
          : [...prev, value]
      )
    }
  }, [type, collapsible])

  return (
    <AccordionContext.Provider value={{ open, toggle, type }}>
      <div className={cn("divide-y divide-velmora-espresso/10", className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

function AccordionItem({ children, value, className }) {
  return (
    <div className={cn("", className)} data-value={value}>
      {children}
    </div>
  )
}

function AccordionTrigger({ children, value, className }) {
  const ctx = React.useContext(AccordionContext)
  if (!ctx) throw new Error("AccordionTrigger must be inside Accordion")
  const isOpen =
    ctx.type === "single" ? ctx.open === value : ctx.open.includes(value)

  return (
    <button
      type="button"
      onClick={() => ctx.toggle(value)}
      className={cn(
        "flex w-full items-center justify-between py-4 text-left font-sans text-sm font-medium uppercase tracking-label text-velmora-espresso hover:text-velmora-gold",
        className
      )}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 transition-transform duration-300",
          isOpen && "rotate-180"
        )}
      />
    </button>
  )
}

function AccordionContent({ children, value, className }) {
  const ctx = React.useContext(AccordionContext)
  if (!ctx) throw new Error("AccordionContent must be inside Accordion")
  const isOpen =
    ctx.type === "single" ? ctx.open === value : ctx.open.includes(value)

  return (
    <div
      className={cn(
        "grid overflow-hidden transition-all duration-300 ease-out",
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      )}
    >
      <div className="overflow-hidden">
        <div className={cn("pb-5 text-sm leading-relaxed text-velmora-mocha", className)}>
          {children}
        </div>
      </div>
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
