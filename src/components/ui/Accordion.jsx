import React from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "../../lib/utils"

export default function Accordion({ items, defaultOpenIndex = 0 }) {
  const [openIndex, setOpenIndex] = React.useState(defaultOpenIndex)

  return (
    <div className="border-t border-ink/15">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.title} className="border-b border-ink/15">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-ink">
                {item.title}
              </span>
              <span className="text-ink/70">
                {isOpen ? (
                  <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                ) : (
                  <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                )}
              </span>
            </button>
            <div
              className={cn(
                "grid overflow-hidden transition-all duration-500 ease-soft",
                isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="min-h-0">
                {typeof item.content === "string" ? (
                  <p className="text-[15px] leading-relaxed text-ink/75">{item.content}</p>
                ) : (
                  item.content
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
