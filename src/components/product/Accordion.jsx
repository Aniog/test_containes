import { useState } from "react"
import { Minus, Plus } from "lucide-react"
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
              className="w-full flex items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-[12px] uppercase tracking-widest2 text-espresso">
                {item.title}
              </span>
              <span className="text-espresso">
                {isOpen ? <Minus width={16} height={16} /> : <Plus width={16} height={16} />}
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-6 text-espresso-700 leading-relaxed text-sm">{item.content}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
