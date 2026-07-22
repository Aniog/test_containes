import { useState } from "react"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIdx, setOpenIdx] = useState(defaultOpen)

  return (
    <div className="border-t border-espresso-800/15">
      {items.map((item, i) => {
        const isOpen = openIdx === i
        return (
          <div key={item.title} className="border-b border-espresso-800/15">
            <button
              type="button"
              onClick={() => setOpenIdx(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="eyebrow text-espresso-800">{item.title}</span>
              <Plus
                className={cn(
                  "h-4 w-4 text-ink-muted transition-transform duration-300",
                  isOpen && "rotate-45"
                )}
                strokeWidth={1.4}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-400",
                isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
              )}
              style={{ transitionTimingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)" }}
            >
              <div className="overflow-hidden">
                <p className="text-sm md:text-[15px] leading-relaxed text-ink-muted max-w-2xl whitespace-pre-line">
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
