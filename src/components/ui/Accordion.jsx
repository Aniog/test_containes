import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="border-t border-border-dark">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.title} className="border-b border-border-dark">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between py-4 text-left"
            >
              <span className="font-sans text-sm font-medium uppercase tracking-wide text-charcoal">
                {item.title}
              </span>
              <ChevronDown
                size={18}
                className={cn(
                  "text-warm-gray transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "grid overflow-hidden transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="min-h-0">
                <p className="pb-5 pr-6 text-sm leading-relaxed text-warm-gray">
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
