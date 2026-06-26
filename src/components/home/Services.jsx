import React from 'react'
import { Link } from 'react-router-dom'
import { Search, ShieldCheck, ClipboardCheck, Clock, Ship } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified suppliers from our verified network based on your product requirements, target price, and quality standards.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'Our team visits factories in person to verify business licenses, production capacity, quality systems, and working conditions before you commit.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production, and pre-shipment inspections to ensure your products meet specifications before they leave the factory.',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'We monitor production schedules, track milestones, and report progress so your orders stay on track and delays are caught early.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'From booking freight to customs documentation, we coordinate logistics to get your goods from the factory to your door smoothly.',
  },
]

export default function Services() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">
            Our Sourcing Services
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            End-to-end sourcing support from finding suppliers to delivering goods. Each service is designed to reduce your risk and save you time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 hover:shadow-lg hover:border-accent/30 transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors"
          >
            Learn More About Our Services
            <span className="text-accent">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
