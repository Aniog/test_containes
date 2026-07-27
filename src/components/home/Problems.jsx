import { AlertTriangle, CheckCircle2 } from "lucide-react"

const problems = [
  "Unverified suppliers disappearing after payment",
  "Misunderstood product specs and poor samples",
  "Inconsistent quality between batches",
  "Missed deadlines and unclear production status",
  "Complicated export paperwork and shipping delays",
  "Language barriers and slow response times",
]

const solutions = [
  "On-the-ground factory audits and license checks",
  "Clear RFQ templates and sample verification",
  "AQL-based inspections at every critical stage",
  "Weekly production reports and milestone tracking",
  "Document preparation and freight coordination",
  "Bilingual account managers in your time zone",
]

export default function Problems() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Why Clients Choose Us</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Sourcing Problems We Solve
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-destructive">
              <AlertTriangle className="h-5 w-5" />
              Common Sourcing Risks
            </h3>
            <ul className="mt-4 space-y-3">
              {problems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
              <CheckCircle2 className="h-5 w-5" />
              How We Handle Them
            </h3>
            <ul className="mt-4 space-y-3">
              {solutions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
