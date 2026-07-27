import React from 'react'
import { Link } from 'react-router-dom'
import { Search, ShieldCheck, ClipboardCheck, Clock, Ship } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Search & Matching',
    desc: 'We identify and evaluate suppliers that match your product specifications, quality standards, and budget requirements.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    desc: 'On-site factory audits to verify business licenses, production capacity, quality systems, and operational compliance.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production, and pre-shipment inspections to ensure your products meet agreed specifications.',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'Regular monitoring of production progress, material procurement, and timeline adherence to prevent delays.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'Freight booking, customs documentation, and logistics coordination from factory to your destination port or warehouse.',
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Our Sourcing Services
          </h2>
          <p className="text-neutral-mid max-w-2xl mx-auto">
            End-to-end sourcing support from supplier discovery to delivery at your door.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-neutral-light rounded-lg p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-neutral-mid text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-accent font-semibold no-underline hover:text-accent-light transition-colors"
          >
            View All Services Details →
          </Link>
        </div>
      </div>
    </section>
  )
}
