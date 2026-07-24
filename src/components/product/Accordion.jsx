import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className="divide-y divide-line-light border-y border-line-light">
      {items.map((item, idx) => {
        const open = openIndex === idx
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : idx)}
              aria-expanded={open}
              className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-ink/80"
            >
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink">
                {item.title}
              </span>
              {open ? (
                <Minus className="h-4 w-4 text-ink" strokeWidth={1.25} />
              ) : (
                <Plus className="h-4 w-4 text-ink" strokeWidth={1.25} />
              )}
            </button>
            <div
              className={cn(
                "grid transition-all duration-500 ease-out-soft",
                open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-prose text-sm leading-relaxed text-text">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
