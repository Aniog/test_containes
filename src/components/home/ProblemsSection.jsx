import { AlertTriangle, CheckCircle2 } from 'lucide-react'

const items = [
  {
    problem: 'Unverified suppliers and trading companies posing as factories',
    solution: 'We physically visit factories, check business licenses, production lines and certificates before you commit.',
  },
  {
    problem: 'Inconsistent quality between samples and bulk production',
    solution: 'AQL inspections during and before shipment with photo and video reports, plus golden samples held in our office.',
  },
  {
    problem: 'Hidden costs in price quotations',
    solution: 'Itemized quotes covering FOB, packaging, certifications and freight — no kickbacks, no hidden margins.',
  },
  {
    problem: 'Production delays without warning',
    solution: 'Weekly production reports and on-site visits. We flag issues early and propose realistic recovery plans.',
  },
  {
    problem: 'Communication gaps and time-zone friction',
    solution: 'A dedicated English-speaking project manager based in China handles every supplier touchpoint for you.',
  },
  {
    problem: 'Complex export, customs and logistics',
    solution: 'We coordinate consolidation, export documents, sea/air/rail freight and customs support end-to-end.',
  },
]

export default function ProblemsSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.18em] font-semibold text-brand-blue">
            Problems we solve
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-brand-navy">
            Common sourcing risks — and how we handle them
          </h2>
          <p className="mt-4 text-base text-brand-muted leading-relaxed">
            We focus on the practical issues that derail orders. Here&apos;s how we address
            the ones we see most often.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((it) => (
            <div key={it.problem} className="rounded-xl border border-brand-border bg-white p-6">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-600 flex-shrink-0">
                  <AlertTriangle className="h-5 w-5" />
                </span>
                <p className="text-sm md:text-base font-semibold text-brand-navy">
                  {it.problem}
                </p>
              </div>
              <div className="mt-4 flex items-start gap-3 pt-4 border-t border-brand-border">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <p className="text-sm text-brand-muted leading-relaxed">{it.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
