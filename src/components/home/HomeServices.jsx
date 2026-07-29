import { Link } from 'react-router-dom'
import { Search, Shield, ClipboardCheck, Truck, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate reliable manufacturers across China based on your product specifications, quality requirements, and budget.',
    link: '/services',
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'On-site audits to verify business licenses, production capacity, quality management systems, and social compliance before you place orders.',
    link: '/services',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections with detailed reports and photo documentation to ensure quality standards.',
    link: '/services',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including freight forwarding, customs documentation, warehousing, and delivery to your destination port.',
    link: '/services',
  },
]

export default function HomeServices() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">What We Do</span>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Complete Sourcing Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From finding the right supplier to delivering products to your door, we handle every step
            of the sourcing process so you can focus on growing your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
              <Link
                to={service.link}
                className="text-blue-700 font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
