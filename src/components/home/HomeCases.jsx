import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const cases = [
  {
    id: 'us-homeware-importer',
    industry: 'Homeware',
    region: 'United States',
    title: 'Helped a US homeware brand cut defect rate from 6.1% to 0.8%',
    summary:
      'Replaced an unreliable factory in Guangdong, ran AQL pre-shipment inspections on every order, and standardized packaging spec.',
    metrics: [
      { label: 'Defect rate', value: '6.1% → 0.8%' },
      { label: 'On-time shipments', value: '74% → 98%' },
      { label: 'Annual orders', value: '12 containers' },
    ],
    imgId: 'case-homeware-us-1d92ee',
  },
  {
    id: 'eu-electronics-startup',
    industry: 'Consumer electronics',
    region: 'Germany',
    title: 'Found and verified an OEM partner for an EU audio startup',
    summary:
      'Shortlisted 5 factories, audited 2, ran sampling and certification review, and managed first-batch production end to end.',
    metrics: [
      { label: 'Suppliers screened', value: '23' },
      { label: 'Time to first order', value: '11 weeks' },
      { label: 'Compliance', value: 'CE, RoHS, FCC' },
    ],
    imgId: 'case-electronics-de-7af223',
  },
  {
    id: 'au-apparel-wholesaler',
    industry: 'Apparel',
    region: 'Australia',
    title: 'Consolidated 4 apparel suppliers into a single shipment plan',
    summary:
      'Built a shared production calendar, consolidated cargo at our Yiwu warehouse, and saved freight by switching from LCL to FCL.',
    metrics: [
      { label: 'Freight saving', value: '~22%' },
      { label: 'Suppliers managed', value: '4' },
      { label: 'Lead time', value: '−18 days' },
    ],
    imgId: 'case-apparel-au-3c4912',
  },
];

export default function HomeCases() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Case studies
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Real projects, measurable outcomes
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              A few examples of how we have helped buyers improve quality,
              reduce risk and ship on time.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center text-sm font-semibold text-brand hover:text-brand-700"
          >
            All case studies
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <article
              key={c.id}
              className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  alt={c.title}
                  className="h-full w-full object-cover"
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[case-${c.id}-summary] [case-${c.id}-title] ${c.industry} factory china`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-xs">
                  <span className="inline-flex items-center rounded-full bg-brand/10 px-2.5 py-1 font-medium text-brand">
                    {c.industry}
                  </span>
                  <span className="text-slate-500">{c.region}</span>
                </div>
                <h3
                  id={`case-${c.id}-title`}
                  className="mt-3 text-lg font-semibold text-slate-900"
                >
                  {c.title}
                </h3>
                <p
                  id={`case-${c.id}-summary`}
                  className="mt-2 text-sm text-slate-600 leading-relaxed"
                >
                  {c.summary}
                </p>
                <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-slate-100 pt-4">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <dt className="text-[11px] uppercase tracking-wide text-slate-500">
                        {m.label}
                      </dt>
                      <dd className="mt-1 text-sm font-semibold text-slate-900">
                        {m.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
