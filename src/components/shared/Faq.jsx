import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { FAQS } from "@/data/site"
import { cn } from "@/lib/utils"

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
      {FAQS.map((faq, index) => {
        const isOpen = open === index
        return (
          <div key={faq.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-[#0B2545]">
                {faq.q}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-[#1B6CA8] transition-transform",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-sm leading-relaxed text-slate-600">
                {faq.a}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
