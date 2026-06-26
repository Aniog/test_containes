import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import SectionHeader from "../shared/SectionHeader"
import { faqs } from "../../data/siteData"

export default function FAQSection() {
  const [open, setOpen] = useState(0)

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Answers to the questions buyers ask us most often before starting a project."
          align="center"
        />

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-brand-line overflow-hidden rounded-xl border border-brand-line bg-white shadow-sm">
          {faqs.map((item, idx) => {
            const isOpen = open === idx
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-brand-soft"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-brand-ink md:text-base">
                    {item.q}
                  </span>
                  <span
                    className={[
                      "mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border transition-colors",
                      isOpen
                        ? "border-brand-accent bg-brand-accent text-white"
                        : "border-brand-line bg-white text-brand-ink",
                    ].join(" ")}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm leading-relaxed text-brand-body">
                    {item.a}
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
