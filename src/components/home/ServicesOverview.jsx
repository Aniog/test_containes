import { Search, ShieldCheck, ClipboardCheck, Factory, Truck, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist qualified manufacturers based on your product specs, MOQ, and budget requirements.',
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify production capacity, certifications, equipment, and business legitimacy.',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment, during-production, and container loading inspections following AQL standards.',
  },
  {
    id: 'production-followup',
    icon: Factory,
    title: 'Production Follow-up',
    description: 'Regular factory visits and progress reports to keep your order on schedule and within spec.',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'Full export documentation, freight booking, customs clearance, and door-to-door delivery coordination.',
  },
  {
    id: 'negotiation',
    icon: FileText,
    title: 'Price Negotiation',
    description: 'Leverage our local market knowledge to negotiate better pricing, payment terms, and trade conditions.',
  },
]

const ServicesOverview = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            Our Sourcing Services
          </h2>
          <p id="services-subtitle" className="mt-4 text-text-body text-lg">
            From finding the right supplier to delivering goods at your door — we handle every step of the China sourcing process.
          </p>
          <div className="w-16 h-1 bg-accent mx-auto mt-4" />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-border p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{service.title}</h3>
                <p className="text-text-body text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-medium transition-colors"
          >
            View all services in detail →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
