import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Search, Factory, ShieldCheck, Ship, ClipboardCheck, PackageCheck, ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Supplier Sourcing',
    description: 'We identify and match you with reliable manufacturers based on your product requirements, budget, and quality standards. Our network covers multiple industries and regions in China.',
    features: ['Requirement analysis', 'Supplier shortlisting', 'Competitive pricing negotiation', 'Capability matching'],
    icon: Search,
  },
  {
    title: 'Factory Verification',
    description: 'Before you commit, we verify factory legitimacy, business licenses, production capacity, and quality systems to reduce supplier risk.',
    features: ['Business license check', 'Factory audit', 'Production capacity review', 'Certification verification'],
    icon: Factory,
  },
  {
    title: 'Quality Control',
    description: 'We conduct inspections at key production stages to ensure products meet your specifications and quality standards.',
    features: ['Pre-production inspection', 'During-production inspection', 'Pre-shipment inspection', 'Container loading supervision'],
    icon: ShieldCheck,
  },
  {
    title: 'Shipping Coordination',
    description: 'We manage logistics from factory to your door, including freight forwarding, customs documentation, and shipment tracking.',
    features: ['Freight forwarding', 'Customs documentation', 'Shipment tracking', 'Insurance coordination'],
    icon: Ship,
  },
  {
    title: 'Product Development Support',
    description: 'Need modifications or custom designs? We help bridge communication between you and manufacturers for product development.',
    features: ['Design review', 'Prototype coordination', 'Material sourcing', 'Technical specifications'],
    icon: ClipboardCheck,
  },
  {
    title: 'Order Management',
    description: 'We act as your local representative, managing orders, follow-ups, and issue resolution throughout the production cycle.',
    features: ['Order tracking', 'Production follow-up', 'Issue resolution', 'Status reporting'],
    icon: PackageCheck,
  },
]

const Services = () => {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Our Sourcing Services</h1>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Comprehensive support to help you source, verify, inspect, and ship products from China with confidence.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <service.icon className="h-8 w-8 text-slate-900" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <ArrowRight className="mt-0.5 h-4 w-4 text-slate-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/contact">Request a Service Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
