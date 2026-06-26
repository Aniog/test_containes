import { AlertTriangle, ShieldCheck } from 'lucide-react'

const problems = [
  {
    problem: 'You can\'t tell trading companies from real factories.',
    answer: 'We visit and verify factories in person, check business licenses, scope of business and production lines, so you pay factory price for factory work.',
  },
  {
    problem: 'Suppliers ghost you, miss deadlines or change specs without telling you.',
    answer: 'You have one accountable Chinese-speaking project manager who reports weekly on progress, samples and any changes — in writing.',
  },
  {
    problem: 'Quality drifts between samples and bulk production.',
    answer: 'We run AQL-based inspections during and after production at the factory, with photo and video reports before goods leave China.',
  },
  {
    problem: 'Shipping costs and Incoterms are confusing or inflated.',
    answer: 'We give itemized freight quotes from multiple forwarders, explain FOB / CIF / DDP options, and book what is best for your route.',
  },
  {
    problem: 'You worry about deposits, payment safety and disputes.',
    answer: 'We structure payments by milestone, hold suppliers to written specs, and act as your local presence in case of disputes.',
  },
]

export default function HomeProblems() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-600">Problems we solve</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            The real problems of sourcing from China — and how we fix them
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {problems.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-md bg-red-50 text-red-600">
                  <AlertTriangle className="h-4 w-4" />
                </span>
                <p className="text-base font-semibold text-slate-900">{item.problem}</p>
              </div>
              <div className="mt-4 flex items-start gap-3 rounded-md bg-slate-50 p-4">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <p className="text-sm leading-relaxed text-slate-700">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
