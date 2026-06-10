import { AlertTriangle, CheckCircle2 } from 'lucide-react'

const ITEMS = [
  {
    problem: 'Suppliers on B2B platforms turn out to be traders, not real factories.',
    solution: 'We visit factories on the ground and verify business licenses, production lines, and certifications before you sign anything.',
  },
  {
    problem: 'Quoted prices look low — until tooling, packaging, and revisions are added.',
    solution: 'We negotiate a transparent cost breakdown so the final landed cost matches the quote.',
  },
  {
    problem: 'Quality slips between the golden sample and the actual shipment.',
    solution: 'We perform during-production and pre-shipment inspections against your approved sample and AQL standard.',
  },
  {
    problem: 'Production delays are discovered too late, after the season has already started.',
    solution: 'We track milestones weekly and flag risks early, so timelines and shipping windows stay realistic.',
  },
  {
    problem: 'Communication is slow and lost in translation across multiple time zones.',
    solution: 'A dedicated English-speaking sourcing manager is your single point of contact across all suppliers.',
  },
  {
    problem: 'Logistics and customs documents create surprises at the destination port.',
    solution: 'We work with vetted freight partners and prepare clean export documents to keep clearance smooth.',
  },
]

export default function ProblemsSolved() {
  return (
    <section className="py-16 md:py-24 bg-surface-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">Problems We Solve</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-brand-navy">
            What typically goes wrong — and how we prevent it
          </h2>
          <p className="mt-4 text-ink-700 text-lg">
            Most sourcing issues are predictable. Our process is built specifically to catch them
            before they cost you time, money, or customer trust.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {ITEMS.map((item, idx) => (
            <article key={idx} className="rounded-xl border border-ink-200 bg-white p-6 md:p-7">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-amber-50 text-amber-600">
                  <AlertTriangle className="h-4 w-4" />
                </span>
                <p className="text-sm font-medium text-ink-900 leading-relaxed">{item.problem}</p>
              </div>
              <div className="mt-4 flex items-start gap-3 border-t border-ink-200 pt-4">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <p className="text-sm text-ink-700 leading-relaxed">{item.solution}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
