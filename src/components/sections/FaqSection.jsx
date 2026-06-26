import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Container, SectionHeading } from "@/components/ui/primitives"
import { faqs } from "@/data/site"
import { cn } from "@/lib/utils"

export default function FaqSection() {
  const [open, setOpen] = useState(0)

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Straight answers to the questions buyers ask before working with a sourcing agent."
        />

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-slate-900">{f.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-slate-500 transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm leading-relaxed text-slate-600">
                    {f.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
