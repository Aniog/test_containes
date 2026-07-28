import { AlertTriangle } from "lucide-react"
import { Section, SectionHeading, Container } from "@/components/ui/section"
import { problems } from "@/data/content"

export default function HomeProblems() {
  return (
    <Section id="problems" className="bg-muted/50">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Problems we solve"
          title="Common risks when sourcing from China — handled"
          description="Most sourcing problems come from information gaps. We close them with on-the-ground verification and reporting."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-danger/10 text-danger">
                <AlertTriangle className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
