import { Link } from 'react-router-dom'
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  ScrollText,
  Ship,
  Tag,
  Boxes,
} from 'lucide-react'

const SERVICES = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist 3–5 qualified manufacturers per product based on your specs, target price, MOQ and certifications.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site visits to confirm the factory is real, owns its production lines, and is the right fit for your category and order size.',
  },
  {
    icon: ScrollText,
    title: 'Sample Management',
    desc: 'Centralized sample requests, photos, video reviews and revisions — so you compare like for like before placing bulk orders.',
  },
  {
    icon: Tag,
    title: 'Price Negotiation',
    desc: 'We negotiate FOB / EXW pricing, payment terms and tooling fees in Mandarin, using local benchmarks to protect your margins.',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'Weekly updates with photos, line status, material checks and milestone reports so you always know where your order stands.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production (DUPRO) and pre-shipment inspections following AQL standards, with detailed reports.',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'Consolidation, export documents, customs clearance and freight booking — by sea, air or rail to your destination port.',
  },
  {
    icon: Boxes,
    title: 'Private Label / OEM',
    desc: 'Logo printing, custom packaging, retail-ready labeling and barcoding — coordinated directly with the factory.',
  },
]

export default function ServicesGrid({ title = 'What we do', kicker = 'Services', showCTA = true }) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">{kicker}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            One contact in China managing every step of your supply chain — from finding the right
            factory to delivering inspected goods to your warehouse.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => {
            const Icon = s.icon
            return (
              <article
                key={s.title}
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </article>
            )
          })}
        </div>

        {showCTA && (
          <div className="mt-12 flex flex-col items-start gap-4 rounded-xl bg-slate-50 p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Need a tailored quote?</h3>
              <p className="mt-1 text-sm text-slate-600">
                Tell us your product and target volume — we'll come back within one business day.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
