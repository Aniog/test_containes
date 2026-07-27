import { useState } from 'react'
import { Section, SectionHeader } from '@/components/ui/Section'
import { FAQS } from '@/content'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Faq({ muted = false }) {
  const [open, setOpen] = useState(0)

  return (
    <Section muted={muted}>
      <SectionHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Practical answers to the questions buyers ask before working with a sourcing agent."
      />
      <div className="mt-12 max-w-3xl mx-auto space-y-3">
        {FAQS.map((faq, idx) => {
          const isOpen = open === idx
          return (
            <div
              key={faq.q}
              className="rounded-xl border border-border bg-card overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : idx)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-base font-semibold text-foreground">
                  {faq.q}
                </span>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 shrink-0 text-muted-foreground transition-transform',
                    isOpen && 'rotate-180',
                  )}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
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
