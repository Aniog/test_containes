import { Link } from 'react-router-dom'
import { Shield, Search, Eye, Truck, Package, FileCheck, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable suppliers across China, matching your specific product requirements and quality standards.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify legitimacy, production capacity, certifications, and compliance with international standards.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Eye,
    title: 'Quality Inspection',
    description: 'Pre-shipment inspections, during-production checks, and pre-production samples to ensure your products meet specifications.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Package,
    title: 'Production Follow-up',
    description: 'Regular monitoring of production timelines, milestone tracking, and progress reports to keep your orders on schedule.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics management including freight forwarding, customs clearance, and door-to-door delivery.',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: FileCheck,
    title: 'Documentation',
    description: 'Complete handling of export documentation, certificates of origin, inspection reports, and compliance paperwork.',
    color: 'bg-teal-50 text-teal-600',
  },
]

const HomeServices = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-brand-100 text-brand-700 text-sm font-medium rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            End-to-End Sourcing Solutions
          </h2>
          <p className="text-lg text-slate-600">
            From finding the right supplier to delivering products to your door, we handle every step
            of the China sourcing process.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-brand-600 font-medium text-sm hover:text-brand-700 transition-colors"
                >
                  Learn More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeServices
