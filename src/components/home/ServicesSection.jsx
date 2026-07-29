import { Link } from 'react-router-dom'
import { Search, Factory, ClipboardCheck, Eye, Ship, Settings } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable suppliers that match your product requirements, budget, and quality standards.',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    description: 'On-site audits to verify manufacturing capabilities, business licenses, production capacity, and compliance.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment inspections, during-production checks, and product testing to ensure your specifications are met.',
  },
  {
    icon: Eye,
    title: 'Production Monitoring',
    description: 'Regular progress reports, milestone tracking, and proactive issue resolution throughout the production cycle.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'We handle freight forwarding, documentation, customs clearance, and last-mile delivery to your warehouse.',
  },
  {
    icon: Settings,
    title: 'Product Development',
    description: 'From prototype refinement to packaging design, we help bring your product ideas to manufacture-ready status.',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4" id="services-section-title">
            Our Sourcing Services
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Comprehensive sourcing support from initial supplier search to final delivery at your doorstep.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-neutral-50 rounded-xl p-6 md:p-8 border border-neutral-100 hover:shadow-md hover:border-brand-100 transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-brand-100 transition-colors">
                <service.icon className="w-6 h-6 text-brand-500" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">{service.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-brand-500 font-semibold hover:text-brand-600 transition-colors"
          >
            View All Services &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}