import { useState } from "react"
import { Section, SectionHeader } from "@/components/shared/Section"
import { faqs } from "@/data/content"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function FAQSection({ items = faqs, eyebrow = "FAQ", title = "Frequently Asked Questions", subtitle = "Straight answers to the questions buyers ask us most." }) {
  const [open, setOpen] = useState(0)

  return (
    <Section id="faq" className="bg-bg">
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />

      <div className="mt-12 max-w-3xl mx-auto space-y-3">
        {items.map((faq, i) => {
          const isOpen = open === i
          return (
            <div
              key={faq.q}
              className={cn(
                "rounded-xl border bg-surface transition-colors",
                isOpen ? "border-primary" : "border-line",
              )}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <span className="text-base font-semibold text-ink">{faq.q}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-muted shrink-0 transition-transform",
                    isOpen && "rotate-180 text-primary",
                  )}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-sm text-muted leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
