import { XCircle, CheckCircle2 } from "lucide-react"

const problems = [
  "Language barriers with suppliers",
  "No way to verify factory credentials",
  "Poor quality control before shipping",
  "Delayed production without updates",
  "Shipping and customs headaches",
]

const solutions = [
  "Bilingual negotiation & documentation",
  "On-site factory audits & verification",
  "Pre-shipment & inline inspections",
  "Weekly production status reports",
  "End-to-end logistics coordination",
]

export default function ProblemsSection() {
  return (
    <section className="section-padding section-alt">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Problems We Solve
          </span>
          <h2 id="problems-title" className="mt-3 text-3xl md:text-4xl font-bold text-text-primary">
            Common Sourcing Challenges — and How We Fix Them
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <div className="rounded-xl border border-red-100 bg-red-50/50 p-8">
            <h3 className="text-lg font-semibold text-red-700 flex items-center gap-2">
              <XCircle className="h-5 w-5" />
              Without a Sourcing Agent
            </h3>
            <ul className="mt-6 space-y-4">
              {problems.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-red-800">
                  <XCircle className="h-4 w-4 mt-0.5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-green-100 bg-green-50/50 p-8">
            <h3 className="text-lg font-semibold text-green-700 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              With SSourcing China
            </h3>
            <ul className="mt-6 space-y-4">
              {solutions.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-green-800">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
