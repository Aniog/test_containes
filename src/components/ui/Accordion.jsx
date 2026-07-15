import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-sand">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-xs uppercase tracking-widest2 text-ink">{title}</span>
        {open ? <Minus size={16} className="text-gold" /> : <Plus size={16} className="text-ink" />}
      </button>
      <div
        className={cn(
          "grid transition-all duration-400 ease-luxury",
          open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="text-sm text-muted leading-relaxed pr-6">{children}</div>
        </div>
      </div>
    </div>
  )
}
