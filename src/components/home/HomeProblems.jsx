import { Section, Container, SectionHeading } from "@/components/ui/Section"
import { PROBLEMS } from "@/data/site"
import { AlertTriangle, CheckCircle2 } from "lucide-react"

export default function HomeProblems() {
  return (
    <Section className="bg-[#0B2545]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              light
              eyebrow="Problems We Solve"
              title="The risks of sourcing from China — handled"
              description="Buying overseas without a local team creates predictable risks. We exist to remove them at every stage of your order."
            />
            <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#0E7C66]" />
                <div>
                  <p className="font-semibold text-white">
                    One local team, full visibility
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    You get a dedicated specialist who verifies suppliers, tracks
                    production, and inspects goods on your behalf — with clear
                    reporting at every step.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {PROBLEMS.map((problem) => (
              <div
                key={problem.title}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <AlertTriangle className="h-5 w-5 text-[#B45309]" />
                <h3 className="mt-3 text-sm font-semibold text-white">
                  {problem.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
