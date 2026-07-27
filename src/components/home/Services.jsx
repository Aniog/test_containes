import React from 'react'
import { Link } from 'react-router-dom'
import { Search, ShieldCheck, ClipboardCheck, Clock, Ship } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Search',
    desc: 'We identify and evaluate suppliers matching your product requirements, quality standards, and budget from our network of 500+ verified factories.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site audits to verify business licenses, production capacity, quality systems, and working conditions before you commit to any supplier.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production, and pre-shipment inspections following international AQL standards to ensure product quality.',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'Regular monitoring of production progress, timeline tracking, and proactive communication to keep your orders on schedule.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'End-to-end logistics support including freight booking, customs documentation, and delivery tracking from factory to your door.',
  },
]

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">Our Sourcing Services</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Comprehensive sourcing support from supplier discovery to delivery. We handle every step so you can focus on growing your business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s) => (
            <div key={s.title} className="p-6 md:p-8 rounded-lg border border-neutral-200 bg-white hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">{s.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium no-underline transition-colors"
          >
            Learn More About Our Services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services
