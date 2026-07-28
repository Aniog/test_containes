import { Section, SectionHeading, Container } from "@/components/ui/section"
import { trustPoints } from "@/data/content"

export default function HomeTrust() {
  return (
    <Section id="trust">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Why buyers trust us"
            title="A local team that verifies, not just relays"
            description="We don't pass messages between you and suppliers. We check factories in person, inspect goods independently, and report what we actually see."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {trustPoints.map((t) => (
              <div
                key={t.id}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <t.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">
                  {t.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
