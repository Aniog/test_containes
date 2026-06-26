import { Search, ShieldCheck, ClipboardCheck, Factory, PackageCheck, Ship } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 'sourcing',
    icon: Search,
    title: 'Supplier sourcing',
    desc: 'Find qualified factories from our verified network and from independent market research, matched to your product, price and quality target.',
  },
  {
    id: 'verification',
    icon: ShieldCheck,
    title: 'Factory verification',
    desc: 'Business license check, on-site visits, capacity, equipment and capability assessment. Avoid trading companies pretending to be factories.',
  },
  {
    id: 'sample',
    icon: ClipboardCheck,
    title: 'Sample & negotiation',
    desc: 'Manage samples, technical specs and price negotiation in Chinese. We push for fair MOQs, better terms and clear payment milestones.',
  },
  {
    id: 'production',
    icon: Factory,
    title: 'Production follow-up',
    desc: 'Track production timelines, raw material readiness and milestones. Weekly status updates so you always know where your order stands.',
  },
  {
    id: 'qc',
    icon: PackageCheck,
    title: 'Quality inspection (QC)',
    desc: 'AQL-based on-site inspections during production and before shipment, with photo and video reports. Stop defective shipments at the source.',
  },
  {
    id: 'shipping',
    icon: Ship,
    title: 'Shipping & logistics',
    desc: 'Sea, air and rail shipping with consolidation, export customs and door-to-door delivery options. Clear, itemized freight quotes.',
  },
]

export default function HomeServices() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-600">Services</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            One sourcing partner, from supplier search to shipment
          </h2>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            Pick the services you need, or use us end-to-end. Every step is handled by a single
            point of contact who speaks your language and reports in writing.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-red-50 text-red-600">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700"
          >
            View full services →
          </Link>
        </div>
      </div>
    </section>
  )
}
