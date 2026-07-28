import { Link } from 'react-router-dom'
import { Search, ClipboardCheck, Factory, PackageCheck, Ship, FileText } from 'lucide-react'
import SectionTitle from '../shared/SectionTitle'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist qualified suppliers based on your product specifications, MOQ, and budget requirements.',
  },
  {
    icon: ClipboardCheck,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify licenses, production capacity, equipment, and compliance with international standards.',
  },
  {
    icon: PackageCheck,
    title: 'Quality Control',
    description: 'Pre-shipment inspections, during-production checks, and container loading supervision to ensure product quality.',
  },
  {
    icon: Factory,
    title: 'Production Follow-Up',
    description: 'Regular updates on production progress, sample approvals, and timeline management to prevent delays.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including customs documentation, freight forwarding, and delivery tracking.',
  },
  {
    icon: FileText,
    title: 'Contract & Negotiation',
    description: 'We negotiate pricing and terms on your behalf and help draft supplier agreements that protect your interests.',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Full-Service China Sourcing"
          subtitle="From finding the right supplier to delivering goods to your door — we handle every step of the sourcing process."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 md:p-8 rounded-xl border border-border bg-surface hover:shadow-lg hover:border-primary/20 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-3">{service.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            View All Services
            <span className="text-lg">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
