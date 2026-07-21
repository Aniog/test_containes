import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="divide-y divide-sand border-t border-sand">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg md:text-xl text-ink uppercase tracking-wider">
                {item.title}
              </span>
              <span className="text-ink">
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-400 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="text-stone leading-relaxed pr-8">{item.content}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
