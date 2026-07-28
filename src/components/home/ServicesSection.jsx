import { Link } from 'react-router-dom'
import { Search, Factory, ClipboardCheck, Eye, Ship, Box } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable suppliers in China that match your product requirements, budget, and quality standards.',
    link: '/services#sourcing',
  },
  {
    icon: Factory,
    title: 'Factory Audits',
    description: 'Our team visits factories in person to assess capabilities, production capacity, certifications, and working conditions.',
    link: '/services#audits',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment inspections, during-production checks, and random sampling to ensure products meet your specifications.',
    link: '/services#inspection',
  },
  {
    icon: Eye,
    title: 'Production Monitoring',
    description: 'We track your production timeline, identify bottlenecks early, and keep you informed with regular progress reports.',
    link: '/services#monitoring',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    description: 'Coordination of freight, customs documentation, and shipping arrangements to deliver your goods on time.',
    link: '/services#shipping',
  },
  {
    icon: Box,
    title: 'Sample Management',
    description: 'We manage the entire sample process — from requesting samples to reviewing and approving before bulk production.',
    link: '/services#samples',
  },
]

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <h2 className="section-title">Our Sourcing Services</h2>
        <p className="section-subtitle">
          End-to-end sourcing support from supplier discovery to delivery at your doorstep.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link key={index} to={service.link} className="card group">
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </Link>
            )
          })}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}