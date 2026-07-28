import { Search, ShieldCheck, ClipboardCheck, Eye, Truck, FileText } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable suppliers across China\'s manufacturing hubs, matching your specifications and quality standards.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify legitimacy, production capacity, certifications, and compliance with international standards.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, in-line, and pre-shipment inspections to catch defects early and ensure products meet your specifications.',
  },
  {
    icon: Eye,
    title: 'Production Monitoring',
    description: 'Regular follow-ups throughout the manufacturing process to keep production on schedule and address issues promptly.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics management including freight forwarding, customs clearance, and door-to-door delivery worldwide.',
  },
  {
    icon: FileText,
    title: 'Sample Management',
    description: 'We coordinate product samples, evaluate quality, and ensure they match your requirements before bulk production begins.',
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-brand-orange uppercase tracking-wider">Our Services</span>
          <h2 id="services-title" className="mt-3 text-3xl sm:text-4xl font-bold text-brand-navy">
            Comprehensive Sourcing Solutions
          </h2>
          <p id="services-subtitle" className="mt-4 text-lg text-gray-600">
            From finding the right supplier to delivering products to your door, we handle every step of the China sourcing process.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group relative p-8 rounded-xl border border-gray-100 bg-white hover:border-brand-orange/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-navy/5 group-hover:bg-brand-orange/10 transition-colors mb-6">
                  <Icon className="h-7 w-7 text-brand-navy group-hover:text-brand-orange transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-brand-navy mb-3">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
