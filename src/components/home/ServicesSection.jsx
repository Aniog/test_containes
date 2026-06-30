import { Link } from 'react-router-dom'
import { Search, Shield, ClipboardCheck, Eye, Truck, Package } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and vet suppliers that match your product specifications, budget, and quality requirements. Access our network of pre-screened manufacturers.',
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    desc: 'On-site audits to verify manufacturing capabilities, certifications, production capacity, and compliance with international standards.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment inspections, during-production checks, and detailed quality reports. We catch issues before your products leave the factory.',
  },
  {
    icon: Eye,
    title: 'Production Follow-Up',
    desc: 'Regular progress updates, milestone tracking, and proactive communication with factories to keep your orders on schedule.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'Sea freight, air freight, or express shipping arranged and monitored. Customs documentation handled. Door-to-door options available.',
  },
  {
    icon: Package,
    title: 'Sample Management',
    desc: 'Request, collect, and evaluate samples from multiple suppliers. We manage the logistics so you can compare quality before committing.',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            End-to-End Sourcing Support
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive services covering every stage of the sourcing process, from supplier discovery to delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-brand-200 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-medium"
          >
            View All Services <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}