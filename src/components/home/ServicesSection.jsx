import { Link } from 'react-router-dom'
import { Search, ClipboardCheck, Eye, PackageCheck, Ship, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified manufacturers that match your product specs, budget, and volume requirements.',
  },
  {
    icon: ClipboardCheck,
    title: 'Factory Verification',
    desc: 'On-site audits, license checks, and capability assessments to confirm your supplier is legitimate and capable.',
  },
  {
    icon: Eye,
    title: 'Quality Control',
    desc: 'Pre-production, in-line, and pre-shipment inspections to catch defects before goods leave the factory.',
  },
  {
    icon: PackageCheck,
    title: 'Production Follow-Up',
    desc: 'Weekly progress reports, milestone tracking, and proactive issue resolution to keep your order on schedule.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'Freight forwarding, customs documentation, and logistics management from factory door to your warehouse.',
  },
]

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            End-to-End Sourcing Support
          </h2>
          <p className="mt-4 text-slate-500">
            From finding the right factory to delivering goods to your door, we handle every step of the sourcing process.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group overflow-hidden rounded-lg border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="p-6">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/services" className="btn-secondary gap-2">
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
