import { XCircle, CheckCircle } from "lucide-react"
import SectionHeader from "@/components/ui/SectionHeader"

const problems = [
  {
    problem: "Hard to find trustworthy suppliers",
    solution: "We pre-screen factories, check licenses, and verify production capability on the ground.",
  },
  {
    problem: "Quality issues discovered too late",
    solution: "Inspections at multiple stages catch defects before goods leave the factory.",
  },
  {
    problem: "Communication delays and misunderstandings",
    solution: "Bilingual project managers keep both sides aligned with clear updates and documentation.",
  },
  {
    problem: "Unpredictable shipping and customs delays",
    solution: "We coordinate freight, consolidate cargo, and prepare export paperwork to avoid surprises.",
  },
]

export default function ProblemsSection() {
  return (
    <section className="section bg-white">
      <div className="container-main">
        <SectionHeader
          badge="Why Clients Choose Us"
          title="Problems we solve for overseas buyers"
          description="Sourcing from China can be risky. We reduce those risks with processes built on transparency and verification."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {problems.map((item, index) => (
            <div key={index} className="card p-6">
              <div className="flex items-start gap-4">
                <XCircle className="mt-1 h-5 w-5 shrink-0 text-red-500" />
                <div>
                  <h3 className="font-semibold text-slate-900">{item.problem}</h3>
                  <div className="mt-3 flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <p className="text-sm leading-relaxed text-slate-600">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
