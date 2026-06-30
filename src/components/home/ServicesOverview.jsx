import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, Shield, ClipboardCheck, Factory, Truck, BarChart3 } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist reliable suppliers based on your product requirements, budget, and quality standards.',
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify business licenses, production capacity, certifications, and working conditions.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment inspections, during-production checks, and lab testing to ensure products meet your specifications.',
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    description: 'Regular follow-up on production progress, raw material tracking, and real-time updates throughout manufacturing.',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'End-to-end freight coordination including consolidation, customs documentation, and door-to-door delivery.',
  },
  {
    icon: BarChart3,
    title: 'Sample Management',
    description: 'Sample requests, collection, evaluation, and feedback coordination between you and suppliers.',
  },
]

export default function ServicesOverview() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      // Stock images loaded at runtime
    })
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 text-center mb-4">
          Our Sourcing Services
        </h2>
        <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          End-to-end sourcing support from supplier identification to final delivery — 
          we handle every step so you can focus on growing your business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group p-6 lg:p-8 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-navy-100 transition-colors">
                  <Icon className="w-6 h-6 text-navy-700" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-navy-900 transition-colors"
          >
            View All Services &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}