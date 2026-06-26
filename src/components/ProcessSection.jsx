import { SectionHeading } from './SectionHeading'
import { processSteps } from '@/data/siteData'

export function ProcessSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="How It Works"
          title="A Simple, Transparent Sourcing Process"
          description="We keep the workflow clear from day one so you always know the next step."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <div key={step.id} className="relative">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <span className="text-3xl font-bold text-primary/30">
                  {step.number}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {step.description}
                </p>
              </div>
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 h-0.5 w-6 bg-slate-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
