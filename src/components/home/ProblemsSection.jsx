import { AlertTriangle, XCircle } from 'lucide-react'

const problems = [
  'Sent money to a factory that disappeared',
  'Received goods that did not match the sample',
  'Struggled to communicate with Chinese suppliers',
  'Missed production deadlines with no warning',
  'Paid more than quoted due to hidden fees',
  'Dealt with customs issues and delayed shipments',
]

const solutions = [
  'Verified factories with documented audits before any payment',
  'Pre-shipment inspections on every order — no surprises',
  'Bilingual team handling all communication for you',
  'Weekly production reports with milestone tracking',
  'Transparent pricing with no hidden costs',
  'End-to-end logistics management and customs support',
]

export default function ProblemsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Problems We Solve
          </span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Sourcing from China Should Not Be a Gamble
          </h2>
          <p className="mt-4 text-slate-500">
            Every week, buyers lose time and money to unreliable suppliers. Here is how we prevent that.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-red-50 p-6 md:p-8">
            <div className="mb-5 flex items-center gap-2 text-red-600">
              <AlertTriangle className="h-5 w-5" />
              <span className="font-semibold">Common Problems</span>
            </div>
            <ul className="flex flex-col gap-3">
              {problems.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-emerald-50 p-6 md:p-8">
            <div className="mb-5 flex items-center gap-2 text-emerald-700">
              <AlertTriangle className="h-5 w-5" />
              <span className="font-semibold">How We Fix Them</span>
            </div>
            <ul className="flex flex-col gap-3">
              {solutions.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
                    {i + 1}
                  </span>
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
