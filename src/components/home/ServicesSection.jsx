import { Link, useEffect, useRef } from 'react'
import { Search, ShieldCheck, ClipboardCheck, Clock, Ship, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist qualified suppliers from our verified network based on your product requirements, target price, and quality standards.',
    link: '/services#sourcing',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify business licenses, production capacity, quality systems, and real manufacturing capabilities before you commit.',
    link: '/services#verification',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections following international AQL standards to protect your order quality.',
    link: '/services#inspection',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    description: 'We monitor production schedules, track milestones, and report progress so your orders stay on time and issues are caught early.',
    link: '/services#production',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'Consolidation, freight booking, customs documentation, and door-to-door logistics coordination for sea, air, and rail shipments.',
    link: '/services#shipping',
  },
]

export default function ServicesSection() {
  const containerRef = useRef(null)

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-3">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark tracking-tight mb-4">
            Full-Service China Sourcing Support
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            From finding suppliers to delivering goods, we handle every step of your China sourcing process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.link}
              className="group bg-white border border-gray-100 rounded-xl p-6 md:p-8 hover:shadow-lg hover:border-accent/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors">
                <service.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-primary-dark mb-3">{service.title}</h3>
              <p className="text-steel text-sm leading-relaxed mb-4">{service.description}</p>
              <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
