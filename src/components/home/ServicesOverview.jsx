import { Link } from 'react-router-dom'
import { Search, ShieldCheck, ClipboardCheck, Clock, Ship } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist reliable suppliers from our vetted network based on your product requirements, target price, and quality standards.',
    color: 'bg-sky-blue',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify business licenses, production capacity, quality management systems, and compliance certifications.',
    color: 'bg-navy',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections following AQL standards to ensure product quality meets your specifications.',
    color: 'bg-trust-green',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    description: 'Regular monitoring of production progress, milestone tracking, and proactive communication to keep your orders on schedule.',
    color: 'bg-warm-orange',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics management including freight booking, customs documentation, and door-to-door delivery coordination.',
    color: 'bg-sky-blue-dark',
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Our Services"
          title="End-to-End Sourcing Support"
          description="From finding suppliers to delivering goods, we handle every step of your China sourcing journey."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 md:p-8 rounded-xl border border-border-gray bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-5`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
              <p className="text-muted-text text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sky-blue font-semibold hover:text-sky-blue-dark transition-colors"
          >
            Learn More About Our Services
          </Link>
        </div>
      </div>
    </section>
  )
}
