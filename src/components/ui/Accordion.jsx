import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-hairline">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-sans text-sm uppercase tracking-widest2 text-ink">
          {title}
        </span>
        <span className="text-gold">
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="font-sans text-sm leading-relaxed text-stone pr-6">
            {children}
          </p>
        </div>
      </div>
    </div>
  )
}
