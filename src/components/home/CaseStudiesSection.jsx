import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export const caseStudies = [
  {
    id: 'eu-kitchenware-brand',
    industry: 'Home & Kitchen',
    region: 'European brand',
    title: 'Switching kitchenware supplier without losing a season',
    summary:
      'A European housewares brand needed to replace their existing supplier mid-season after repeated quality issues. We sourced and audited two alternative factories in Chaozhou, ran sample comparisons and shipped a 2 × 40HQ replacement order in 9 weeks.',
    results: [
      'Defect rate reduced from 6.2% to under 1.5%',
      'Unit cost down 8% vs. previous supplier',
      'Shipped before the holiday season deadline',
    ],
    titleId: 'home-case-eu-kitchenware-brand-title',
    descId: 'home-case-eu-kitchenware-brand-desc',
  },
  {
    id: 'us-amazon-seller',
    industry: 'Consumer Electronics',
    region: 'US Amazon seller',
    title: 'Private-label launch with FBA-ready packaging',
    summary:
      'An Amazon seller wanted to launch a private-label Bluetooth speaker line. We shortlisted four Shenzhen factories, managed sampling, certifications (FCC, CE), and coordinated FBA-prep packaging and direct shipping to US fulfilment centers.',
    results: [
      '4 verified suppliers shortlisted in 10 days',
      'Pre-shipment inspection AQL 2.5 passed',
      'Door-to-FBA delivery in 38 days',
    ],
    titleId: 'home-case-us-amazon-seller-title',
    descId: 'home-case-us-amazon-seller-desc',
  },
  {
    id: 'au-promotional-distributor',
    industry: 'Promotional Gifts',
    region: 'Australian distributor',
    title: 'Consolidating 12 SKUs from multiple suppliers',
    summary:
      'An Australian promotional products distributor was buying 12 SKUs from 7 different Yiwu suppliers. We consolidated production follow-up, ran a single mixed-container inspection, and coordinated one FCL shipment from Ningbo.',
    results: [
      '7 suppliers managed under one PO process',
      '1 consolidated 40HQ shipment vs. 4 LCLs',
      'Logistics cost reduced by ~22%',
    ],
    titleId: 'home-case-au-promotional-distributor-title',
    descId: 'home-case-au-promotional-distributor-desc',
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] font-semibold text-brand-blue">
              Case studies
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-brand-navy">
              Real sourcing projects, real outcomes
            </h2>
            <p className="mt-4 text-base text-brand-muted leading-relaxed">
              A few representative examples of recent client work. Names are kept confidential —
              we can share more details on request under NDA.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center text-sm font-semibold text-brand-blue hover:text-brand-navy"
          >
            View all case studies
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((c) => (
            <article
              key={c.id}
              className="rounded-xl border border-brand-border bg-white overflow-hidden flex flex-col hover:shadow-md transition"
            >
              <div className="aspect-[3/2] bg-slate-100 overflow-hidden">
                <img
                  alt={c.title}
                  className="w-full h-full object-cover"
                  data-strk-img-id={`home-case-${c.id}-img`}
                  data-strk-img={`[${c.descId}] [${c.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-brand-muted">
                  <span className="font-semibold text-brand-blue">{c.industry}</span>
                  <span>·</span>
                  <span>{c.region}</span>
                </div>
                <h3 id={c.titleId} className="mt-2 text-lg font-semibold text-brand-navy">
                  {c.title}
                </h3>
                <p id={c.descId} className="mt-2 text-sm text-brand-muted leading-relaxed flex-1">
                  {c.summary}
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-brand-ink">
                  {c.results.map((r) => (
                    <li key={r} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
