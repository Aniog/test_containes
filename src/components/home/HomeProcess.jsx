const steps = [
  {
    n: '01',
    title: 'Tell us your requirements',
    desc: 'Share product details, target price, quantity, and any references. We sign an NDA on request.',
  },
  {
    n: '02',
    title: 'Supplier search & quotation',
    desc: 'We shortlist 3–5 suitable factories, request samples and quotations, and compare them in a clear report.',
  },
  {
    n: '03',
    title: 'Factory verification',
    desc: 'Our team visits the chosen factory on site to confirm capacity, certifications and reliability before you place an order.',
  },
  {
    n: '04',
    title: 'Order placement & sampling',
    desc: 'We help negotiate terms, manage sample approvals and revisions, and prepare a clear production specification.',
  },
  {
    n: '05',
    title: 'Production follow-up & QC',
    desc: 'We track production weekly and run AQL-based inspections (during production and pre-shipment) with detailed reports.',
  },
  {
    n: '06',
    title: 'Shipping to your door',
    desc: 'We consolidate, prepare export documents and book shipping by sea, air or rail, all the way to your warehouse.',
  },
];

export default function HomeProcess() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Sourcing process
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            A clear, step-by-step way to buy from China
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Every project follows the same transparent process, with regular
            updates and clear documentation at each stage.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative rounded-xl border border-slate-200 bg-white p-6 md:p-7 shadow-card"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand text-white font-bold">
                  {s.n}
                </span>
                <h3 className="text-lg font-semibold text-slate-900">
                  {s.title}
                </h3>
              </div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
