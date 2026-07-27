import React from 'react'
import { Link } from 'react-router-dom'
import { Search, ShieldCheck, ClipboardCheck, Clock, Ship } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We search across Chinese manufacturing hubs to find suppliers that match your product specifications, price targets, and quality requirements.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'We visit factories in person, verify business licenses, check production capabilities, and assess quality management systems before you commit.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections based on AQL standards. Detailed photo reports with measurable results.',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    description: 'We monitor production schedules, track milestones, and keep you updated on progress so your orders arrive on time.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'We coordinate logistics from factory to port, handle customs documentation, and work with freight forwarders to get your goods delivered.',
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Our Sourcing Services
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From finding suppliers to delivering goods, we cover every step of the China sourcing process with professional, on-the-ground support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-primary-200 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors">
                <service.icon className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary-500 font-medium hover:text-primary-600 no-underline transition-colors"
          >
            Learn more about our services
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
