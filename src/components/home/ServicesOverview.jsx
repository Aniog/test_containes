import { Search, ShieldCheck, ClipboardCheck, Factory, Truck, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist qualified manufacturers based on your product specs, MOQ, and budget requirements.',
    titleId: 'svc-supplier-sourcing-title',
    descId: 'svc-supplier-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify production capacity, certifications, equipment, and business legitimacy.',
    titleId: 'svc-factory-verification-title',
    descId: 'svc-factory-verification-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment, during-production, and container loading inspections following AQL standards.',
    titleId: 'svc-quality-inspection-title',
    descId: 'svc-quality-inspection-desc',
  },
  {
    id: 'production-followup',
    icon: Factory,
    title: 'Production Follow-up',
    description: 'Regular factory visits and progress reports to keep your order on schedule and within spec.',
    titleId: 'svc-production-followup-title',
    descId: 'svc-production-followup-desc',
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'We arrange freight forwarding, customs documentation, and door-to-door delivery worldwide.',
    titleId: 'svc-shipping-coordination-title',
    descId: 'svc-shipping-coordination-desc',
  },
  {
    id: 'negotiation-contracts',
    icon: FileText,
    title: 'Negotiation & Contracts',
    description: 'Price negotiation, payment term structuring, and supplier contract review to protect your interests.',
    titleId: 'svc-negotiation-contracts-title',
    descId: 'svc-negotiation-contracts-desc',
  },
]

const ServicesOverview = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-sm font-semibold text-brand-blue uppercase tracking-wide mb-3">Our Services</span>
          <h2 id="services-section-title" className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            End-to-End China Sourcing Support
          </h2>
          <p id="services-section-subtitle" className="text-brand-muted text-lg">
            From finding the right supplier to delivering goods at your door — we handle every step of the sourcing process.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="bg-brand-light rounded-xl border border-brand-border p-6 md:p-8 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 id={service.titleId} className="text-lg font-semibold text-brand-dark mb-2">
                  {service.title}
                </h3>
                <p id={service.descId} className="text-brand-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline"
          >
            View All Services Details →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
