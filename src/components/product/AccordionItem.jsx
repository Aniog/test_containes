import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-hairline">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[12px] font-semibold uppercase tracking-[0.24em] text-ink">
          {title}
        </span>
        <span
          className={cn(
            "flex h-7 w-7 items-center justify-center text-inkSoft transition-transform duration-500 ease-editorial",
            open && "rotate-180",
          )}
        >
          {open ? (
            <Minus className="h-4 w-4" strokeWidth={1.4} />
          ) : (
            <Plus className="h-4 w-4" strokeWidth={1.4} />
          )}
        </span>
      </button>
      <div
        className={cn(
          "grid transition-all duration-500 ease-editorial",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-6 text-sm font-light leading-relaxed text-inkSoft">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
