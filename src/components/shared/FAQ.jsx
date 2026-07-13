import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

export default function FAQ({ items, id }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div id={id} className="space-y-3">
      {items.map((item, idx) => {
        const open = idx === openIndex
        return (
          <div
            key={item.q}
            className={cn(
              "card overflow-hidden transition-shadow",
              open && "shadow-elevated"
            )}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : idx)}
              className="w-full flex items-start justify-between gap-4 p-5 md:p-6 text-left"
              aria-expanded={open}
            >
              <span className="text-base md:text-lg font-semibold text-slate-900">
                {item.q}
              </span>
              <span className="shrink-0 w-8 h-8 rounded-full bg-brand-50 text-brand-800 flex items-center justify-center">
                {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            {open && (
              <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-2 text-slate-600 leading-relaxed text-sm md:text-base">
                {item.a}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
