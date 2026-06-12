import { AlertTriangle, CheckCircle2 } from 'lucide-react'

const ITEMS = [
  {
    problem: 'Suppliers found on B2B platforms turn out to be trading companies, not factories.',
    solution: 'We visit shortlisted factories on the ground and confirm production lines, capacity and ownership.',
  },
  {
    problem: 'Bulk order quality does not match the approved sample.',
    solution: 'DUPRO and pre-shipment AQL inspections — goods only ship after issues are corrected.',
  },
  {
    problem: 'Production delays without clear updates.',
    solution: 'Weekly progress reports with photos, line status and a named project manager.',
  },
  {
    problem: 'Communication breakdown across time zones and Mandarin.',
    solution: 'One bilingual project lead handling sales, factory, freight forwarder and you.',
  },
  {
    problem: 'Hidden costs in tooling, packaging, freight or customs.',
    solution: 'Itemized quotes in plain English. Landed cost before you commit, not after.',
  },
  {
    problem: 'Unstable shipping and unclear logistics responsibility.',
    solution: 'We coordinate consolidation, export docs and freight booking to your destination port.',
  },
]

export default function ProblemsWeSolve() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">Problems we solve</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            The usual headaches of buying from China — handled
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            Most issues happen long before the goods leave port. Our process is built to surface
            them early, in writing, and with someone accountable.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {ITEMS.map((item) => (
            <article
              key={item.problem}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">Problem</p>
                  <p className="mt-1 text-base font-medium text-slate-900">{item.problem}</p>
                </div>
              </div>
              <div className="mt-5 flex items-start gap-3 border-t border-slate-100 pt-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">Our approach</p>
                  <p className="mt-1 text-base text-slate-700">{item.solution}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
