import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)
  const refs = useRef([])

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
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
              <span className="font-serif text-lg text-ink md:text-xl">{item.title}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-gold transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
                strokeWidth={1.5}
              />
            </button>
            <div
              ref={(el) => (refs.current[i] = el)}
              className="grid transition-all duration-300 ease-out"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
              }}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pr-8 text-sm leading-relaxed text-stone">{item.content}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
