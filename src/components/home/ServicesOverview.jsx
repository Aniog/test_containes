import { Search, Building2, ClipboardCheck, Eye, Ship } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and shortlist qualified manufacturers based on your product specs, MOQ, budget, and certification requirements.',
  },
  {
    id: 'factory-verification',
    icon: Building2,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify production capacity, certifications, equipment, workforce, and business legitimacy.',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment, during-production, and container loading inspections following AQL standards to protect your orders.',
  },
  {
    id: 'production-followup',
    icon: Eye,
    title: 'Production Follow-up',
    description: 'Regular factory visits and progress reports to keep your production on schedule and catch issues early.',
  },
  {
    id: 'shipping-coordination',
    icon: Ship,
    title: 'Shipping & Logistics',
    description: 'End-to-end freight coordination including documentation, customs clearance, and delivery tracking.',
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Services"
          title="End-to-End Sourcing Support"
          subtitle="From finding the right supplier to delivering goods at your door — we handle every step of the China sourcing process."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 hover:shadow-lg hover:border-accent-500/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-accent-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent-500/20 transition-colors">
                <service.icon className="w-6 h-6 text-accent-500" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
