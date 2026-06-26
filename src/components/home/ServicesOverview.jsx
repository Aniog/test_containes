import { Link } from 'react-router-dom'
import { Search, ShieldCheck, ClipboardCheck, Clock, Ship, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified suppliers from our vetted network of 5,000+ factories across China, matched to your product requirements.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits covering business licenses, production capacity, quality systems, and compliance — before you place an order.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production, and pre-shipment inspections based on your specifications and international standards.',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'We monitor production schedules, track milestones, and report progress so your orders stay on time.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'End-to-end logistics support including freight booking, customs documentation, and door-to-door delivery coordination.',
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-amber font-semibold text-sm uppercase tracking-wider mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Full-Service China Sourcing Support
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            From finding suppliers to delivering goods, we handle every step of your China sourcing journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 hover:shadow-lg hover:border-slate-300 transition-all group"
            >
              <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-5 group-hover:bg-navy/10 transition-colors">
                <service.icon className="w-6 h-6 text-navy" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-navy font-semibold hover:text-navy-dark transition-colors"
          >
            Learn more about our services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
