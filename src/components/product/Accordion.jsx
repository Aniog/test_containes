import React, { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-t border-taupe">
      {items.map((item, idx) => {
        const isOpen = open === idx
        return (
          <div key={item.title} className="border-b border-taupe">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : idx)}
              className="w-full flex items-center justify-between py-5 text-left group"
              aria-expanded={isOpen}
            >
              <span className="font-sans text-[12px] tracking-[0.24em] uppercase text-espresso group-hover:text-mink transition-colors">
                {item.title}
              </span>
              <span className="text-espresso">
                {isOpen ? (
                  <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                ) : (
                  <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                )}
              </span>
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-500 ease-editorial",
                isOpen ? "max-h-[800px] pb-6 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="font-serif text-[16px] leading-relaxed text-mink space-y-3">
                {item.content}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
