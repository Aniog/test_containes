import { Search, Factory, ClipboardCheck, PackageCheck, Truck } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Matching',
    description:
      'We identify and shortlist qualified Chinese manufacturers that match your product specifications, budget, and volume requirements.',
  },
  {
    icon: Factory,
    title: 'Factory Audit & Verification',
    description:
      'On-site factory audits covering production capacity, certifications, quality systems, and financial stability before you commit.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control Inspection',
    description:
      'Pre-production, during-production, and pre-shipment inspections to ensure your products meet international quality standards.',
  },
  {
    icon: PackageCheck,
    title: 'Production Follow-up',
    description:
      'Regular factory visits to track production progress, resolve issues early, and ensure on-time delivery.',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics Coordination',
    description:
      'Freight forwarding, customs documentation, and consolidated shipping management to get your goods delivered efficiently.',
  },
]

export default function HomeServices() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
            End-to-End Sourcing Services
          </h2>
          <p id="services-subtitle" className="mt-4 text-gray-600 text-lg">
            From supplier discovery to final delivery — we manage the entire sourcing process so you can focus on growing your business.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-xl border border-gray-100 p-6 md:p-8 hover:shadow-md hover:border-brand-orange/30 transition-all"
            >
              <div className="w-12 h-12 bg-brand-navy/5 rounded-lg flex items-center justify-center mb-5 group-hover:bg-brand-orange/10 transition-colors">
                <service.icon className="w-6 h-6 text-brand-navy group-hover:text-brand-orange transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-brand-navy mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}