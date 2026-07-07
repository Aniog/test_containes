import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const AccordionContext = React.createContext(null)

function useAccordion() {
  const ctx = React.useContext(AccordionContext)
  if (!ctx) throw new Error("Accordion items must be inside Accordion")
  return ctx
}

const Accordion = ({ type = "single", collapsible = true, defaultValue, children, className }) => {
  const [open, setOpen] = React.useState(() => {
    if (type === "single") return defaultValue || null
    return defaultValue || []
  })

  const toggle = React.useCallback(
    (value) => {
      if (type === "single") {
        setOpen((prev) => (collapsible && prev === value ? null : value))
      } else {
        setOpen((prev) =>
          prev.includes(value)
            ? prev.filter((v) => v !== value)
            : [...prev, value]
        )
      }
    },
    [type, collapsible]
  )

  const isOpen = React.useCallback(
    (value) => (type === "single" ? open === value : open.includes(value)),
    [open, type]
  )

  return (
    <AccordionContext.Provider value={{ toggle, isOpen }}>
      <div className={cn("divide-y divide-velmora-border", className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

const AccordionItem = ({ value, children, className }) => {
  return <div className={cn("py-4", className)}>{children}</div>
}

const AccordionTrigger = ({ value, children, className }) => {
  const { toggle, isOpen } = useAccordion()
  const open = isOpen(value)

  return (
    <button
      type="button"
      onClick={() => toggle(value)}
      className={cn(
        "flex w-full items-center justify-between text-left font-serif text-lg text-velmora-espresso transition-colors hover:text-velmora-gold",
        className
      )}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-5 w-5 text-velmora-gold transition-transform duration-300",
          open && "rotate-180"
        )}
      />
    </button>
  )
}

const AccordionContent = ({ value, children, className }) => {
  const { isOpen } = useAccordion()
  const open = isOpen(value)
  const ref = React.useRef(null)
  const [height, setHeight] = React.useState(0)

  React.useEffect(() => {
    if (ref.current) setHeight(ref.current.scrollHeight)
  }, [children])

  return (
    <div
      className="overflow-hidden transition-[height,opacity] duration-300 ease-out"
      style={{ height: open ? height : 0, opacity: open ? 1 : 0 }}
    >
      <div ref={ref} className={cn("pt-3 text-sm leading-relaxed text-velmora-espresso-light", className)}>
        {children}
      </div>
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
