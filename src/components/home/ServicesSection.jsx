import { Link } from 'react-router-dom'
import { Search, ClipboardCheck, Factory, Truck, Shield, BarChart3 } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'Find reliable suppliers matched to your product requirements, industry, and budget through our vetted network.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: ClipboardCheck,
    title: 'Supplier Verification',
    description: 'On-site factory audits, business license verification, capability assessments, and background checks.',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: Factory,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your specifications.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: BarChart3,
    title: 'Production Monitoring',
    description: 'Regular progress reports, production timeline tracking, and issue resolution throughout manufacturing.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Shield,
    title: 'Compliance & Testing',
    description: 'Product compliance verification, lab testing coordination, and certification assistance for global markets.',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'Freight booking, consolidation, customs documentation, and door-to-door delivery coordination.',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-700 mb-4">
            End-to-End Sourcing Services
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            From finding the right supplier to delivering products to your door, we manage every step of the China sourcing process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group p-6 lg:p-8 rounded-xl border border-gray-200 hover:border-navy-200 hover:shadow-md transition-all"
            >
              <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <service.icon className={`w-6 h-6 ${service.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-navy-700 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-navy-500 transition-colors"
          >
            View All Services
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}