import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className="divide-y divide-sand border-t border-b border-sand">
      {items.map((item, i) => {
        const open = openIndex === i
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : i)}
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={open}
            >
              <span className="font-serif text-lg text-ink">{item.title}</span>
              <span className="text-gold">
                {open ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <div className="pb-6 pr-8 text-sm leading-relaxed text-ink-soft">
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
