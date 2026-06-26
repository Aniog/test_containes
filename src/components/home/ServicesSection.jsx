import { Search, Building2, ClipboardCheck, Eye, Ship, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description:
      'We identify and shortlist qualified manufacturers that match your product specs, budget, and volume requirements.',
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    description:
      'On-site audits to confirm factory credentials, production capacity, compliance certificates, and working conditions.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description:
      'Pre-shipment, during-production, and container-loading inspections to catch defects before goods leave China.',
  },
  {
    icon: Eye,
    title: 'Production Monitoring',
    description:
      'Regular follow-ups and milestone checks to keep your order on schedule and specifications intact.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description:
      'We coordinate freight forwarding, customs documentation, and last-mile delivery to your warehouse.',
  },
  {
    icon: FileText,
    title: 'Contract & Negotiation',
    description:
      'Support with pricing negotiation, contract terms, payment security, and incoterms to protect your interests.',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-accent mb-3">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4">
            End-to-End Sourcing Services
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            From finding the right factory to receiving goods at your door, we manage the entire sourcing process so you can focus on growing your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-surface rounded-xl border border-border-light p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <service.icon className="w-5 h-5 text-primary-accent" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">{service.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center text-sm font-semibold text-primary-accent hover:text-blue-700 transition-colors"
          >
            View all services
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
