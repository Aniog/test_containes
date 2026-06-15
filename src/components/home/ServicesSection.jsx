import { Link } from 'react-router-dom'
import { Search, Building2, ClipboardCheck, Factory, Ship, BarChart3 } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate reliable suppliers that match your specific requirements, quality standards, and budget.',
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify legitimacy, production capacity, quality systems, and compliance certifications.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment inspections, during-production checks, and container loading supervision to ensure quality standards.',
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    description: 'Regular updates and monitoring throughout the production process to ensure timelines and quality are maintained.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'Complete logistics support including freight forwarding, customs clearance, and door-to-door delivery arrangements.',
  },
  {
    icon: BarChart3,
    title: 'Price Negotiation',
    description: 'Leverage our local presence and expertise to negotiate better prices and payment terms with suppliers.',
  },
]

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Sourcing Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive sourcing solutions to help you import from China with confidence.
            From supplier identification to final delivery, we handle every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
          >
            View All Services
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
