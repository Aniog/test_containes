import { useState } from "react"
import { Minus, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className="border-t border-ink/10">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx
        return (
          <div key={item.title} className="border-b border-ink/10">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
              aria-expanded={isOpen}
            >
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-ink group-hover:text-gold transition-colors">
                {item.title}
              </span>
              {isOpen ? (
                <Minus className="h-4 w-4 text-ink" strokeWidth={1.5} />
              ) : (
                <Plus className="h-4 w-4 text-ink" strokeWidth={1.5} />
              )}
            </button>
            <div
              className={cn(
                "grid transition-all duration-500 ease-elegant",
                isOpen ? "grid-rows-[1fr] opacity-100 pb-6 md:pb-7" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <div className="text-sm md:text-base text-muted-light leading-relaxed font-light space-y-2">
                  {Array.isArray(item.content) ? (
                    item.content.map((line, i) => <p key={i}>{line}</p>)
                  ) : (
                    <p>{item.content}</p>
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
