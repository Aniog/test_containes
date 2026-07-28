import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="divide-y divide-[#e2e8f0] border border-[#e2e8f0] rounded-lg bg-white">
      {items.map((item, index) => (
        <div key={index}>
          <button
            className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-text-primary hover:bg-surface transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span>{item.question}</span>
            <ChevronDown
              className={cn(
                "h-5 w-5 text-text-muted transition-transform",
                openIndex === index && "rotate-180"
              )}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-5 text-text-secondary leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
