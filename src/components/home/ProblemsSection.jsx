import { AlertTriangle, CheckCircle2 } from 'lucide-react'

const problems = [
  'Unverified suppliers and fake factory profiles',
  'Language barriers and slow communication',
  'Unexpected quality issues after shipment',
  'Missed deadlines and production delays',
  'Confusing shipping and customs paperwork',
]

const solutions = [
  'On-ground verification and documented audits',
  'Bilingual sourcing team based in China',
  'Inspections at every critical stage',
  'Production tracking with milestone reports',
  'End-to-end logistics coordination',
]

export default function ProblemsSection() {
  return (
    <section className="bg-slate-900 py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 id="problems-title" className="text-3xl font-bold md:text-4xl">
            Sourcing Problems We Solve
          </h2>
          <p id="problems-subtitle" className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Buying from China can be complex. We reduce the risks that cost time and money.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-8">
            <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-red-300">
              <AlertTriangle className="h-5 w-5" /> Common Risks
            </h3>
            <ul className="space-y-4">
              {problems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-8">
            <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-emerald-300">
              <CheckCircle2 className="h-5 w-5" /> How We Help
            </h3>
            <ul className="space-y-4">
              {solutions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
