import React, { useState } from "react"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Accordion({ items, defaultOpen = 0, className }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className={cn("border-t border-line", className)}>
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={item.id} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg md:text-xl text-ink tracking-wide">
                {item.title}
              </span>
              <Plus
                className={cn(
                  "w-4 h-4 text-ink transition-transform duration-300 ease-out-soft shrink-0 ml-4",
                  isOpen && "rotate-45"
                )}
                strokeWidth={1.25}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-400 ease-out-soft",
                isOpen
                  ? "grid-rows-[1fr] opacity-100 pb-6"
                  : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <div className="text-muted leading-relaxed text-[15px] max-w-2xl space-y-3">
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
