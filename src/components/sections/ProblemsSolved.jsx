import { AlertTriangle, CheckCircle2 } from 'lucide-react'

const ROWS = [
  {
    problem: 'Unreliable suppliers and fake factories',
    solution:
      'We verify every supplier with on-site visits, business license checks and production capacity audits before you commit.',
  },
  {
    problem: 'Language and time-zone barriers',
    solution:
      'A bilingual project manager handles all communication in your time zone, in clear written English.',
  },
  {
    problem: 'Quality drift between sample and production',
    solution:
      'We lock a golden sample and run AQL inspections during and before shipment, with photo/video evidence.',
  },
  {
    problem: 'Hidden fees and unclear quotes',
    solution:
      'Transparent supplier quotes plus a clear, fixed sourcing fee. No commissions hidden inside the unit price.',
  },
  {
    problem: 'Production delays without warning',
    solution:
      'Weekly production updates and early risk flags on materials, labor and schedule — not surprises before shipment.',
  },
  {
    problem: 'Customs, documents and freight headaches',
    solution:
      'We coordinate sea, air and rail freight, handle documents and offer DDP delivery to your warehouse.',
  },
]

export default function ProblemsSolved() {
  return (
    <section className="border-b border-slate-200 bg-slate-900 py-16 text-slate-200 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-blue-300">
            Problems we solve
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            The usual sourcing problems, handled
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
            Buyers usually come to us after a bad experience. Here is what we
            fix, and how.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {ROWS.map((r) => (
            <div
              key={r.problem}
              className="rounded-xl border border-slate-800 bg-slate-800/50 p-6 md:p-8"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-rose-500/10 text-rose-400">
                  <AlertTriangle className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-rose-300">
                    Problem
                  </p>
                  <p className="mt-1 text-base font-semibold text-white">
                    {r.problem}
                  </p>
                </div>
              </div>
              <div className="mt-5 flex items-start gap-3 border-t border-slate-800 pt-5">
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-emerald-300">
                    Our approach
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">
                    {r.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
