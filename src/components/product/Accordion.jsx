import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-sand">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-ink">{title}</span>
        {open ? (
          <Minus size={16} className="text-ink" strokeWidth={1.5} />
        ) : (
          <Plus size={16} className="text-ink" strokeWidth={1.5} />
        )}
      </button>
      <div
        className={cn(
          "grid transition-all duration-300",
          open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="text-sm leading-relaxed text-stone">{children}</div>
        </div>
      </div>
    </div>
  )
}
