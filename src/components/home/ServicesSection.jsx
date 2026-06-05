import { Link } from 'react-router-dom'
import { Search, ShieldCheck, Eye, Truck, FileCheck, BarChart3 } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and evaluate suppliers from our verified network of 500+ factories across major Chinese manufacturing hubs.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits to confirm legitimacy, production capacity, certifications, and compliance with international standards.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Eye,
    title: 'Quality Inspection',
    desc: 'Pre-production, in-line, and pre-shipment inspections to catch defects early and ensure products meet your specifications.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: FileCheck,
    title: 'Production Monitoring',
    desc: 'Regular follow-ups throughout the production cycle. We track timelines, verify milestones, and report progress to you.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We handle logistics, customs documentation, container loading supervision, and freight forwarding to your destination.',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: BarChart3,
    title: 'Cost Optimization',
    desc: 'We negotiate pricing, consolidate shipments, and identify cost-saving opportunities without compromising quality.',
    color: 'bg-teal-50 text-teal-600',
  },
]

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            End-to-End Sourcing Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From initial supplier identification to final delivery, we manage the
            entire sourcing process so you can focus on growing your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-7 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.color} mb-5`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
