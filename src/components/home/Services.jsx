import { Link } from 'react-router-dom'
import { Search, Building2, ClipboardCheck, Package, Truck, FileCheck, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Search',
    description: 'We identify and evaluate potential suppliers based on your specific requirements, production capabilities, and quality standards.',
    features: ['Industry-matched suppliers', 'Capability assessment', 'Price benchmarking'],
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    description: 'On-site inspections to verify factory existence, assess production capacity, and ensure compliance with ethical standards.',
    features: ['Business license verification', 'Production capacity audit', 'Social compliance check'],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Rigorous quality control at every stage - from pre-production samples to final random inspection before shipment.',
    features: ['AQL sampling', 'Function testing', 'Visual & dimension checks'],
  },
  {
    icon: Package,
    title: 'Production Follow-up',
    description: 'Regular updates and on-site visits during production to ensure timeline adherence and quality consistency.',
    features: ['Production monitoring', 'Progress reports', 'Issue resolution'],
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics management including customs clearance, documentation, and freight forwarding.',
    features: ['Multi-modal shipping', 'Customs clearance', 'Track & trace'],
  },
  {
    icon: FileCheck,
    title: 'Document Services',
    description: 'Complete documentation support including contracts, invoices, certificates, and compliance paperwork.',
    features: ['Contract drafting', 'Certificate procurement', 'Legal translation'],
  },
]

export function Services() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Complete Sourcing Solutions
          </h2>
          <p className="text-lg text-neutral-600">
            From supplier identification to final delivery, we handle every step of your 
            China procurement journey with professional expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-xl hover:border-primary-200 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                <service.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {service.title}
              </h3>
              <p className="text-neutral-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-neutral-500">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700">
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}