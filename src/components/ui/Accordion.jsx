import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function Accordion({ items, defaultOpen = [] }) {
  const [open, setOpen] = useState(new Set(defaultOpen))

  const toggle = (index) => {
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  return (
    <div className="border-t border-velmora-stone/50">
      {items.map((item, index) => (
        <div key={index} className="border-b border-velmora-stone/50">
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between py-4 text-left group"
          >
            <span className="font-serif text-lg text-velmora-espresso">
              {item.title}
            </span>
            <ChevronDown
              className={cn(
                "w-5 h-5 text-velmora-mocha transition-transform duration-300",
                open.has(index) && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-300",
              open.has(index) ? "max-h-96 pb-5" : "max-h-0"
            )}
          >
            <p className="text-velmora-mocha text-sm leading-relaxed font-sans">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
