const steps = [
  {
    n: '01',
    title: 'Tell us your requirements',
    desc: 'Share product specs, target price, quantity, certifications and timeline. We confirm scope and quote our service fee.',
  },
  {
    n: '02',
    title: 'We source & shortlist suppliers',
    desc: 'We research factories, verify business licenses and certifications, and shortlist 3–5 qualified suppliers with comparison.',
  },
  {
    n: '03',
    title: 'Samples & price negotiation',
    desc: 'We request samples, evaluate quality together with you, negotiate price, MOQ and payment terms in Chinese.',
  },
  {
    n: '04',
    title: 'Order placement & production',
    desc: 'We place the PO, manage deposit milestones and follow production in person, with weekly status reports.',
  },
  {
    n: '05',
    title: 'Quality inspection',
    desc: 'On-site QC during production (DUPRO) and before shipment (PSI) using AQL standards, with photo and video reports.',
  },
  {
    n: '06',
    title: 'Shipping & delivery',
    desc: 'Booking, export customs, consolidation if needed, and door-to-door or port-to-port delivery to your country.',
  },
]

export default function HomeProcess() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-600">Sourcing process</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            A clear, step-by-step process you can follow
          </h2>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            No surprises. Every project follows the same six-step process, with written reports and approvals between each stage.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.n}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-sm font-semibold text-red-600">{step.n}</span>
                <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
