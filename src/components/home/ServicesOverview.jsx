import { Link } from 'react-router-dom'
import { Search, ShieldCheck, ClipboardCheck, Clock, Ship } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

const services = [
  {
    icon: Search,
    title: 'Supplier Search & Matching',
    desc: 'We identify and match you with vetted suppliers that meet your product specifications, quality standards, and budget requirements.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits to verify business licenses, production capacity, quality systems, and real manufacturing capabilities.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production, and pre-shipment inspections following international AQL standards to protect your orders.',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'Regular progress tracking, schedule monitoring, and proactive communication to keep your production on track and on time.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'Freight booking, customs documentation, logistics coordination, and door-to-door delivery arrangements for your shipments.',
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Services"
          title="Full-Service China Sourcing Support"
          subtitle="From finding suppliers to delivering goods — we handle every step so you can focus on growing your business."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s) => (
            <div key={s.title} className="bg-white border border-gray-100 rounded-xl p-6 md:p-8 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-navy-100 transition-colors">
                <s.icon className="w-6 h-6 text-navy-600" />
              </div>
              <h3 className="text-lg font-semibold text-navy-600 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-accent-400 font-semibold hover:text-accent-500 transition-colors"
          >
            Learn More About Our Services
            <span className="text-lg">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
