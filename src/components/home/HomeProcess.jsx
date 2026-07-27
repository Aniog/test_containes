import { PROCESS_STEPS } from "@/data/content"
import SectionHeading from "@/components/common/SectionHeading"

export default function HomeProcess() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="A clear process from request to delivery"
          description="Six structured steps keep your order moving, with visibility and checks at every stage."
          align="center"
        />

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((step) => (
            <li
              key={step.id}
              className="relative rounded-xl border border-slate-200 bg-surface p-6"
            >
              <span className="text-3xl font-bold text-accent">
                {step.number}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
