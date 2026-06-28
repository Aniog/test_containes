import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Section, SectionContainer, SectionHeading } from "@/components/ui/Section"
import { cn } from "@/lib/utils"
import { FAQS } from "@/data/content"

function FaqItem({ faq, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-slate-200">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-slate-900">
          {faq.question}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-200",
            open && "rotate-180 text-primary"
          )}
        />
      </button>
      {open && (
        <p className="pb-5 text-sm leading-relaxed text-slate-600">
          {faq.answer}
        </p>
      )}
    </div>
  )
}

export default function Faq({ withHeading = true }) {
  return (
    <Section id="faq" className="bg-slate-50">
      <SectionContainer>
        {withHeading && (
          <SectionHeading
            eyebrow="FAQ"
            title="Questions buyers often ask"
            description="Straight answers about how we work, what we charge, and what to expect."
          />
        )}
        <div className="mx-auto mt-12 max-w-3xl">
          {FAQS.map((faq, i) => (
            <FaqItem key={faq.id} faq={faq} defaultOpen={i === 0} />
          ))}
        </div>
      </SectionContainer>
    </Section>
  )
}
