import { Link } from 'react-router-dom'
import { Search, ShieldCheck, ClipboardCheck, Eye, Truck, Package } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet qualified suppliers from our network of 500+ verified factories across China.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-site factory audits, license checks, and capability assessments before you commit.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, in-line, and pre-shipment inspections to catch defects before they ship.',
  },
  {
    icon: Eye,
    title: 'Production Monitoring',
    description: 'Regular factory visits and progress reports so you stay informed throughout manufacturing.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'Freight booking, customs documentation, and logistics from factory floor to your door.',
  },
  {
    icon: Package,
    title: 'Custom Packaging',
    description: 'Branded packaging design and production to match your retail or e-commerce requirements.',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">What We Do</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-heading font-extrabold text-text">
            End-to-End Sourcing Services
          </h2>
          <p className="mt-4 text-text-muted text-base leading-relaxed">
            From finding the right supplier to delivering goods to your warehouse, we manage every step so you can focus on growing your business.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group bg-white border border-border rounded-xl p-7 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-text mb-2">{service.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-light transition-colors"
          >
            View all services &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
