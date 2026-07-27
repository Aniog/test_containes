import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { FAQS } from "@/data/content"
import { SectionHeading } from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"

export function FaqSection({ eyebrow = "FAQ", title, description }) {
  const [open, setOpen] = useState(0)
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={eyebrow}
          title={title || "Frequently asked questions"}
          description={
            description ||
            "Practical answers about how we work, what we charge, and what to expect."
          }
        />
        <div className="mt-10 space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-brand-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 flex-shrink-0 text-brand-500 transition-transform",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm leading-relaxed text-slate-600">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
