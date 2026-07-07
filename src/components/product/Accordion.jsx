import React, { useState } from "react"
import { Plus, Minus } from "lucide-react"

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.title}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-sans text-xs uppercase tracking-widest text-ink">
                {item.title}
              </span>
              {isOpen ? (
                <Minus className="h-4 w-4 text-gold" strokeWidth={1.5} />
              ) : (
                <Plus className="h-4 w-4 text-ink" strokeWidth={1.5} />
              )}
            </button>
            <div
              className={`grid transition-all duration-400 ease-elegant ${
                isOpen
                  ? "grid-rows-[1fr] pb-6 opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="font-serif text-base leading-relaxed text-ink/75">
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
