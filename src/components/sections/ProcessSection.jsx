import * as Icons from "lucide-react"
import { Container, SectionHeading, Button } from "@/components/ui/primitives"
import { processSteps } from "@/data/site"

export default function ProcessSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="How It Works"
          title="A clear process from inquiry to delivery"
          description="Six defined steps keep your order transparent and on track, with photo-backed updates at every stage."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => {
            const Icon = Icons[step.icon] ?? Icons.Circle
            return (
              <div
                key={step.step}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                    {step.step}
                  </span>
                  <Icon className="h-5 w-5 text-blue-700" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Button to="/how-it-works">See the full process</Button>
        </div>
      </Container>
    </section>
  )
}
