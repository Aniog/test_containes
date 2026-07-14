import { useState } from "react"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

export function Accordion({ items, defaultOpen = 0, className }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className={cn("divide-y divide-taupe-200 border-y border-taupe-200", className)}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx
        const panelId = `accordion-panel-${idx}`
        const btnId = `accordion-btn-${idx}`
        return (
          <div key={item.title}>
            <button
              type="button"
              id={btnId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-gold-500"
            >
              <span className="text-[12px] font-semibold uppercase tracking-wider2 text-ink-500">
                {item.title}
              </span>
              <Plus
                size={16}
                strokeWidth={1.5}
                className={cn(
                  "text-ink-500 transition-transform duration-500 ease-elegant",
                  isOpen && "rotate-45",
                )}
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={cn(
                "grid overflow-hidden transition-all duration-500 ease-elegant",
                isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="min-h-0">
                <div className="prose prose-sm max-w-prose font-sans text-[15px] leading-relaxed text-ink-300">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
