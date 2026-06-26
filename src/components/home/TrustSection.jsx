import { AlertTriangle, CheckCircle2 } from 'lucide-react'

const problems = [
  'Unreliable suppliers who disappear after payment',
  'Language barriers and slow communication',
  'Hidden costs and unexpected quality issues',
  'Delays with no visibility on production status',
  'Complicated shipping and customs paperwork',
]

const solutions = [
  'Verified factory audits and background checks',
  'Bilingual account managers based in Shenzhen',
  'Transparent pricing with no hidden fees',
  'Weekly reports with photos and milestone updates',
  'End-to-end logistics and documentation support',
]

export default function TrustSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-300 mb-3">
            Why Buyers Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Problems We Solve
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Sourcing from China can be risky. Here is how we reduce that risk for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              Common Sourcing Risks
            </h3>
            <ul className="space-y-4">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-3 text-slate-300 text-sm">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              How We Fix Them
            </h3>
            <ul className="space-y-4">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-400 shrink-0" />
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
