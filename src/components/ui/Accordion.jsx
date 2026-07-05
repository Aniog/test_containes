import { useState } from "react"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Accordion({ items = [], defaultOpen = null, className = "" }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className={cn("divide-y divide-line border-y border-line", className)}>
      {items.map((item, idx) => {
        const open = openIndex === idx
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : idx)}
              className="w-full flex items-center justify-between py-5 text-left group"
              aria-expanded={open}
            >
              <span className="eyebrow group-hover:text-ink transition-colors">{item.title}</span>
              <Plus
                size={16}
                strokeWidth={1.4}
                className={cn("text-ink transition-transform duration-300", open && "rotate-45")}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden text-sm leading-relaxed text-muted font-sans">
                {item.content}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
