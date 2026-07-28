import React from 'react'
import { Link } from 'react-router-dom'
import {
  Search,
  Shield,
  ClipboardCheck,
  Factory,
  Truck,
  ArrowRight,
  Package,
  FileCheck,
  BarChart3,
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable suppliers from our extensive network of manufacturers across China.',
    features: ['500+ verified suppliers', 'Industry-specific matching', 'Competitive pricing'],
  },
  {
    icon: Shield,
    title: 'Supplier Verification',
    description: 'Comprehensive factory audits and background checks to ensure supplier legitimacy and capability.',
    features: ['On-site inspections', 'License verification', 'Financial checks'],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control',
    description: 'Rigorous quality inspections at every stage of production to meet your specifications.',
    features: ['Pre-production samples', 'In-line inspections', 'Pre-shipment QC'],
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    description: 'Regular factory visits and progress updates to keep your orders on track.',
    features: ['Weekly updates', 'Timeline management', 'Issue resolution'],
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'End-to-end shipping coordination from factory floor to your warehouse door.',
    features: ['Sea, air & rail freight', 'Customs clearance', 'DDP delivery'],
  },
  {
    icon: FileCheck,
    title: 'Documentation',
    description: 'Complete handling of all export documentation, certifications, and compliance requirements.',
    features: ['Export licenses', 'Certificates of origin', 'Compliance docs'],
  },
]

const ServicesOverview = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full text-primary text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Sourcing Solutions for Global Buyers
          </h2>
          <p className="text-lg text-muted-foreground">
            From finding the right supplier to delivering products to your door, we handle 
            every step of the China sourcing process.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-xl border border-border p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
              >
                <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors group"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
