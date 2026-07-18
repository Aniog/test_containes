import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.title}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-sans text-[11px] uppercase tracking-ultra text-ink">
                {item.title}
              </span>
              {isOpen ? (
                <Minus className="h-4 w-4 text-ink" />
              ) : (
                <Plus className="h-4 w-4 text-ink" />
              )}
            </button>
            <div
              className={cn(
                "grid transition-all duration-500 ease-elegant",
                isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="font-sans text-sm leading-relaxed text-ink-muted">
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
