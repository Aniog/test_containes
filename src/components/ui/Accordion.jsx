import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const Accordion = ({ children, defaultValue }) => {
  const [open, setOpen] = React.useState(defaultValue || null)
  return (
    <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { open, setOpen })
      )}
    </div>
  )
}

const AccordionItem = ({ value, title, children, open, setOpen }) => {
  const isOpen = open === value
  return (
    <div className="py-0">
      <button
        type="button"
        onClick={() => setOpen(isOpen ? null : value)}
        className="flex w-full items-center justify-between px-6 py-4 text-left"
      >
        <span className="text-base font-semibold text-slate-900">{title}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-slate-500 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-sm leading-relaxed text-slate-600">
          {children}
        </div>
      )}
    </div>
  )
}

export { Accordion, AccordionItem }
