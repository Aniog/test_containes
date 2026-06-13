import { Search, Shield, ClipboardCheck, Package, Truck, BarChart3 } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet qualified suppliers from our verified network of 2,000+ factories across China\'s major manufacturing hubs.',
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify business licenses, production capabilities, certifications, and compliance with your standards.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, in-line, and pre-shipment inspections using AQL standards to catch defects before goods leave the factory.',
  },
  {
    icon: Package,
    title: 'Production Follow-Up',
    description: 'Weekly progress updates, milestone tracking, and proactive issue resolution to keep your orders on schedule.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics management including FCL/LCL ocean freight, air cargo, customs clearance, and door delivery.',
  },
  {
    icon: BarChart3,
    title: 'Cost Negotiation',
    description: 'Leverage local market knowledge to negotiate competitive pricing, favorable payment terms, and reduce your landed cost.',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Services"
          title="End-to-End China Sourcing Solutions"
          description="From initial supplier search to final delivery, we handle every step of your supply chain so you can focus on growing your business."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-neutral-50 rounded-xl p-6 md:p-8 border border-neutral-200 hover:border-primary/20 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">{service.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
