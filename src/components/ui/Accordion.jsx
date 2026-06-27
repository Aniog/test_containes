import { useState } from "react"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Accordion({ items = [], defaultOpen = 0, className = "" }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className={cn("divide-y divide-hairline border-y border-hairline", className)}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx
        return (
          <div key={item.title} className="py-5">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              className="flex w-full items-center justify-between text-left"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-base md:text-lg text-espresso tracking-wide">
                {item.title}
              </span>
              <Plus
                size={18}
                strokeWidth={1.5}
                className={cn(
                  "text-espresso-soft transition-transform duration-300",
                  isOpen && "rotate-45",
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-500 ease-out",
                isOpen ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="text-sm leading-relaxed text-espresso-soft">
                  {typeof item.content === "string" ? (
                    <p>{item.content}</p>
                  ) : (
                    item.content
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}