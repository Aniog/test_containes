import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

export function FAQ({ items, invert = false, className }) {
  return (
    <div className={cn("divide-y", invert ? "divide-navy-700" : "divide-slate-200", className)}>
      {items.map((it, i) => (
        <FAQItem key={i} item={it} invert={invert} />
      ))}
    </div>
  )
}

function FAQItem({ item, invert }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="py-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span
          className={cn(
            "text-base md:text-lg font-semibold",
            invert ? "text-white" : "text-slate-900"
          )}
        >
          {item.q}
        </span>
        <span
          className={cn(
            "shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full border",
            invert
              ? "border-navy-600 text-accent-300"
              : "border-slate-300 text-navy-700"
          )}
        >
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      {open && (
        <p
          className={cn(
            "mt-3 text-sm md:text-base leading-relaxed",
            invert ? "text-navy-100" : "text-slate-600"
          )}
        >
          {item.a}
        </p>
      )}
    </div>
  )
}

export default FAQ
