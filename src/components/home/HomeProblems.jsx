import { AlertTriangle, Check } from 'lucide-react'

const problems = [
  {
    problem: 'Hard to tell a real factory from a trading company',
    solution: 'On-site factory verification, business license checks and capability audits.',
  },
  {
    problem: 'Language barriers and unclear quotes',
    solution: 'Bilingual sourcing managers and itemized quote comparisons in English.',
  },
  {
    problem: 'Quality issues only discovered after shipment arrives',
    solution: 'Independent QC at pre-production, in-line and pre-shipment stages.',
  },
  {
    problem: 'Production delays with no visibility',
    solution: 'Weekly production reports with photos, materials status and risk flags.',
  },
  {
    problem: 'High MOQs and unstable pricing',
    solution: 'Multi-supplier negotiation and consolidated orders to reach realistic MOQs.',
  },
  {
    problem: 'Complex shipping, customs and packaging',
    solution: 'Coordinated forwarders, export packing and full documentation handled for you.',
  },
]

export default function HomeProblems() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
            Problems we solve
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Common challenges of buying from China — handled
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Most issues with China orders are predictable. We have systems in place to manage
            them before they affect your business.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((p) => (
            <div
              key={p.problem}
              className="rounded-xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-amber-50 text-amber-600 flex-shrink-0">
                  <AlertTriangle className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                    The challenge
                  </h3>
                  <p className="mt-1 text-base font-semibold text-slate-900">{p.problem}</p>
                </div>
              </div>
              <div className="mt-4 flex items-start gap-3 rounded-lg bg-emerald-50 p-4">
                <Check className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-emerald-900 leading-relaxed">
                  <span className="font-semibold">How we solve it: </span>
                  {p.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
