import { Link } from 'react-router-dom'
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  Layers,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description:
      'We identify multiple qualified manufacturers for your product, compare their quotes, MOQs and lead times, and shortlist the best fit.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description:
      'On-site visits to confirm the factory is real, operating at the claimed scale, and capable of producing your product safely and consistently.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description:
      'Pre-production, during-production and pre-shipment inspections by our QC team. Detailed photo and video reports with AQL sampling.',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    description:
      'Weekly updates on production progress, materials, sub-suppliers, and risk flags so you stay informed without chasing the factory.',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    description:
      'Consolidation, export packing, customs clearance and competitive sea or air freight quotes from trusted forwarders.',
  },
  {
    icon: Layers,
    title: 'Full Sourcing Service',
    description:
      'End-to-end management of your China order — from supplier search to delivered goods, under one transparent service fee.',
  },
]

export default function HomeServices() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
            Services
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            One sourcing team, every step from supplier to shipment
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Whether you need a single quality inspection or full management of a China
            order, we provide practical support tailored to your stage and budget.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-slate-200 bg-white p-6 md:p-7 hover:border-blue-200 hover:shadow-md transition"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            Explore all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
