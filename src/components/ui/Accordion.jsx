import React, { useState } from "react"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Accordion({
  title,
  children,
  defaultOpen = false,
  className,
}) {
  const [open, setOpen] = useState(defaultOpen)
  const id = React.useId()

  return (
    <div
      className={cn("border-t border-sand-200 last:border-b", className)}
    >
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={id}
          className="flex w-full items-center justify-between py-5 text-left focus-ring"
        >
          <span className="font-sans text-[12px] font-medium uppercase tracking-widest2 text-espresso">
            {title}
          </span>
          <span
            aria-hidden="true"
            className={`flex h-7 w-7 items-center justify-center text-espresso transition-transform duration-300 ${
              open ? "rotate-45" : ""
            }`}
          >
            <Plus className="h-4 w-4" strokeWidth={1.5} />
          </span>
        </button>
      </h3>
      <div
        id={id}
        className={`grid overflow-hidden transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">{children}</div>
      </div>
    </div>
  )
}
