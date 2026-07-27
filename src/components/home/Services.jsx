import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Search, Shield, Eye, ClipboardCheck, Truck, FileCheck,
  ArrowRight 
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We find and vet reliable manufacturers in China that match your product requirements and quality standards.',
    features: ['Market research', 'Supplier screening', 'Price negotiation'],
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'On-site factory audits to verify legitimacy, production capacity, and compliance with industry standards.',
    features: ['Business license check', 'Production capacity', 'Compliance audit'],
  },
  {
    icon: Eye,
    title: 'Quality Control',
    description: 'Comprehensive inspection services at every stage of production to ensure your products meet specifications.',
    features: ['Pre-production samples', 'In-line inspection', 'Pre-shipment check'],
  },
  {
    icon: ClipboardCheck,
    title: 'Production Follow-up',
    description: 'Regular updates and monitoring of your production timeline to ensure on-time delivery.',
    features: ['Progress tracking', 'Timeline management', 'Issue resolution'],
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics management from factory floor to your warehouse door.',
    features: ['Freight forwarding', 'Customs clearance', 'Documentation'],
  },
  {
    icon: FileCheck,
    title: 'Documentation',
    description: 'Complete handling of all import/export documentation, certifications, and compliance paperwork.',
    features: ['Certificates of origin', 'Product certifications', 'Import licenses'],
  },
]

export default function Services() {
  return (
    <section className="section-padding bg-white" id="services">
      <div className="container-custom">
        <div className="section-title">
          <h2>Our Sourcing Services</h2>
          <p>
            Comprehensive China sourcing solutions tailored to your business needs. 
            We handle everything from supplier discovery to final delivery.
          </p>
        </div>

        <div className="grid-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="card-padding">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="heading-4 text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="flex flex-col gap-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary text-lg px-8 py-4">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
