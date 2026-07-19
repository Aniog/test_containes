import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className="border-t border-mist">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        const panelId = `acc-panel-${i}`
        const btnId = `acc-btn-${i}`
        return (
          <div key={item.label} className="border-b border-mist">
            <button
              id={btnId}
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <span className="text-[11px] uppercase tracking-eyebrow text-ink font-medium">
                {item.label}
              </span>
              {isOpen ? (
                <Minus size={16} strokeWidth={1.5} className="text-gold-deep" />
              ) : (
                <Plus size={16} strokeWidth={1.5} className="text-ink" />
              )}
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={cn(
                "grid transition-all duration-500 ease-editorial",
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                {item.content}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
