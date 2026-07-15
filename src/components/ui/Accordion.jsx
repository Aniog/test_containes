import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.title}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <span className="text-sm uppercase tracking-widest2 text-ink">
                {item.title}
              </span>
              {isOpen ? (
                <Minus className="w-4 h-4 text-ink" />
              ) : (
                <Plus className="w-4 h-4 text-ink" />
              )}
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300",
                isOpen ? "max-h-96 pb-6" : "max-h-0"
              )}
            >
              <div className="text-sm text-stone leading-relaxed space-y-3">
                {item.content}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
