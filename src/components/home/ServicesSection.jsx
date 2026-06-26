import { Link } from 'react-router-dom'
import { Search, Building2, ClipboardCheck, Eye, Ship, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable suppliers for your specific product requirements across multiple Chinese manufacturing hubs.',
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    description: 'On-site audits verify production capacity, certifications, working conditions, and legal compliance before you commit.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment inspections, during-production checks, and detailed reports with photos to ensure products meet your specifications.',
  },
  {
    icon: Eye,
    title: 'Production Monitoring',
    description: 'Regular progress updates and milestone tracking keep you informed throughout the entire manufacturing process.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'We handle logistics — from warehouse consolidation to customs documentation and freight booking to your destination.',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            End-to-End Sourcing Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From supplier discovery to final delivery, we manage every step of your China sourcing journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-brand-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="text-brand-700 hover:text-brand-800 font-semibold inline-flex items-center gap-2 transition-colors"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}