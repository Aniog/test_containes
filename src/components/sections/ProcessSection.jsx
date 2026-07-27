import * as Icons from 'lucide-react'
import { processSteps } from '@/data/content'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

export default function ProcessSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <SectionHeading
          eyebrow="How It Works"
          title="A clear process from requirement to delivery"
          subtitle="Six structured steps keep your sourcing project transparent, predictable, and on schedule."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => {
            const Icon = Icons[step.icon] || Icons.Circle
            return (
              <div
                key={step.step}
                className="relative rounded-xl border border-border-base bg-surface p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-4xl font-bold text-border-base">
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-body">
                  {step.desc}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button to="/how-it-works" size="lg" variant="navy">
            View the Full Process
          </Button>
        </div>
      </div>
    </section>
  )
}
