import { Link } from 'react-router-dom'
import { Search, ShieldCheck, ClipboardCheck, Clock, Ship } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist qualified suppliers matching your product specifications, quality standards, and budget requirements.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify business licenses, production capacity, quality management systems, and compliance certifications.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to ensure your products meet agreed specifications.',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    description: 'Regular monitoring of production progress, milestone tracking, and proactive communication to prevent delays.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics management including freight booking, customs documentation, and delivery tracking to your destination.',
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900">
            Full-Service China Sourcing Support
          </h2>
          <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">
            From finding suppliers to delivering goods, we handle every step of your China sourcing journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl border border-neutral-200 p-6 md:p-8 hover:shadow-lg hover:border-primary-200 transition-all group"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                  <Icon className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-600 transition-colors"
          >
            Learn more about our services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
