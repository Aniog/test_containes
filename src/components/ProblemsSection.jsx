import { SectionHeading } from './SectionHeading'
import { problems } from '@/data/siteData'
import { XCircle, CheckCircle2 } from 'lucide-react'

export function ProblemsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Problems We Solve"
          title="Sourcing Risks We Help You Avoid"
          description="International buying comes with real challenges. Here is how we address the most common ones."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.id}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <XCircle className="h-6 w-6 text-red-500" />
                <h3 className="font-semibold text-slate-900">{problem.title}</h3>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <p className="text-slate-600">{problem.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
