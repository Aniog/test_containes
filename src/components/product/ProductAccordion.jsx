import { useState } from "react"
import { cn } from "../../lib/utils.js"
import { PlusIcon, MinusIcon } from "../ui/Icons.jsx"

export default function ProductAccordion({ sections = [] }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="border-t border-hairline">
      {sections.map((section, i) => {
        const isOpen = open === i
        return (
          <div key={section.title} className="border-b border-hairline">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-[11px] tracking-eyebrow uppercase text-ink font-medium">
                {section.title}
              </span>
              <span className="text-ink/60">
                {isOpen ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-500 ease-velvet",
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="text-[14px] leading-relaxed text-ink/80 font-light max-w-prose">
                  {section.content}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
