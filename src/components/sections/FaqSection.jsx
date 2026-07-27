import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '@/data/content'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export default function FaqSection() {
  const [open, setOpen] = useState(0)

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          subtitle="Practical answers to the questions buyers ask before working with a sourcing agent."
        />

        <div className="mt-12 max-w-3xl mx-auto space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div
                key={f.q}
                className="rounded-xl border border-border-base bg-surface overflow-hidden"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-ink">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 flex-shrink-0 text-primary-accent transition-transform',
                      isOpen && 'rotate-180',
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm leading-relaxed text-slate-body">
                    {f.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-body">Still have questions?</p>
          <div className="mt-4">
            <Button to="/contact" size="lg">
              Talk to a Sourcing Specialist
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
