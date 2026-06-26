import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function FaqList({ items }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="mx-auto max-w-3xl divide-y divide-border-soft rounded-2xl border border-border-soft bg-surface shadow-sm">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-base font-semibold text-ink">
                {item.q}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-muted transition-transform",
                  isOpen && "rotate-180 text-brand"
                )}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-sm leading-relaxed text-slate-body">
                {item.a}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
