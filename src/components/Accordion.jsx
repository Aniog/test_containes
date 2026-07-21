import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className="border-t border-line">
      {items.map((item, idx) => {
        const open = openIndex === idx
        const panelId = `accordion-panel-${idx}`
        const buttonId = `accordion-button-${idx}`
        return (
          <div key={item.title} className="border-b border-line">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? -1 : idx)}
                className="w-full flex items-center justify-between py-5 sm:py-6 text-left group"
              >
                <span className="product-name text-[0.72rem] group-hover:text-gold-500 transition-colors">
                  {item.title}
                </span>
                <span className="text-espresso-800 flex-shrink-0 ml-4">
                  {open ? (
                    <Minus className="w-4 h-4" strokeWidth={1.5} />
                  ) : (
                    <Plus className="w-4 h-4" strokeWidth={1.5} />
                  )}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-all duration-500 ease-elegant",
                open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <div className="text-sm leading-relaxed text-taupe-600 space-y-2 max-w-prose">
                  {typeof item.content === "string" ? (
                    <p>{item.content}</p>
                  ) : (
                    item.content
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
