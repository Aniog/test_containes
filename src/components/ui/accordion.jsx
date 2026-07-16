import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function Accordion({ items, className }) {
  const [open, setOpen] = useState(0)

  return (
    <div className={cn("divide-y divide-line border-y border-line", className)}>
      {items.map((item, idx) => {
        const isOpen = open === idx
        return (
          <div key={idx}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : idx)}
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg tracking-wide text-ink md:text-xl">
                {item.title}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-stone transition-transform duration-300",
                  isOpen && "rotate-180 text-gold"
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-prose text-sm leading-relaxed text-stone md:text-[15px]">
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
