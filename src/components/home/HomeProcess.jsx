import { processSteps } from "@/data/process"
import { Container, SectionHeader } from "@/components/shared/Section"

export default function HomeProcess() {
  return (
    <section className="py-16 md:py-24 bg-bg">
      <Container>
        <SectionHeader
          eyebrow="How It Works"
          title="A clear process from request to delivery"
          description="Six defined stages keep your order transparent and accountable at every step."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className="relative rounded-xl border border-border bg-surface p-6 shadow-card"
            >
              <span className="text-3xl font-bold text-brand/30">
                {step.step}
              </span>
              <h3 className="mt-2 text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-ink leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
