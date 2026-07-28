import { Section, SectionHeading, Container } from "@/components/ui/section"
import { processSteps } from "@/data/content"

export default function HomeProcess() {
  return (
    <Section id="process" className="bg-muted/50">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="How it works"
          title="A clear process from request to shipment"
          description="Six practical stages that keep you informed and in control at every step."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="text-4xl font-bold text-primary/15">
                {step.step}
              </span>
              <h3 className="mt-2 text-lg font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
