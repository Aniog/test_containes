import SectionHeader from "../shared/SectionHeader"
import { processSteps } from "../../data/siteData"

export default function ProcessSection() {
  return (
    <section className="bg-brand-soft py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How It Works"
          title="A clear sourcing process, step by step"
          description="Every project follows the same six-step workflow so you always know what is happening and what is next."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="relative rounded-xl border border-brand-line bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-navy text-sm font-bold text-white">
                  {step.step}
                </span>
                <h3 className="text-base font-semibold text-brand-ink md:text-lg">
                  {step.title}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-brand-body">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
