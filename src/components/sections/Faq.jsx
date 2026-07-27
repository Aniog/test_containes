import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { FAQS } from "@/data/content"
import { Section, SectionHeader } from "@/components/shared/Section"

export default function Faq({ limit }) {
  const list = limit ? FAQS.slice(0, limit) : FAQS
  const [openId, setOpenId] = useState(list[0]?.id)

  return (
    <Section id="faq" className="bg-page">
      <div className="container-x">
        <SectionHeader
          eyebrow="Frequently asked"
          title="Questions buyers ask before they start"
          subtitle="If your question is not here, send it through the contact form and we will reply within one business day."
        />

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-border-soft rounded-2xl border border-border-soft bg-white">
          {list.map((f) => {
            const isOpen = openId === f.id
            return (
              <div key={f.id}>
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : f.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${f.id}-panel`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-ink-900 hover:bg-slate-50"
                >
                  <span>{f.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 flex-none text-ink-500 transition-transform ${
                      isOpen ? "rotate-180 text-accent" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div
                    id={`faq-${f.id}-panel`}
                    className="px-5 pb-5 text-sm text-ink-700"
                  >
                    {f.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
