import { AlertTriangle, CheckCircle2 } from 'lucide-react'

const ROWS = [
  {
    problem: 'Suppliers on B2B marketplaces are often trading companies, not real factories.',
    solution: 'We visit factories in person and confirm machinery, workshop size, and business license.',
  },
  {
    problem: 'Samples look great, but mass production quality drops below the agreed standard.',
    solution: 'AQL-based inspections during and before shipment, with photo and video evidence.',
  },
  {
    problem: 'Delivery dates slip with no warning until the deadline is already missed.',
    solution: 'Weekly production reports from raw materials to packing, so you see issues early.',
  },
  {
    problem: 'Suppliers quote in Chinese WeChat threads with unclear terms and hidden fees.',
    solution: 'Clear English quotations, written contracts, and transparent fees you approve in advance.',
  },
  {
    problem: 'Shipping freight, customs, and consolidation feel risky and expensive.',
    solution: 'Trusted freight forwarders, container consolidation, and door-to-door coordination.',
  },
  {
    problem: 'It is hard to compare suppliers without speaking Mandarin or visiting China.',
    solution: 'We compare 5-10 candidates on price, capability and risk so you can decide on facts.',
  },
]

export default function Problems() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E63946]">Problems We Solve</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#0B2545]">
            The real risks of sourcing from China &mdash; and how we handle them
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            We don't claim sourcing is easy. We do claim that with the right process and an on-the-ground
            team, the typical problems below become manageable instead of expensive surprises.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {ROWS.map((row, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-amber-50 text-amber-600 shrink-0">
                  <AlertTriangle className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">The problem</p>
                  <p className="mt-1 text-sm text-slate-700 leading-relaxed">{row.problem}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-emerald-50 text-emerald-600 shrink-0">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">How we handle it</p>
                  <p className="mt-1 text-sm text-slate-700 leading-relaxed">{row.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
