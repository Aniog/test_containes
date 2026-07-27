import { Section, SectionHeader } from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { PROCESS_STEPS } from '@/content'
import { ArrowRight } from 'lucide-react'

export default function HomeProcess() {
  return (
    <Section muted>
      <SectionHeader
        eyebrow="How It Works"
        title="A clear process from request to delivery"
        description="Six practical steps that keep your order transparent, on schedule, and under control."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROCESS_STEPS.map((step) => (
          <div
            key={step.number}
            className="relative rounded-xl border border-border bg-card p-6"
          >
            <span className="text-3xl font-extrabold text-accent/80">
              {step.number}
            </span>
            <h3 className="mt-3 text-lg font-bold text-foreground">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button to="/how-it-works" variant="outline">
          See the Full Process
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Section>
  )
}
