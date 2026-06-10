import React from 'react'
import { Link } from 'react-router-dom'
import { Search, ClipboardCheck, Package, Truck, FileText, Users } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'

const services = [
  {
    icon: Search,
    title: 'Supplier Verification',
    description: 'We conduct thorough background checks on potential suppliers, verifying business licenses, production capacity, and facility authenticity.',
    features: ['Business license verification', 'Factory audit reports', 'Financial stability checks'],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    description: 'Professional inspectors conduct pre-production, during production, and pre-shipment inspections to ensure your products meet specifications.',
    features: ['AQL sampling inspection', 'Product-specific checklists', 'Detailed inspection reports'],
  },
  {
    icon: Package,
    title: 'Production Follow-up',
    description: 'We monitor production progress, track timeline compliance, and resolve any issues that arise during manufacturing.',
    features: ['Weekly progress reports', 'Sample approval management', 'Production timeline tracking'],
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'From freight forwarding to customs clearance, we handle all logistics to ensure smooth delivery of your goods.',
    features: ['Multi-modal shipping options', 'Customs documentation', 'Last-mile delivery coordination'],
  },
]

const ServicesSection = () => {
  return (
    <section className="py-20 bg-slate-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Sourcing Services"
          subtitle="End-to-end solutions to simplify your China sourcing operations"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title} hover className="h-full">
              <div className="w-14 h-14 bg-secondary-50 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-slate-500">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <button className="inline-flex items-center text-secondary font-semibold hover:text-secondary-600 transition-colors">
              View All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection