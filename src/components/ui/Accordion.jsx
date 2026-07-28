import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const AccordionContext = React.createContext(null)

export function Accordion({ children, type = "single", collapsible = true, defaultValue }) {
  const [open, setOpen] = React.useState(defaultValue ? [defaultValue] : [])

  const toggle = (value) => {
    setOpen((prev) => {
      if (type === "single" && collapsible) {
        return prev.includes(value) ? [] : [value]
      }
      return prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    })
  }

  return (
    <AccordionContext.Provider value={{ open, toggle }}>
      <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

export function AccordionItem({ children, value, className }) {
  return (
    <div className={cn("", className)} data-value={value}>
      {children}
    </div>
  )
}

export function AccordionTrigger({ children, value, className }) {
  const ctx = React.useContext(AccordionContext)
  const isOpen = ctx?.open.includes(value)
  return (
    <button
      onClick={() => ctx?.toggle(value)}
      className={cn(
        "flex w-full items-center justify-between px-6 py-4 text-left text-base font-semibold text-slate-900 hover:bg-slate-50",
        className
      )}
    >
      {children}
      <ChevronDown className={cn("h-5 w-5 text-slate-500 transition-transform", isOpen && "rotate-180")} />
    </button>
  )
}

export function AccordionContent({ children, value, className }) {
  const ctx = React.useContext(AccordionContext)
  const isOpen = ctx?.open.includes(value)
  if (!isOpen) return null
  return (
    <div className={cn("px-6 pb-5 text-slate-600", className)}>
      {children}
    </div>
  )
}
