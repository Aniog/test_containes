import { useState } from "react"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-t border-taupe-300/60">
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div key={it.title} className="border-b border-taupe-300/60">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between py-5 sm:py-6 text-left group"
              aria-expanded={isOpen}
            >
              <span className="text-[12px] uppercase tracking-wider-3 font-medium text-espresso group-hover:text-gold-600 transition-colors">
                {it.title}
              </span>
              <Plus
                className={cn(
                  "w-4 h-4 text-mocha-400 transition-transform duration-500 ease-editorial",
                  isOpen && "rotate-45 text-gold-600",
                )}
                strokeWidth={1.4}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-500 ease-editorial",
                isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <div className="text-[14px] sm:text-[15px] text-mocha-500 leading-relaxed font-light space-y-3 max-w-2xl">
                  {typeof it.content === "string" ? (
                    <p>{it.content}</p>
                  ) : (
                    it.content
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
