import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function Accordion({ items }) {
  const [open, setOpen] = useState(null)

  return (
    <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
      {items.map((item, idx) => (
        <div key={idx}>
          <button
            type="button"
            onClick={() => setOpen(open === idx ? null : idx)}
            className="flex w-full items-center justify-between px-6 py-4 text-left"
          >
            <span className="font-semibold text-slate-900">{item.question}</span>
            <ChevronDown
              className={cn(
                "h-5 w-5 text-slate-500 transition-transform",
                open === idx && "rotate-180"
              )}
            />
          </button>
          {open === idx && (
            <div className="px-6 pb-4 text-slate-600">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  )
}
