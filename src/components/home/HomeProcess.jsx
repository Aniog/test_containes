import SectionHeading from '@/components/ui/SectionHeading'
import { processSteps } from '@/data/site'

export default function HomeProcess() {
  return (
    <section className="bg-brand-slate">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionHeading
          eyebrow="How It Works"
          title="A clear process from inquiry to delivery"
          description="Six defined stages keep your project transparent and on track. You always know what is happening and what comes next."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.id}
                className="relative rounded-xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-navy text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-3xl font-bold text-slate-200">
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-brand-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {step.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
