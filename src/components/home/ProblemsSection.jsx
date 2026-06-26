import * as React from "react"
import SectionTitle from "@/components/shared/SectionTitle"
import { XCircle, CheckCircle } from "lucide-react"

const problems = [
  {
    problem: "Unreliable supplier directories",
    solution: "We verify factories in person and audit certificates, equipment, and past performance.",
  },
  {
    problem: "Quality surprises after payment",
    solution: "Inspections at pre-production, during production, and pre-shipment keep quality visible.",
  },
  {
    problem: "Hidden costs and delays",
    solution: "Clear quote breakdowns and milestone follow-ups reduce unexpected charges and slipped deadlines.",
  },
  {
    problem: "Communication gaps across time zones",
    solution: "A bilingual team in China handles supplier calls, samples, and updates on your schedule.",
  },
]

export default function ProblemsSection() {
  return (
    <section className="section-padding bg-slate-900 text-white">
      <div className="container-page">
        <SectionTitle
          eyebrow="Problems we solve"
          title="Sourcing from China should not feel risky"
          description="We handle the common problems buyers face so you can focus on growing your business."
          light
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {problems.map((item, idx) => (
            <div key={idx} className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0 rounded-full bg-red-500/10 p-2 text-red-400">
                  <XCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.problem}</h3>
                  <p className="mt-3 text-slate-300 leading-relaxed">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-xl border border-emerald-500/20 bg-emerald-900/20 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="shrink-0 rounded-full bg-emerald-500/20 p-3 text-emerald-400">
              <CheckCircle className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Our commitment</h3>
              <p className="mt-2 text-slate-300 max-w-3xl">
                Transparent pricing, regular reporting, and a team that works in your language and time zone. We treat your sourcing budget as if it were our own.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
