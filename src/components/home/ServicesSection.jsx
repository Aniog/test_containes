import { Link } from 'react-router-dom'
import { Search, Shield, ClipboardCheck, Clock, Truck, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate manufacturers across China to find the right match for your product requirements, budget, and quality standards.',
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'On-site audits to verify business licenses, production capacity, quality management systems, and social compliance before you place orders.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections with detailed reports and photos to ensure your products meet specifications.',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    description: 'Regular updates and milestone tracking throughout the manufacturing process so you always know the status of your orders.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'We handle logistics from factory pickup to port loading, customs documentation, and freight forwarding to your destination.',
  },
]

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 id="services-title" className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Sourcing Services
          </h2>
          <p className="text-gray-600">
            End-to-end sourcing support tailored to your business needs.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-lg bg-blue-50 p-3">
                <service.icon className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">{service.title}</h3>
              <p className="mb-4 text-sm text-gray-600">{service.description}</p>
              <Link
                to="/services"
                className="inline-flex items-center text-sm font-medium text-blue-900 hover:underline"
              >
                Learn more
                <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/services" className="btn-outline">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
