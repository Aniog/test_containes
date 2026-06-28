import {
  Search, ShieldCheck, Eye, Truck, ClipboardCheck, Globe,
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified suppliers across China based on your exact product requirements, certifications, and capacity needs.',
  },
  {
    icon: ShieldCheck,
    title: 'Supplier Verification',
    desc: 'On-the-ground factory audits to confirm business licenses, production capabilities, quality systems, and export track record.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control',
    desc: 'Pre-production, in-line, and pre-shipment inspections to ensure every order meets your specifications before it leaves the factory.',
  },
  {
    icon: Eye,
    title: 'Production Follow-up',
    desc: 'We monitor your orders from confirmation to completion, reporting progress at each milestone to keep production on schedule.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'From factory gate to your warehouse. We arrange freight forwarding, customs documentation, and door-to-door logistics.',
  },
  {
    icon: Globe,
    title: 'Full Supply Chain Management',
    desc: 'End-to-end procurement support -- from initial sourcing to final delivery, with a dedicated account manager for your business.',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            Comprehensive Sourcing Services
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From finding the right supplier to delivering finished goods, we manage every step of the China sourcing process on your behalf.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="bg-white rounded-lg border border-border p-6 md:p-8 hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {s.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
