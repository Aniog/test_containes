const STEPS = [
  {
    n: '01',
    title: 'Brief & requirements',
    desc: 'You share product specs, target price, MOQ, certifications and timeline. We sign an NDA on request and confirm scope.',
  },
  {
    n: '02',
    title: 'Supplier shortlist',
    desc: 'Within 5–7 business days you receive 3–5 pre-screened suppliers with quotes, capacity notes and risk flags.',
  },
  {
    n: '03',
    title: 'Factory verification',
    desc: 'We visit the shortlisted factories, audit business licenses, capacity and conditions, and share a written report.',
  },
  {
    n: '04',
    title: 'Samples & negotiation',
    desc: 'We manage samples, align golden sample, negotiate price, MOQ and payment terms in your interest.',
  },
  {
    n: '05',
    title: 'Production follow-up',
    desc: 'Weekly updates with photos. We flag risks on material, schedule and workmanship early — not at the last minute.',
  },
  {
    n: '06',
    title: 'QC & shipping',
    desc: 'AQL pre-shipment inspection, then we book freight (FOB, CIF or DDP), prepare documents and track to delivery.',
  },
]

export default function ProcessSteps() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-blue-700">
            Sourcing process
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            A clear six-step process, with you in control
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
            You approve every milestone — supplier shortlist, sample, production
            plan, inspection report and shipment — before we move to the next step.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="relative rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-sm font-semibold text-blue-700">{s.n}</span>
                <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
