import { Link } from 'react-router-dom'
import { Search, Building2, ClipboardCheck, Timer, Ship, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate manufacturers that match your product requirements, budget, and quality standards.',
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    description: 'On-site audits to confirm business licenses, production capacity, and quality management systems.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to ensure your products meet specifications.',
  },
  {
    icon: Timer,
    title: 'Production Follow-up',
    description: 'Regular updates and milestone tracking so you always know the status of your orders.',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'We handle freight forwarding, customs documentation, and logistics to get your goods delivered.',
  },
]

export default function ServicesSection() {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">End-to-End Sourcing Services</h2>
          <p className="text-muted-foreground text-lg">
            From finding the right supplier to delivering goods to your door, we manage every step of the sourcing process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services" className="inline-flex items-center text-primary font-medium hover:underline">
            View all services
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
