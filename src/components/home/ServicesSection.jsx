import { Search, Factory, ShieldCheck, ClipboardCheck, Ship, Beaker } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable suppliers that match your product specifications, budget, and quality requirements.',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    description: 'On-site audits to verify factory legitimacy, production capacity, certifications, and working conditions.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Control',
    description: 'Pre-shipment inspections, in-process QC checks, and product testing to ensure your standards are met.',
  },
  {
    icon: ClipboardCheck,
    title: 'Production Monitoring',
    description: 'Regular progress updates and milestone checks to keep your orders on track and on schedule.',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    description: 'Coordination of freight, customs documentation, and door-to-door delivery to any destination worldwide.',
  },
  {
    icon: Beaker,
    title: 'Product Sampling',
    description: 'Management of sample development, revisions, and approval process before bulk production begins.',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm tracking-wide uppercase">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            End-to-End Sourcing Services
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From supplier discovery to final delivery, we manage every step of your China sourcing process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group p-6 md:p-8 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            View All Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}