import { AlertTriangle, XCircle, CheckCircle } from 'lucide-react'

const problems = [
  { text: 'Suppliers disappear after receiving deposits' },
  { text: 'Product quality does not match samples' },
  { text: 'Hidden costs and last-minute price changes' },
  { text: 'Production delays with no communication' },
  { text: 'Difficulty verifying factory credentials remotely' },
  { text: 'Customs and shipping complications' },
]

const solutions = [
  { text: 'On-site factory audits before any payment' },
  { text: 'Independent inspections at every stage' },
  { text: 'Clear, itemized quotations with no surprises' },
  { text: 'Weekly progress reports with real photos' },
  { text: 'Verified supplier network with references' },
  { text: 'End-to-end logistics and customs support' },
]

export default function ProblemsSection() {
  return (
    <section className="w-full bg-slate-900 py-16 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Problems We Solve</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-400">
            Sourcing from China comes with real risks. Here is how we protect your business.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-red-900/40 bg-red-950/20 p-6">
            <div className="mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-400" />
              <h3 className="text-lg font-semibold text-red-100">Common Risks</h3>
            </div>
            <ul className="space-y-3">
              {problems.map((p) => (
                <li key={p.text} className="flex items-start gap-2 text-sm text-slate-300">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                  <span>{p.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-emerald-900/40 bg-emerald-950/20 p-6">
            <div className="mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-400" />
              <h3 className="text-lg font-semibold text-emerald-100">How We Protect You</h3>
            </div>
            <ul className="space-y-3">
              {solutions.map((s) => (
                <li key={s.text} className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{s.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
