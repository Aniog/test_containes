const steps = [
  {
    n: '01',
    title: 'Share your requirements',
    description:
      'Send us product details, target price, quantity, specs and any reference images or samples. We sign an NDA if needed.',
  },
  {
    n: '02',
    title: 'Supplier search & shortlist',
    description:
      'We identify 3–5 qualified factories, request quotes, verify business licenses and shortlist the strongest matches for you.',
  },
  {
    n: '03',
    title: 'Factory verification & samples',
    description:
      'We visit factories on the ground, audit capacity and compliance, then arrange samples and negotiate pricing on your behalf.',
  },
  {
    n: '04',
    title: 'Production follow-up & QC',
    description:
      'Once you place the order, we monitor production weekly and run inspections (pre-production, in-line and pre-shipment).',
  },
  {
    n: '05',
    title: 'Shipping coordination',
    description:
      'We organize consolidation, export packing, documentation and competitive sea or air freight to your warehouse.',
  },
  {
    n: '06',
    title: 'After-sales & re-orders',
    description:
      'We help resolve any quality claims, manage re-orders, and continue to optimize cost and lead time over future batches.',
  },
]

export default function HomeProcess() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
            Sourcing process
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            A clear, six-step process — no surprises
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            We work with global buyers in a structured way so you always know what is happening,
            what is next, and what each step will cost.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.n}
              className="rounded-xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-blue-700">{step.n}</span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
