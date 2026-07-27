import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { FAQS } from "@/data/site"
import SectionHeader from "@/components/ui/SectionHeader"
import { cn } from "@/lib/utils"

export default function FAQ({ limit }) {
  const [openId, setOpenId] = useState(FAQS[0]?.id ?? null)
  const items = limit ? FAQS.slice(0, limit) : FAQS

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions buyers often ask"
          description="Straight answers to the things that matter before you start sourcing from China."
        />

        <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
          {items.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div key={faq.id} className="py-2">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-slate-900">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-slate-400 shrink-0 transition-transform",
                      isOpen && "rotate-180 text-brand-700",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-200",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
