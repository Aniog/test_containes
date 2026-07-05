import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className="divide-y divide-espresso-200 border-y border-espresso-200">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-sans text-xs uppercase tracking-widest text-espresso-800">
                {item.title}
              </span>
              <span className="text-espresso-500">
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pr-8 font-sans text-sm leading-relaxed text-espresso-600">
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
