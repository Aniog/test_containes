import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Accordion({ items, className }) {
  const [open, setOpen] = useState(0)

  return (
    <div className={cn("divide-y divide-espresso/10 border-y border-espresso/10", className)}>
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-espresso">
                {item.title}
              </span>
              <span className="text-gold">
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-prose text-sm leading-relaxed text-taupe">
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
