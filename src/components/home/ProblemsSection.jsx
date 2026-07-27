import { CheckCircle2 } from "lucide-react"
import { SectionLabel } from "@/components/ui/SectionLabel"

const problems = [
  {
    title: "Hard to find reliable suppliers",
    solution: "We pre-screen factories and verify business licenses, production capacity, and export experience.",
  },
  {
    title: "Language and time-zone gaps",
    solution: "Our bilingual team handles negotiations and keeps you updated in clear English.",
  },
  {
    title: "Quality surprises on arrival",
    solution: "Independent inspections at pre-shipment and during production catch issues early.",
  },
  {
    title: "Missed deadlines and unclear status",
    solution: "Milestone tracking and regular reporting keep production and shipping visible.",
  },
]

export function ProblemsSection() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel>Problems We Solve</SectionLabel>
            <h2 id="problems-title" className="text-3xl font-bold sm:text-4xl">
              Sourcing from China Should Not Feel Like a Gamble
            </h2>
            <p className="mt-4 text-slate-300">
              Overseas buyers often struggle with trust, communication, and
              quality control. We reduce that risk with boots-on-the-ground
              support.
            </p>
          </div>

          <div className="space-y-6">
            {problems.map((item) => (
              <div key={item.title} className="flex gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-secondary" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-300">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
