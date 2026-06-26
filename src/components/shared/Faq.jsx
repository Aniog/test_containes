import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Faq({ items, id }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
      {items.map((item, i) => {
        const expanded = open === i
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(expanded ? -1 : i)}
              aria-expanded={expanded}
              aria-controls={`${id || "faq"}-panel-${i}`}
              id={`${id || "faq"}-trigger-${i}`}
              className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left"
            >
              <span className="text-base md:text-lg font-semibold text-slate-900">
                {item.q}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-slate-500 transition-transform",
                  expanded && "rotate-180 text-navy-900"
                )}
              />
            </button>
            <div
              id={`${id || "faq"}-panel-${i}`}
              role="region"
              aria-labelledby={`${id || "faq"}-trigger-${i}`}
              hidden={!expanded}
              className="px-5 pb-5 -mt-1 text-slate-700 leading-relaxed"
            >
              {item.a}
            </div>
          </div>
        )
      })}
    </div>
  )
}