import React, { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-hairline">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-sans uppercase tracking-[0.18em] text-[12px] text-ink group-hover:text-gold-deep transition-colors duration-300">
          {title}
        </span>
        <span className="text-ink/70 group-hover:text-gold-deep transition-colors duration-300">
          {open ? <Minus size={14} strokeWidth={1.5} /> : <Plus size={14} strokeWidth={1.5} />}
        </span>
      </button>
      <div
        className={cn(
          "grid transition-all duration-500",
          open ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden text-[14px] font-sans text-muted leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

const Accordion = ({ items, defaultOpenIndex = 0, className }) => {
  return (
    <div className={className}>
      {items.map((it, i) => (
        <AccordionItem key={it.title} title={it.title} defaultOpen={i === defaultOpenIndex}>
          {it.content}
        </AccordionItem>
      ))}
    </div>
  )
}

export default Accordion
