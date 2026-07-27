import PageHero from '@/components/shared/PageHero'
import { Section, SectionHeader } from '@/components/ui/Section'
import CtaBanner from '@/components/shared/CtaBanner'
import { PROCESS_STEPS } from '@/content'
import { CheckCircle2 } from 'lucide-react'

const WHAT_YOU_GET = [
  'A shortlist of vetted suppliers with a comparison sheet',
  'Factory audit reports with photos',
  'Sample evaluation before production approval',
  'Weekly production progress updates',
  'Inspection reports at each QC stage',
  'Consolidated shipping with tracking',
]

export default function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="A transparent sourcing process"
        description="Six clear steps that take you from an idea to delivered, inspected goods — with visibility and control at every stage."
      />

      <Section>
        <SectionHeader
          align="left"
          title="The six-step process"
          description="Each step is designed to reduce risk and keep your order on track."
        />
        <div className="mt-12 relative">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-border hidden md:block" />
          <div className="space-y-8">
            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className="relative md:pl-16">
                <div className="absolute left-0 top-0 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold ring-4 ring-background">
                  {step.number}
                </div>
                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3">
                    <span className="md:hidden flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                      {step.number}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section muted>
        <SectionHeader
          eyebrow="What You Get"
          title="Clear deliverables at every stage"
          description="You are never left guessing. Here is what you receive throughout the process."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHAT_YOU_GET.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-5"
            >
              <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <span className="text-sm text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  )
}
