import { Link } from 'react-router-dom'
import { Search, Building2, ClipboardCheck, Settings, Ship } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist verified manufacturers that match your product specifications, budget, and quality requirements.',
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    desc: 'On-site factory audits to verify licenses, production capacity, equipment, and compliance with international standards.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production, and pre-shipment inspections to ensure your products meet specifications.',
  },
  {
    icon: Settings,
    title: 'Production Follow-Up',
    desc: 'Regular factory visits and progress reports to keep your production on schedule and within budget.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'End-to-end logistics management including freight forwarding, customs clearance, and delivery to your destination.',
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-20 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Full-Service China Sourcing
          </h2>
          <p className="text-gray-600 leading-relaxed">
            From supplier discovery to final delivery, we handle every step of the sourcing process
            so you can focus on growing your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-tint rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 text-navy font-semibold text-sm rounded-lg border-2 border-gray-200 hover:border-navy transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
