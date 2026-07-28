import { Link } from 'react-router-dom'
import { Search, Building2, ClipboardCheck, Timer, Ship, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate manufacturers matching your product requirements, budget, and quality standards.',
    link: '/services',
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    description: 'On-site audits to confirm business licenses, production capacity, and quality management systems.',
    link: '/services',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to ensure your orders meet specifications.',
    link: '/services',
  },
  {
    icon: Timer,
    title: 'Production Follow-up',
    description: 'Regular updates and progress tracking so you always know where your order stands.',
    link: '/services',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'From factory pickup to port loading, we handle logistics documentation and freight forwarding.',
    link: '/services',
  },
]

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-blue-800 font-semibold text-sm uppercase tracking-wide">What We Do</span>
          <h2 className="heading-2 mt-2 mb-4">End-to-End Sourcing Services</h2>
          <p className="body-text max-w-2xl mx-auto">
            From finding the right supplier to delivering goods to your warehouse, we manage every step of the sourcing process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div key={service.title} className="card hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <service.icon className="w-6 h-6 text-blue-800" />
              </div>
              <h3 className="heading-3 mb-2">{service.title}</h3>
              <p className="body-text text-sm mb-4">{service.description}</p>
              <Link to={service.link} className="inline-flex items-center text-blue-800 font-medium text-sm hover:text-blue-700">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
