const steps = [
  {
    n: '01',
    title: 'Send your brief',
    desc: 'Share product specs, target price, quantity and certifications. We confirm scope and reply with a clear sourcing quote.',
  },
  {
    n: '02',
    title: 'Supplier shortlist',
    desc: 'We identify 3–5 verified factories, compare quotes side by side, and recommend the best fit for your order.',
  },
  {
    n: '03',
    title: 'Samples & negotiation',
    desc: 'We collect samples, run a factory audit if needed, then negotiate price, MOQ and payment terms on your behalf.',
  },
  {
    n: '04',
    title: 'Production follow-up',
    desc: 'Weekly progress updates with photos and a clear timeline. We flag delays early and propose solutions.',
  },
  {
    n: '05',
    title: 'Quality inspection',
    desc: 'AQL inspections during and before shipment. You receive a full report with photos and video before goods leave the factory.',
  },
  {
    n: '06',
    title: 'Shipping & delivery',
    desc: 'Consolidation, export docs, sea/air/rail freight and customs support — door-to-door if you need it.',
  },
]

export default function ProcessSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.18em] font-semibold text-brand-blue">
              Sourcing process
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-brand-navy">
              A clear, six-step process from brief to delivery
            </h2>
            <p className="mt-4 text-base text-brand-muted leading-relaxed">
              Every step is documented in writing. You stay in control of approvals,
              we handle the day-to-day work on the ground in China.
            </p>
          </div>

          <div className="lg:col-span-8">
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {steps.map((s) => (
                <li
                  key={s.n}
                  className="rounded-xl border border-brand-border bg-white p-6 hover:shadow-md transition"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-bold text-brand-blue">{s.n}</span>
                    <h3 className="text-base md:text-lg font-semibold text-brand-navy">{s.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-brand-muted leading-relaxed">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
