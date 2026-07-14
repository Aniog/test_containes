import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils.js"

export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIdx, setOpenIdx] = useState(defaultOpen)

  return (
    <div className="border-t border-hairline">
      {items.map((it, i) => {
        const isOpen = openIdx === i
        return (
          <div key={it.title} className="border-b border-hairline">
            <button
              type="button"
              onClick={() => setOpenIdx(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-sans text-[12px] uppercase tracking-[0.22em] text-espresso">
                {it.title}
              </span>
              {isOpen ? (
                <Minus className="h-4 w-4 text-espresso" strokeWidth={1.5} />
              ) : (
                <Plus className="h-4 w-4 text-espresso" strokeWidth={1.5} />
              )}
            </button>
            <div
              className={cn(
                "grid overflow-hidden transition-all duration-500 ease-editorial",
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              )}
            >
              <div className="min-h-0">
                <div className="max-w-2xl text-sm leading-relaxed text-taupe">
                  {typeof it.content === "string"
                    ? it.content
                    : it.content}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
