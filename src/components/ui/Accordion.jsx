import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="divide-y divide-sand border-y border-sand">
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
              <span className="font-serif text-lg uppercase tracking-wider text-charcoal">
                {item.title}
              </span>
              <span className="text-gold">
                {isOpen ? <Minus width={18} height={18} /> : <Plus width={18} height={18} />}
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-500 ease-luxury",
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="text-sm leading-relaxed text-stone">{item.content}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
