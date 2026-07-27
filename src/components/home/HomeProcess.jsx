import { PROCESS_STEPS } from "@/data/content"
import { SectionHeading } from "@/components/ui/section-heading"

export function HomeProcess() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="A clear process from request to delivery"
          description="Six practical steps that take you from a product idea to inspected, shipped goods — with visibility at every stage."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.id}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-900 text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-3xl font-extrabold text-slate-200">
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-brand-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HomeProcess
