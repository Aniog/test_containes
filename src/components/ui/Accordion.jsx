import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.title} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between py-5 text-left"
            >
              <span className="font-serif text-lg uppercase tracking-widest3 text-ink">
                {item.title}
              </span>
              <span className="text-ink">
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-300",
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl text-sm leading-relaxed text-stone">
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
