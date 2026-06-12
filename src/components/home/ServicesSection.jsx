import { Link } from 'react-router-dom'
import {
  Search,
  ClipboardCheck,
  Package,
  HandCoins,
  Eye,
  Factory,
  Ship,
  Tag,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Search & Verification',
    desc: 'We identify and screen factories that match your specs, budget and certifications, and verify their business licenses on the ground.',
  },
  {
    icon: ClipboardCheck,
    title: 'Factory Audit',
    desc: 'On-site audits covering production capacity, equipment, QC processes, social compliance and certificates.',
  },
  {
    icon: Package,
    title: 'Sample Management',
    desc: 'We collect, compare and ship samples from multiple suppliers so you can evaluate quality before placing an order.',
  },
  {
    icon: HandCoins,
    title: 'Price Negotiation',
    desc: 'Local-market negotiation on unit price, MOQ, payment terms and lead time, on your behalf and in your interest.',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'Weekly production updates, photos and timeline tracking — so you always know where your order stands.',
  },
  {
    icon: Eye,
    title: 'Quality Inspection',
    desc: 'Pre-shipment inspections (AQL), during-production checks, and full container loading supervision.',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'Consolidation, export documents, FOB/CIF/DDP shipping by sea, air or rail, customs clearance support.',
  },
  {
    icon: Tag,
    title: 'Private Label / OEM',
    desc: 'Custom packaging, logo printing, manuals and barcoding for your brand, coordinated end-to-end.',
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.18em] font-semibold text-brand-blue">
            What we do
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-brand-navy">
            End-to-end sourcing services for B2B importers
          </h2>
          <p className="mt-4 text-base md:text-lg text-brand-muted leading-relaxed">
            One point of contact across supplier search, quality control and shipping.
            We work as your local team in China, on a transparent service-fee basis.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="rounded-xl border border-brand-border bg-white p-6 hover:shadow-md hover:-translate-y-0.5 transition"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-surface text-brand-blue">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-base md:text-lg font-semibold text-brand-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-brand-muted leading-relaxed">{s.desc}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-10">
          <Link
            to="/services"
            className="inline-flex items-center text-sm font-semibold text-brand-blue hover:text-brand-navy"
          >
            View all services
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
