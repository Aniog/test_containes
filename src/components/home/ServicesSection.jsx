import { Link } from 'react-router-dom'
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Truck,
  Users,
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify pre-vetted manufacturers matching your product specifications, budget, and volume requirements.',
    id: 'service-supplier',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits covering legal status, production capacity, certifications, and working conditions.',
    id: 'service-factory',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control',
    desc: 'AQL-based inspections at every stage: pre-production, during production, and pre-shipment.',
    id: 'service-qc',
  },
  {
    icon: Factory,
    title: 'Production Follow-Up',
    desc: 'Weekly progress reports with photos and videos, keeping you informed of every milestone.',
    id: 'service-production',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'Freight forwarding, customs clearance, and door-to-door delivery management across all modes.',
    id: 'service-shipping',
  },
  {
    icon: Users,
    title: 'Dedicated Account Manager',
    desc: 'One point of contact who speaks your language and understands your market requirements.',
    id: 'service-account',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-4">
            Our Sourcing Services
          </h2>
          <p id="services-subtitle" className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
            End-to-end sourcing solutions that cover every step of your supply chain in China.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group p-6 md:p-8 bg-white border border-brand-gray-200 rounded-xl hover:border-brand-blue hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <service.icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
              </div>
              <h3 id={`${service.id}-title`} className="text-lg font-semibold text-brand-navy mb-3">
                {service.title}
              </h3>
              <p id={`${service.id}-desc`} className="text-brand-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:text-brand-lightblue transition-colors"
          >
            View All Services
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
