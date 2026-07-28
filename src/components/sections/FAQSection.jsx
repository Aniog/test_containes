import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { faqs } from "@/data/content"
import { cn } from "@/lib/utils"

export default function FAQSection() {
  const [open, setOpen] = useState(faqs[0]?.id ?? null)

  return (
    <section id="faq" className="bg-slate-50">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Straight answers to the questions buyers ask before working with a sourcing agent."
        />

        <div className="mt-10 space-y-3">
          {faqs.map((faq) => {
            const isOpen = open === faq.id
            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpen(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-ink">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-brand transition-transform",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm leading-relaxed text-muted">
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
