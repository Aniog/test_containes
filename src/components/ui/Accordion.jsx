import { useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
      {items.map((item, index) => (
        <div key={index}>
          <button
            type="button"
            onClick={() => toggle(index)}
            className="flex w-full items-center justify-between px-6 py-5 text-left"
          >
            <span className="text-base font-semibold text-navy-900 md:text-lg">
              {item.question}
            </span>
            <ChevronDown
              className={cn(
                "h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200",
                openIndex === index && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-200",
              openIndex === index ? "max-h-96" : "max-h-0"
            )}
          >
            <p className="px-6 pb-5 text-slate-600">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
