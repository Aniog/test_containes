import React from 'react'
import { Link } from 'react-router-dom'
import { Search, Building2, ClipboardCheck, Timer, Ship, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate reliable manufacturers that match your product requirements, budget, and quality standards.',
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    description: 'On-site audits to verify business licenses, production capacity, quality systems, and working conditions.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to ensure your products meet specifications.',
  },
  {
    icon: Timer,
    title: 'Production Monitoring',
    description: 'Regular updates and progress tracking throughout the manufacturing process to keep you informed.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including customs clearance, freight forwarding, and delivery tracking.',
  },
]

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-[#1a2744] mb-4">
            Our Sourcing Services
          </h2>
          <p className="text-[#4a5568] max-w-2xl mx-auto text-base md:text-lg">
            Comprehensive sourcing solutions to simplify your China supply chain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="card group">
              <div className="w-12 h-12 bg-[#1a2744]/5 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#d4a843]/10 transition-colors">
                <service.icon size={24} className="text-[#1a2744] group-hover:text-[#d4a843] transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-[#1a2744] mb-3">{service.title}</h3>
              <p className="text-[#4a5568] text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services" className="btn-secondary">
            View All Services
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
