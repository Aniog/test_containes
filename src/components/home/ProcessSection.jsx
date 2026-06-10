export const PROCESS_STEPS = [
  {
    n: '01',
    title: 'Brief & requirements',
    desc: 'Send us your product specs, target price, MOQ, and any references. We confirm scope and timeline within 24 hours.',
  },
  {
    n: '02',
    title: 'Supplier shortlist',
    desc: 'We screen the market and shortlist 3–6 qualified factories, with a clear quotation comparison and MOQ analysis.',
  },
  {
    n: '03',
    title: 'Sampling & verification',
    desc: 'We arrange samples and visit the shortlisted factories on-site to verify capability, compliance, and capacity.',
  },
  {
    n: '04',
    title: 'Order placement',
    desc: 'We negotiate final terms, review the contract, and place the production order on your behalf or jointly.',
  },
  {
    n: '05',
    title: 'Production & QC',
    desc: 'Weekly production updates, in-line checks, and a pre-shipment inspection against an AQL standard before payment release.',
  },
  {
    n: '06',
    title: 'Shipping & delivery',
    desc: 'We consolidate the cargo, prepare export documents, and coordinate door-to-door delivery to your warehouse.',
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="py-16 md:py-24 bg-surface-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">Sourcing Process</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-brand-navy">
            A clear, step-by-step way of working
          </h2>
          <p className="mt-4 text-ink-700 text-lg">
            We follow the same disciplined process for every project — so milestones, costs, and
            quality standards are agreed upfront and tracked openly.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step) => (
            <li key={step.n} className="relative rounded-xl border border-ink-200 bg-white p-6 md:p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-navy text-white text-sm font-semibold">
                  {step.n}
                </span>
                <h3 className="text-lg font-semibold text-brand-navy">{step.title}</h3>
              </div>
              <p className="mt-3 text-sm text-ink-700 leading-relaxed">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
